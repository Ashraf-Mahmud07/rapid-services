# Blogs module

Holds everything for the "Our articles and news" page and dynamic Blog Details pages: views, UI components, mock data, and localization.

## Structure

```
src/modules/blogs/
├── views/
│   ├── BlogsPage.tsx            # Composition for the main /blogs route
│   └── BlogDetailsPage.tsx      # Composition for the dynamic /blogs/[id] route
├── components/
│   ├── BlogsSection.tsx         # Main UI for featured & list blogs
│   ├── BlogDetailsHero.tsx      # Custom hero with back button & share
│   └── BlogDetailsSection.tsx   # Content renderer for blog articles
├── constants/
│   └── mock-blogs.ts            # Mock data for featured, list, and details
├── types/
│   └── blogs.types.ts           # Blog interface definitions
├── i18n/
│   ├── en.json                  # English translations (namespace: blogs.*)
│   └── ar.json                  # Arabic translations (namespace: blogs.*)
└── index.ts                     # Barrel export
```

The Next.js App Router pages (`src/app/[locale]/blogs/page.tsx` and `src/app/[locale]/blogs/[id]/page.tsx`) remain strictly "thin" and only import the layout wrappers from the `views/` directory.

## i18n Keys

All keys live under the `blogs` namespace, registered in `src/i18n/request.ts`:

```ts
const t = useTranslations("blogs");
t("blogList") // → "Blog List"
t("featured") // → "FEATURED"
```
