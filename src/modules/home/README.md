# Home Module

Powers the main landing page (`/`) of the application.

## Public API (`index.ts`)

Import everything from the barrel — never import internal files directly from outside this module.

```ts
import { HomeView } from "@/modules/home";
import { useHomeData } from "@/modules/home";
import { sliderItems, aboutCards, safetyCards } from "@/modules/home";
```

## Module Structure

```
modules/home/
├── views/
│   └── HomeView.tsx            — Main view assembling all 19 landing sections
├── sections/                   — Hero, About, Services, Projects, Reviews, Team sections
├── components/                 — Cards and sliders used across sections
├── hooks/
│   └── useHomeData.ts          — Custom hook for localized datasets & section copy
├── data/
│   ├── about.data.ts           — Slider and card datasets
│   └── engineeringSafety.data.ts — Engineering & safety features dataset
├── types/                      — Data structure type contracts
├── i18n/
│   ├── en.json                 — English translations (namespace: home.*)
│   └── ar.json                 — Arabic translations (namespace: home.*)
├── README.md
└── index.ts                    — Public barrel export
```
