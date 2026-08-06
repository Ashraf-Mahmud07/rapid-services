# Careers Module

Powers the public career list (`/career`) and career detail (`/career/[slug]`) routes, including the
job application modal.

## Public API (`index.ts`)

```ts
import { CareersHero, JobBoard, NewsletterSection } from "@/modules/careers";
import { JobDetailHero, JobDetailContent, JobSidebar } from "@/modules/careers";
import { JOBS, JOB_FILTERS, getJobBySlug } from "@/modules/careers";
import type { Job, JobDepartment, JobFilter } from "@/modules/careers";
```

## Module Structure

```
modules/careers/
├── components/
│   ├── CareersHero.tsx        — career list hero band
│   ├── JobBoard.tsx           — department filters + job list (client, holds filter state)
│   ├── JobCard.tsx            — single job row, links to /career/[slug]
│   ├── NewsletterSection.tsx  — newsletter capture band (client, RHF + Zod)
│   ├── JobDetailHero.tsx      — detail hero with back link, share, and title
│   ├── ShareButton.tsx        — Web Share API with clipboard fallback (client)
│   ├── JobDetailContent.tsx   — about / responsibilities / requirements
│   ├── JobCheckList.tsx       — teal check-bullet list
│   ├── JobSidebar.tsx         — salary + meta card, opens the apply modal (client)
│   ├── ApplyModal.tsx         — application form + confirmation state (client)
│   └── SalaryRange.tsx        — AED symbol salary range
├── data/
│   └── jobs.data.ts           — TEMPORARY sample data (see below)
├── types/
│   └── careers.types.ts       — Job, JobDepartment, JobFilter, JobMetaRow
├── validation/
│   └── careers.schema.ts      — jobApplicationSchema, newsletterSchema
└── index.ts                   — public barrel export
```

## Data

There is no jobs API, CMS, or content layer yet, so `data/jobs.data.ts` holds typed sample data and
is marked as temporary. When the backend contract lands, add a `careersApi.ts` with RTK Query
endpoints (see `docs/development-guide.md`) and swap the data source — components depend only on the
`Job` type.

## Key Gotchas

- `ApplyModal` and `NewsletterSection` submit locally: they validate with Zod and render the success
  state, but no request is sent because no endpoint exists yet.
- The resume field stores the selected file name for validation; wire the actual `File` to the
  upload endpoint when one exists.
- `JobSidebar` owns the modal open state so the detail page can stay a server component.
