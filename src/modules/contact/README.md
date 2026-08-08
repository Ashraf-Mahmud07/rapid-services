# Contact Module

Powers the public contact route (`/contact-us`): contact detail cards, the enquiry form, and the FAQ
accordion.

## Public API (`index.ts`)

```ts
import { ContactHero, ContactDetailCards, ContactForm, ContactMap } from "@/modules/contact";
import { CONTACT_DETAILS, CONTACT_TOPICS, CONTACT_MAP } from "@/modules/contact";
import { contactSchema, type ContactFormData } from "@/modules/contact";
```

The FAQ accordion is **not** part of this module — it appears on several pages, so it lives at
`@/shared/components/layout` with its data in `@/shared/constants/faq`.

## Module Structure

```
modules/contact/
├── components/
│   ├── ContactHero.tsx         — hero band
│   ├── ContactDetailCards.tsx  — address / phone / hours cards
│   ├── ContactForm.tsx         — enquiry form (client, RHF + Zod + shared Select)
│   └── ContactMap.tsx          — Google Maps embed pinned to the workshop address
├── data/
│   └── contact.data.ts         — TEMPORARY sample data from the design reference
├── types/
│   └── contact.types.ts        — ContactDetail
├── validation/
│   └── contact.schema.ts       — contactSchema
└── index.ts                    — public barrel export
```

## Key Gotchas

- `ContactForm` validates with Zod but sends nothing: there is no contact endpoint yet. Add one via
  RTK Query (`docs/development-guide.md`) and call it from `onSubmit`.
- The contact page renders the shared `FaqSection`; its `askHref` defaults to `#contact-form`, the
  id on the enquiry form in this module.
