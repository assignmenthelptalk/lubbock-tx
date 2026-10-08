# lubbockpurewatersoftener

Rank-and-rent lead-generation site for **Lubbock Elite Water Softener**
(lubbockpurewatersoftener.com, target keyword "water softener lubbock tx").
Astro 7 static site built from `water-softener-boilerplate`.

**Status: local build and preview only. Not pushed, not deployed.**
No GitHub repo or Vercel project exists for this site yet.

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
| Strategy, briefs, written copy (source of truth) | `C:/Users/lenevo/Local-SEO-Toolkit/data/lubbockpurewatersoftener/` |
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
- Unresolved facts render as yellow `[NEEDS DATA]` / `[VERIFY]` highlights on
  every page. Do not launch while any remain.
- Images: pages reference WebP placeholders in their frontmatter (`images`),
  but no image tags are rendered yet.

## Before launch (see LAUNCH-CHECKLIST.md)

Real phone and email (the quote form is disabled until `businessEmail` is
set), exact Lubbock hardness figure, TCEQ licence number, warranty and
guarantee terms, price ranges, reviews, final meta descriptions, photos, and
the remaining town pages.
