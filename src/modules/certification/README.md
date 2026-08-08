# Certification Module

Powers the public certification route (`/certification`): credential cards, the Dubai Municipality
highlight band, and the approval cards.

## Public API (`index.ts`)

```ts
import { CertificationCredentials, MunicipalityHighlight, ApprovalGrid } from "@/modules/certification";
import { CERTIFICATES, APPROVALS, MUNICIPALITY_HIGHLIGHT } from "@/modules/certification";
import type { Certificate, Approval } from "@/modules/certification";
```

## Module Structure

```
modules/certification/
├── components/
│   ├── CertificationCredentials.tsx — section heading + 4-up certificate grid
│   ├── CertificateCard.tsx          — ISO card with icon, ACTIVE badge, issuer
│   ├── MunicipalityHighlight.tsx    — dark DM Approved band with logo and callout
│   ├── ApprovalGrid.tsx             — 2x2 approval grid
│   ├── ApprovalCard.tsx             — approval card with icon, copy, highlight
│   └── certificationIcons.ts        — icon-name -> lucide component map
├── data/
│   └── certification.data.ts        — TEMPORARY sample data
├── types/
│   └── certification.types.ts       — Certificate, Approval, MunicipalityHighlightContent
└── index.ts                         — public barrel export
```

## Reused Components

The route composes shared pieces rather than redefining them — `Navbar`, `PageHero`, `FaqSection`,
and `Footer`, all from `@/shared/components/layout`. Updates to any of those apply to this page
automatically.

## Key Gotchas

- Data files stay serialisable: cards carry an `icon` **name**, and `certificationIcons.ts` maps it
  to a lucide component at render time. Add a new icon there and to `CertificationIconName`.
- `MUNICIPALITY_HIGHLIGHT.logo` points at `/images/dubai-municipality.png`, cropped from the
  supplied `municipality-logo.png` screenshot. Replace it with a transparent, higher-resolution
  source when one is available — no code change needed, just the file.
