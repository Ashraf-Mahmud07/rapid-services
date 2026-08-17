# About Module

Powers the public About Us page (`/about`), including company hero, CEO quote, statistics band, workflow process steps, and mission & vision sections.

## Public API (`index.ts`)

Import everything from the barrel — never import internal files directly from outside this module.

```ts
import { AboutHero, CeoQuote, StatsBand, HowItWorks, MissionVision } from "@/modules/about";
import { useAboutData } from "@/modules/about";
import { ABOUT_STATS_CONFIG, ABOUT_STEPS_CONFIG } from "@/modules/about";
import type { StatItem, StepItem } from "@/modules/about";
```

## Module Structure

```
modules/about/
├── components/
│   ├── AboutHero.tsx        — Hero header section
│   ├── CeoQuote.tsx         — Executive quote & founder bio card
│   ├── StatsBand.tsx        — Full-bleed company metric counter band
│   ├── HowItWorks.tsx       — 4-step workflow process section
│   └── MissionVision.tsx    — Mission & vision side-by-side overview
├── hooks/
│   └── useAboutData.ts      — Encapsulates localized stats & process steps data
├── data/
│   └── about.data.ts        — Static stats and step icon configurations
├── types/
│   └── about.types.ts       — StatItem & StepItem type contracts
├── i18n/
│   ├── en.json              — English translations (namespace: about.*)
│   └── ar.json              : Arabic translations (namespace: about.*)
├── README.md
└── index.ts                 — Public barrel export
```

## i18n Keys

All keys live under the `about` namespace. Usage:

```ts
const t = useTranslations("about");
t("heroTitlePrefix") // → "One crew. Six trades."
t("ceoEyebrow")       // → "From the CEO"
```
