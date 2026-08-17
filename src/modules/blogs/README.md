# Blogs Module

Powers the public blog listing (`/blogs`) and blog detail (`/blogs/[id]`) pages.

## Public API (`index.ts`)

Import everything from the barrel — never import internal files directly from outside this module.

```ts
import { BlogsView, BlogDetailView, BlogsSection } from "@/modules/blogs";
import { useBlogs, useBlogDetail } from "@/modules/blogs";
import { featuredBlogs, listBlogs, getBlogById } from "@/modules/blogs";
import type { Blog } from "@/modules/blogs";
```

## Module Structure

```
modules/blogs/
├── components/
│   ├── BlogsView.tsx          — Main view component for blog listing page
│   ├── BlogDetailView.tsx     — Main view component for single blog page
│   ├── BlogsSection.tsx       — Featured & grid list section
│   ├── BlogDetailsHero.tsx    — Hero banner with back button & share CTA
│   └── BlogDetailsSection.tsx — Article content reader section
├── hooks/
│   ├── useBlogs.ts            — Manages blog list datasets and translation access
│   └── useBlogDetail.ts       — Manages blog detail lookup and share interaction
├── data/
│   └── blogs.data.ts          — Article data collections & getBlogById helper
├── types/
│   └── blogs.types.ts         — Blog article type contracts
├── i18n/
│   ├── en.json                — English translations (namespace: blogs.*)
│   └── ar.json                — Arabic translations (namespace: blogs.*)
├── README.md
└── index.ts                   — Public barrel export
```

## i18n Keys

All keys live under the `blogs` namespace. Usage:

```ts
const t = useTranslations("blogs");
t("heroTitle") // → "Our articles and news"
t("featured")  // → "FEATURED"
```
