# Contact Module

Powers the public contact route (`/contact-us`): contact detail cards, the enquiry form, and the FAQ
accordion.

## Public API (`index.ts`)

```ts
import { ContactHero, ContactDetailCards, ContactForm, FaqSection } from "@/modules/contact";
import { CONTACT_DETAILS, CONTACT_TOPICS, FAQ_LEFT, FAQ_RIGHT } from "@/modules/contact";
import { contactSchema, type ContactFormData } from "@/modules/contact";
```

## Module Structure

```
modules/contact/
├── components/
│   ├── ContactHero.tsx         — hero band
│   ├── ContactDetailCards.tsx  — address / phone / hours cards
│   ├── ContactForm.tsx         — enquiry form (client, RHF + Zod + shared Select)
│   ├── ContactMap.tsx          — Google Maps embed pinned to the workshop address
│   └── FaqSection.tsx          — two-column FAQ accordion (client, one item open at a time)
├── data/
│   └── contact.data.ts         — TEMPORARY sample data from the design reference
├── types/
│   └── contact.types.ts        — FaqItem, ContactDetail
├── validation/
│   └── contact.schema.ts       — contactSchema
└── index.ts                    — public barrel export
```

## Key Gotchas

- `ContactForm` validates with Zod but sends nothing: there is no contact endpoint yet. Add one via
  RTK Query (`docs/development-guide.md`) and call it from `onSubmit`.
- The FAQ accordion keeps a single open item across both columns, matching the design reference —
  opening a right-column question closes the left-column one.
