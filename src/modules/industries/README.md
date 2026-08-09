# Industries module

Holds everything for the industries page: components, mock data, and the main `IndustriesPage`.

## Structure

```
src/modules/industries/
├── views/
│   └── IndustriesPage.tsx       # main page composition
├── components/
│   ├── StatsSection.tsx
│   ├── IndustriesSection.tsx    # client component (tabs + booking steps)
│   └── CTASection.tsx
├── constants/
│   └── mock-industries.ts       # industries, per-tab content + booking steps
├── types/
│   └── industries.types.ts      # Industry, IndustryContent, BookingStep
├── validation/
│   └── industries.schema.ts     # Zod schemas (e.g. industryEnquirySchema)
├── i18n/
│   ├── en.json                  # English translations (namespace: industries.*)
│   └── ar.json                  # Arabic translations (namespace: industries.*)
├── industriesApi.ts             # RTK Query endpoints (future)
├── services/                    # placeholder for service helpers (optional)
└── index.ts                     # barrel export
```

The app route page (`src/app/[locale]/industries/page.tsx`) only renders `IndustriesPage` from this module.

## i18n Keys

All keys live under the `industries` namespace, registered in `src/i18n/request.ts`:

```ts
const t = useTranslations("industries");
t("heroTitle") // → "Explore by industries"
```

Zod validation messages reference i18n keys (e.g. `"enquiryEmailInvalid"`), resolved via `t(errors.email.message)`.
