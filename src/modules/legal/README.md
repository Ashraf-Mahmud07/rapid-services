# Legal Module

Powers legal documentation pages: Terms & Conditions (`/terms-conditions`), Privacy Policy (`/privacy-policy`), and Cookie Policy (`/cookie-policy`).

## Public API (`index.ts`)

```ts
import { TermsConditionsView, PrivacyPolicyView, CookiePolicyView } from "@/modules/legal";
import { useLegal } from "@/modules/legal";
import { TERMS_CONDITIONS, PRIVACY_POLICY, COOKIE_POLICY } from "@/modules/legal";
import type { LegalDocument } from "@/modules/legal";
```

## Module Structure

```
modules/legal/
├── views/
│   ├── TermsConditionsView.tsx — Terms & Conditions page view
│   ├── PrivacyPolicyView.tsx   — Privacy Policy page view
│   └── CookiePolicyView.tsx    — Cookie Policy page view
├── components/
│   ├── LegalDocumentView.tsx   — Interactive document renderer with TOC scrollspy
│   └── PageBanner.tsx          — Header banner with breadcrumb & metadata
├── hooks/
│   └── useLegal.ts             — Legal document accessor & translation hook
├── data/
│   ├── terms-conditions.ts     — Terms & Conditions document structure
│   ├── privacy-policy.ts       — Privacy Policy document structure
│   └── cookie-policy.ts        — Cookie Policy document structure
├── types/
│   └── legal.types.ts          — Document & Section schema contracts
├── i18n/
│   ├── en.json                 — English translations (namespace: legal.*)
│   └── ar.json                 — Arabic translations (namespace: legal.*)
├── README.md
└── index.ts                    — Public barrel export
```
