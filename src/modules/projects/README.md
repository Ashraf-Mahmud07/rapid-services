# Projects module

Holds everything for the projects page: components, mock data, and the main `ProjectsPage`.

## Structure

```
src/modules/projects/
├── views/
│   └── ProjectsPage.tsx      # main page composition
├── components/
│   ├── StatsSection.tsx
│   ├── ProjectsSection.tsx   # tabs + project grid
│   └── CTASection.tsx
├── constants/
│   └── mock-projects.ts       # projects, per-tab content + booking steps
├── types/
│   └── projects.types.ts      # Project, ProjectContent, BookingStep
├── validation/
│   └── projects.schema.ts     # Zod schemas (e.g. projectEnquirySchema)
├── i18n/
│   ├── en.json                # English translations (namespace: projects.*)
│   └── ar.json                # Arabic translations (namespace: projects.*)
├── projectsApi.ts             # RTK Query endpoints (future)
├── services/                  # placeholder for service helpers (optional)
└── index.ts                   # barrel export
```

The app route page (`src/app/[locale]/projects/page.tsx`) only renders `ProjectsPage` from this module.

## i18n Keys

All keys live under the `projects` namespace, registered in `src/i18n/request.ts`:

```ts
const t = useTranslations("projects");
t("heroTitle") // → "Explore by projects"
```

Zod validation messages reference i18n keys (e.g. `"enquiryEmailInvalid"`), resolved via `t(errors.email.message)`.
