# lubbockelitewatersoftener

Rank-and-rent lead-generation site for **Lubbock Elite Water Softener**
(lubbockelitewatersoftener.com, target keyword "water softener lubbock tx").
Astro 7 static site built from `water-softener-boilerplate`.

**Status: pushed to GitHub (`assignmenthelptalk/lubbock-tx`, branch `main`). Not deployed.**
No Vercel project exists for this site yet. Do not deploy while `LAUNCH-CHECKLIST.md` has open items.

## Commands

```bash
npm install            # once
npm run import-content # regenerate pages from the Local-SEO-Toolkit copy
npm run dev            # http://localhost:4321 (Astro picks the next free port)
npm run build          # astro check + astro build (34 pages)
npm run verify         # structural checks on dist/ (run after build)
```

## Where things live

| What | Where |
|---|---|
| Strategy, briefs, written copy (source of truth) | `C:/Users/lenevo/Local-SEO-Toolkit/data/lubbockelitewatersoftener/` |
| Imported pages (generated, do not hand-edit) | `src/data/pages/*.md` |
| Navigation data (generated) | `src/data/nav.json` |
| Site identity, colors, phone, email | `src/site.config.ts` |
| Page templates | `src/pages/index.astro`, `src/pages/[...slug].astro`, `about`, `contact`, `thank-you`, `404` |
| Open facts to fill before launch | `LAUNCH-CHECKLIST.md` (generated) |

Edit copy in the Local-SEO-Toolkit project, then run `npm run import-content`.
Edit the generated `src/data/pages/*.md` files only for throwaway tests; the
next import overwrites them.

## Differences from the boilerplate

- Pages follow the Lubbock topical map (40-page plan, 30 written so far),
  not the boilerplate's fixed 22 pages. Its old pages and map/slider components
  were removed from this clone.
- Design tokens use the owner's colors: deep blue `#1A3C5E`, orange `#E87722`.
- `businessName` is "Lubbock Elite Water Softener" (owner's brand), not one of
  the boilerplate's two name formats.
- Copyright year is fixed at 2025 (owner instruction).
- Services nav is generated from the topical map; the guide hub and
  service-areas hub are footer-only.
- Homepage backlinks follow the Henderson pattern. Every inner page has exactly
  two links to `/` in its content (breadcrumbs, logo and nav also link home):
  the exact brand name in the opening paragraph (guides and town pages use the
  keyword anchor "water softener Lubbock TX" instead, for variety) and a closing
  brand-backlink paragraph anchored on brand + state. The importer applies this
  (`applyHomeBacklinks` in `scripts/import-content.mjs`) and `npm run verify`
  enforces it. The source copy in Local-SEO-Toolkit is left as written.
- Unresolved facts render as yellow `[NEEDS DATA]` / `[VERIFY]` highlights on
  every page. Do not launch while any remain.
- Images: `IMAGE-PROMPTS.md` has the prompt for each of the 31 photos (plus 3
  images to build in code). The photos are AI-generated stand-ins, converted to
  WebP in `src/assets/images/<id>.webp` (max 1200px wide, hero 1376px). The
  originals are in `brand_assets/unbranded-images/` (git-ignored). The hero uses
  `hero-water-softener-lubbock-tx.webp`; `public/og-default.jpg` (1200x630) is
  the social share image.
  - The importer reads the `<!-- image: file | alt: text -->` comments in the
    written copy. The first one on a page is its lead image (shown below the
    hero); later ones become inline images. A file missing from
    `src/assets/images` is skipped and listed in `LAUNCH-CHECKLIST.md`.
  - Still missing: the two code-built images (installation process diagram and
    size chart). The service-areas map is built (see below).
  - To swap in a real job photo, save a WebP under the same file name.
  - Three photos show a sliver of a face at the frame edge (water filtration,
    reverse osmosis, Tech Terrace); crop or regenerate before launch.

## Before launch (see LAUNCH-CHECKLIST.md)

Real phone and email (the quote form is disabled until `businessEmail` is
set), exact Lubbock hardness figure, TCEQ licence number, warranty and
guarantee terms, price ranges, reviews, final meta descriptions, real photos in
place of the AI stand-ins, the two code-built images, and the remaining town
pages.

## Service-areas map

The service-areas page has an interactive map (`src/components/ServiceAreaMap.astro`, Leaflet on OpenStreetMap). Pins come from `map-points.json` in the strategy folder (`Local-SEO-Toolkit/data/lubbockelitewatersoftener/`); `npm run import-content` copies it to `src/data/map-points.json` and keeps only pins whose page is built. Add a point when a town page is written. Tech Terrace and Overton pins are approximate (OpenStreetMap returned a place inside each neighbourhood, not its centre).
