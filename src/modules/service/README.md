# Service module

Holds everything for the services page: components, mock data, and the main `ServicePage`.

## Structure

```
src/modules/service/
├── views/
│   └── ServicePage.tsx          # main page composition
├── components/
│   ├── StatsSection.tsx
│   ├── TradesSection.tsx        # client component (tabs + features)
│   └── CTASection.tsx
├── constants/
│   └── mock-services.ts      # trades + per-trade content
├── types/
│   └── service.types.ts      # Trade, TradeContent
├── validation/
│   └── service.schema.ts     # Zod schemas (e.g. serviceEnquirySchema)
├── i18n/
│   ├── en.json               # English translations (namespace: service.*)
│   └── ar.json               # Arabic translations (namespace: service.*)
├── serviceApi.ts             # RTK Query endpoints (future)
├── services/                 # placeholder for service helpers (optional)
└── index.ts                  # barrel export
```

The app route page (`src/app/[locale]/services/page.tsx`) only renders `ServicePage` from this module.

## i18n Keys

All keys live under the `service` namespace, registered in `src/i18n/request.ts`:

```ts
const t = useTranslations("service");
t("heroTitle") // → "Explore by services"
```

Zod validation messages reference i18n keys (e.g. `"enquiryEmailInvalid"`), resolved via `t(errors.email.message)`.
