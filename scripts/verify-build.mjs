#!/usr/bin/env node
/**
 * verify-build.mjs: checks the built site (dist/) against the owner's rules.
 *   npm run build && npm run verify
 * Fails (exit 1) on any structural error. Open [NEEDS DATA] markers are
 * reported but do not fail the check (they are tracked in LAUNCH-CHECKLIST.md).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const htmlFiles = walk(dist).filter((f) => f.endsWith(".html"));
const routeOf = (file) => {
  const rel = path.relative(dist, file).replace(/\\/g, "/");
  if (rel === "404.html") return "/404.html";
  return "/" + rel.replace(/index\.html$/, "");
};
const routes = new Set(htmlFiles.map(routeOf));
const pages = htmlFiles.map((file) => ({ file, route: routeOf(file), html: fs.readFileSync(file, "utf8") }));

const errors = [];
const notes = [];
const inbound = new Map();

const hrefs = (html) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => m[1]);
const section = (html, tag) => (html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)) || [, ""])[1];

for (const { route, html } of pages) {
  if (route === "/404.html") continue;

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) errors.push(`${route}: ${h1s} H1 tags (expected 1)`);

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (!title.trim()) errors.push(`${route}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${route}: missing meta description`);

  for (const href of hrefs(html)) {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const target = href.split("#")[0].split("?")[0];
    if (!target) continue;
    const normalized = target.endsWith("/") ? target : target + "/";
    if (!routes.has(normalized) && !routes.has(target)) errors.push(`${route}: broken internal link ${href}`);
    inbound.set(normalized, (inbound.get(normalized) || 0) + 1);
  }

  // every inner page links back to the homepage
  if (route !== "/" && route !== "/thank-you/") {
    if (!hrefs(html).some((h) => h === "/" || h === "/#estimate")) errors.push(`${route}: no link back to the homepage`);
  }

  const gaps = (html.match(/class="data-gap"/g) || []).length;
  if (gaps) notes.push(`${route}: ${gaps} open marker(s)`);
}

// homepage body must not link to service, guide or location pages
const home = pages.find((p) => p.route === "/");
if (home) {
  const body = section(home.html, "main");
  const down = hrefs(body).filter((h) => !/^(https?:|mailto:|tel:|#)/.test(h) && h !== "/");
  if (down.length) errors.push(`/: homepage body links down to ${[...new Set(down)].join(", ")}`);
}

// no orphans
for (const route of routes) {
  if (["/", "/404.html", "/thank-you/"].includes(route)) continue; // thank-you is reached by the form redirect
  if (!inbound.get(route)) errors.push(`${route}: orphan page (no inbound internal link)`);
}

const sitemap = fs.existsSync(path.join(dist, "sitemap-0.xml"));
console.log(`Pages checked: ${pages.length}`);
console.log(`Sitemap generated: ${sitemap ? "yes" : "NO"}`);
console.log(`Pages with open markers: ${notes.length}`);
if (errors.length) {
  console.log(`\nFAILED: ${errors.length} error(s)`);
  errors.forEach((e) => console.log(" - " + e));
  process.exit(1);
}
console.log("\nPASSED: one H1 per page, no broken links, no orphans, homepage body has no downward links.");
