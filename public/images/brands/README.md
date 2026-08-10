# Client logos — placeholders

The six files here are **placeholders**, not real clients. They are generated
wordmarks using invented names that already existed in `Brands.tsx`, drawn in a
single flat grey (`#8A8A8A`) to match the muted treatment in the Figma
reference.

## Swapping in the real logos

Two places, both trivial:

1. **Drop the real file in this folder**, keeping the same filename — or use a
   new filename and update the path in step 2.
2. **Edit `src/modules/home/sections/Brands.tsx`** — the `brands` array at the
   top of the file. Each entry is `{ name, logo }`. Change `name` to the real
   company name (it is the alt text) and `logo` to the file path.

Nothing else changes. The layout sizes each logo by **height** and centres it,
so any sensible aspect ratio works without touching CSS.

## What works best

- **Format:** SVG or transparent PNG. PNG should be ~3x the display size.
- **Display height:** 38px, so export at ~114px tall or use SVG.
- **Colour:** single flat grey. The rail renders every logo at 70% opacity and
  lifts to 100% on hover, which only looks right if the marks are monochrome.
  Full-colour logos will fight each other.
- **Padding:** trim tight to the artwork; the layout adds its own spacing.

## Count

The Figma shows a nine-chip carousel cycling a smaller set. Six unique logos is
enough — they repeat. Add or remove array entries freely.
