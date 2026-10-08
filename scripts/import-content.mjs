#!/usr/bin/env node
/**
 * import-content.mjs
 * ------------------
 * Turns the written pages from the Local-SEO-Toolkit project into site content:
 *   src/data/pages/*.md    markdown + frontmatter (one file per page)
 *   src/data/nav.json      navigation / footer links for pages that exist
 *   LAUNCH-CHECKLIST.md    every [NEEDS DATA] / [VERIFY] marker per page
 *
 * Source of truth for copy stays in Local-SEO-Toolkit; edit there and re-run:
 *   npm run import-content
 * Override the source folder with CONTENT_SOURCE=<path>.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const SOURCE =
  process.env.CONTENT_SOURCE ||
  "C:/Users/lenevo/Local-SEO-Toolkit/data/lubbockelitewatersoftener";
const OUT_PAGES = path.join(root, "src", "data", "pages");
const OUT_NAV = path.join(root, "src", "data", "nav.json");
const IMAGE_DIR = path.join(root, "src", "assets", "images");
const OUT_CHECKLIST = path.join(root, "LAUNCH-CHECKLIST.md");

const MARKER_RE = /\[(?:NEEDS DATA|VERIFY)[^\]]*\]/g;
const GUIDE_HUB = "/water-softener-guides/";
const GEO_HUB = "/service-areas/";

// Brand and place names come from site.config.ts (single source of truth).
const cfgSrc = fs.readFileSync(path.join(root, "src", "site.config.ts"), "utf8");
const cfgVal = (key) => (cfgSrc.match(new RegExp(`^\\s{2}${key}:\\s*"([^"]+)"`, "m")) || [])[1];
const BRAND = cfgVal("businessName");
const CITY = cfgVal("city");
const STATE = cfgVal("stateAbbr");
const COUNTY = cfgVal("county");
if (!BRAND || !CITY || !STATE || !COUNTY) throw new Error("site.config.ts: brand/city/state/county not found");

const map = JSON.parse(fs.readFileSync(path.join(SOURCE, "topical-map.json"), "utf8"));
const guideParent = new Map(map.guides.articles.map((g) => [g.slug, g.parent_service]));
const parentBySlug = new Map();
const typeBySlug = new Map();
parentBySlug.set(GUIDE_HUB, "/");
parentBySlug.set(GEO_HUB, "/");
typeBySlug.set(GUIDE_HUB, "guide-hub");
typeBySlug.set(GEO_HUB, "geo-hub");
for (const p of map.pages) {
  parentBySlug.set(p.slug, p.parent || "/");
  typeBySlug.set(p.slug, p.type);
}
for (const g of map.guides.articles) {
  parentBySlug.set(g.slug, GUIDE_HUB);
  typeBySlug.set(g.slug, "guide");
}
for (const g of map.geo.pages) {
  parentBySlug.set(g.slug, GEO_HUB);
  typeBySlug.set(g.slug, "geo");
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const markers = (s) => s.replace(MARKER_RE, (m) => `<mark class="data-gap">${m}</mark>`);
const inlineHtml = (md) =>
  markers(esc(md))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
const stripInline = (md) =>
  md.replace(MARKER_RE, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();

function draftDescription(openingMd) {
  const text = stripInline(openingMd);
  if (text.length <= 155) return text;
  const cut = text.slice(0, 152);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "") + "...";
}

/**
 * Homepage backlinks, modelled on the Henderson site: every inner page carries
 * exactly two links to "/" inside its content.
 *   1. Opening paragraph: the exact brand name as the anchor (hub, service and
 *      hub-style pages). Guides and town pages keep their keyword anchor
 *      ("water softener Lubbock TX") for variety.
 *   2. A closing "brand backlink" paragraph before the final call to action,
 *      anchored on brand + state, followed by a sentence saying what the page
 *      offers.
 * Any other homepage links in the body become plain text so the pair stays
 * natural (header logo, "Home" nav and breadcrumbs also link home).
 */
const lc = (s) => s.toLowerCase().replace(/&/g, "and").replace(/\buv\b/g, "UV");
function backlinkPhrase(slug, type, h1) {
  if (type === "geo") return h1.replace(/^Water Softener Installation & Service in /, "water softener installation and service in ");
  if (type === "guide") {
    const parent = guideParent.get(slug) || "/water-softener-installation/";
    return parent.replace(/^\/|\/$/g, "").replace(/-/g, " ").replace("salt free", "salt-free");
  }
  if (type === "geo-hub" || type === "guide-hub") return "water softener installation, replacement, repair and water testing";
  return lc(crumbOf(h1));
}
function applyHomeBacklinks({ slug, type, h1, openingMd, body }) {
  let opening = openingMd;
  const openingHasHomeLink = /\[[^\]]+\]\(\/\)/.test(opening);
  if (!openingHasHomeLink && type !== "geo" && type !== "guide") {
    opening = opening.replace(BRAND, `[${BRAND}](/)`); // first plain mention becomes the anchor
  }
  let text = body.replace(/\[([^\]]+)\]\(\/\)/g, "$1"); // demote stray homepage links
  const phrase = backlinkPhrase(slug, type, h1);
  const tail = type === "geo" ? `and serves homes and businesses across ${COUNTY}.` : `for homes and businesses across ${CITY} and ${COUNTY}.`;
  const paragraph = `[${BRAND} ${STATE}](/) provides ${phrase} ${tail}`;
  const cta = text.lastIndexOf("\n## Get Your Free Estimate");
  text = cta === -1 ? `${text}\n\n${paragraph}` : `${text.slice(0, cta)}\n\n${paragraph}\n${text.slice(cta)}`;
  return { openingMd: opening, body: text };
}

const slugToFile = (slug) => (slug === "/" ? "home" : slug.replace(/^\/|\/$/g, "").replace(/\//g, "--"));
const crumbOf = (h1) => h1.replace(/ in Lubbock, TX$/, "").replace(/ Around Lubbock, TX$/, "").replace(/^Lubbock TX /, "").trim();

fs.rmSync(OUT_PAGES, { recursive: true, force: true });
fs.mkdirSync(OUT_PAGES, { recursive: true });

const files = fs.readdirSync(path.join(SOURCE, "written-content")).filter((f) => f.endsWith(".md"));
const pages = [];

for (const file of files) {
  const raw = fs.readFileSync(path.join(SOURCE, "written-content", file), "utf8").replace(/\r\n/g, "\n");
  const head = raw.match(/^<!--([\s\S]*?)-->/);
  if (!head) throw new Error(`${file}: missing header comment`);
  const meta = head[1];
  const slugMatch = meta.match(/Slug:\s*(\S+)/) || meta.match(/Page:\s*(\/\S*)/);
  if (!slugMatch) throw new Error(`${file}: no slug in header`);
  const slug = slugMatch[1];
  const titleTag = (meta.match(/Title tag:\s*(.+)/) || [])[1]?.trim();
  const metaDescRaw = (meta.match(/Meta description:\s*(.+)/) || [])[1]?.trim() || "";

  let body = raw.slice(head[0].length);

  // Image comments. The first one is the page's lead image (rendered by the template
  // after the hero); later ones become inline markdown images. A file that is not in
  // src/assets/images yet (the code-built diagrams) is skipped and reported.
  const images = [];
  let leadImage = null;
  body = body.replace(/<!--\s*image:\s*([^|]+)\|\s*alt:\s*([\s\S]*?)-->/g, (_, f, a) => {
    const file = f.trim();
    const alt = a.trim().replace(/\s+/g, " ").replace(/[\[\]]/g, "");
    const exists = fs.existsSync(path.join(IMAGE_DIR, file));
    images.push({ file, alt, exists });
    if (!exists) return "";
    if (!images.slice(0, -1).length) {
      leadImage = { file, alt };
      return "";
    }
    return `\n\n![${alt}](../../assets/images/${file})\n\n`;
  });
  body = body.replace(/<!--[\s\S]*?-->/g, "");

  const noteMatch = body.match(/^\*(Page type:[^\n]*)\*\s*$/m);
  body = body.replace(/^\*Page type:[^\n]*\*\s*$/m, "");

  const lines = body.split("\n");
  const cleaned = [];
  for (const line of lines) {
    if (/^---\s*$/.test(line)) continue;
    if (/^## (MAIN CONTENT|SUPPLEMENTARY CONTENT)\s*$/.test(line)) continue;
    cleaned.push(line.replace(/^## \[CONTEXTUAL BORDER\]\s*/, "## "));
  }
  body = cleaned.join("\n").trim();
  // trust-layer callouts render as blockquotes
  body = body.replace(/^(\*\*(?:Not a good fit if\.\.\.|What owners tell us:)\*\*)/gm, "> $1");

  const h1Match = body.match(/^# (.+)$/m);
  if (!h1Match) throw new Error(`${file}: no H1`);
  const h1 = h1Match[1].trim();
  body = body.replace(/^# .+\n+/, "");

  // opening paragraph = first block of text after the H1
  const openEnd = body.indexOf("\n\n");
  let openingMd = (openEnd === -1 ? body : body.slice(0, openEnd)).trim();
  body = (openEnd === -1 ? "" : body.slice(openEnd)).trim();

  const isHome = slug === "/";
  let formHeading = "";
  let formIntro = "";
  if (isHome) {
    body = body.replace(/^\[Get a Free Estimate\]\(#estimate\)\s*/m, "");
    // lift the lead-form section out; the template renders the real form
    const formSection = body.match(/^## (Get Your Free Water Softener Estimate[^\n]*)\n+([^\n]+)\n[\s\S]*?(?=^## )/m);
    if (formSection) {
      formHeading = formSection[1].trim();
      formIntro = formSection[2].trim();
      body = body.replace(formSection[0], "");
    }
  } else {
    body = body.replace(/\(\/#estimate\)/g, "(#estimate)");
    // The hero opening paragraph keeps a single link (the homepage backlink); the
    // "Request a free estimate" sentence stays as text and the hero buttons carry the CTA.
    openingMd = openingMd.replace(/\[([^\]]+)\]\(\/#estimate\)/g, "$1");
    ({ openingMd, body } = applyHomeBacklinks({ slug, type: typeBySlug.get(slug) || "page", h1, openingMd, body }));
  }

  const description =
    metaDescRaw && !/NEEDS|VERIFY/.test(metaDescRaw) ? metaDescRaw : draftDescription(openingMd);
  const metaDraft = !(metaDescRaw && !/NEEDS|VERIFY/.test(metaDescRaw));

  const allMarkers = [...(openingMd + "\n" + body + "\n" + formIntro).matchAll(MARKER_RE)].map((m) => m[0]);
  const parentSlug = isHome ? null : parentBySlug.get(slug) ?? "/";

  const fm = {
    title: h1,
    seoTitle: titleTag || h1,
    description,
    metaDraft,
    slug,
    pageType: isHome ? "home" : typeBySlug.get(slug) || "page",
    parentSlug,
    crumb: crumbOf(h1),
    openingHtml: isHome ? inlineHtml(openingMd) : inlineHtml(openingMd).replace(/href="\/#estimate"/g, 'href="#estimate"'),
    formHeading,
    formIntro,
    leadImage,
    images,
    markerCount: allMarkers.length,
  };
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n");
  const out = `---\n${yaml}\n---\n\n${markers(body)}\n`;
  fs.writeFileSync(path.join(OUT_PAGES, `${slugToFile(slug)}.md`), out);
  pages.push({ slug, file: slugToFile(slug), h1, crumb: fm.crumb, type: fm.pageType, metaDraft, markers: allMarkers, note: noteMatch?.[1], missingImages: images.filter((i) => !i.exists).map((i) => i.file) });
}

// ---- navigation ------------------------------------------------------------
const built = new Set(pages.map((p) => p.slug));
const has = (slug) => built.has(slug);
const link = (slug) => ({ href: slug, label: pages.find((p) => p.slug === slug).crumb });
const hubs = map.pages.filter((p) => p.type === "hub" && has(p.slug)).map((p) => link(p.slug));
const services = map.pages.filter((p) => p.type !== "hub" && has(p.slug)).map((p) => ({ ...link(p.slug), parent: p.parent }));
const nav = {
  hubs,
  services,
  guideHub: has(GUIDE_HUB) ? link(GUIDE_HUB) : null,
  geoHub: has(GEO_HUB) ? link(GEO_HUB) : null,
};
fs.writeFileSync(OUT_NAV, JSON.stringify(nav, null, 2) + "\n");

// ---- launch checklist ------------------------------------------------------
const total = pages.reduce((n, p) => n + p.markers.length, 0);
const missingImages = [...new Set(pages.flatMap((p) => p.missingImages))];
const rows = pages
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((p) => {
    const m = p.markers.length ? p.markers.map((x) => `  - ${x}`).join("\n") : "  - (none)";
    return `### ${p.slug}\n- Meta description: ${p.metaDraft ? "DRAFT, needs final wording" : "final"}\n- Open markers: ${p.markers.length}\n${m}`;
  })
  .join("\n\n");
const checklist = `# Launch checklist (generated ${new Date().toISOString().slice(0, 10)})

Generated by \`npm run import-content\` from ${SOURCE}.
Do not publish while any item below is open. Markers show on the site as highlighted text.

## Site-wide
- [ ] Replace the placeholder phone (806) 000-0000 in src/site.config.ts
- [ ] Set businessEmail in src/site.config.ts (the quote form stays disabled until then)
- [ ] Confirm the exact Lubbock hardness figure (169 vs 192 mg/L conflict) and update gpgLow/gpgHigh
- [ ] TCEQ Water Treatment Specialist licence number and class for whoever installs
- [ ] Warranty, guarantee, same-day policy, years in business, price ranges, real reviews
- [ ] Photos are AI-generated stand-ins (originals in brand_assets/unbranded-images). Swap for real Lubbock job photos as they come in, keeping the file names
- [ ] Build the images still missing (code-made diagrams, listed below): ${missingImages.length ? missingImages.join(", ") : "none"}
- [ ] Final meta descriptions for every page marked DRAFT
- [ ] Decide on Idalou and write the remaining nine town pages (see Local-SEO-Toolkit reports)

## Totals
- Pages built: ${pages.length}
- Open markers: ${total}
- Draft meta descriptions: ${pages.filter((p) => p.metaDraft).length}

## Per page
${rows}
`;
fs.writeFileSync(OUT_CHECKLIST, checklist);

console.log(`Imported ${pages.length} pages, ${total} open markers.`);
const byType = pages.reduce((a, p) => ((a[p.type] = (a[p.type] || 0) + 1), a), {});
console.log(byType);
