/** CAREERS SAMPLE DATA **/

import type { CareerHighlight } from "../types/careers.types";

export const CAREER_INTRO = {
  eyebrow: "Career with us",
  title: "A trade job you can build a decade on.",
  description:
    "Most of the maintenance market in the Emirates runs on subcontracted labour and daily rates. We took the other route: every technician is on our payroll, works with our supervisors, and is judged on whether the repair holds — not on how many jobs were closed that day.",
} as const;

export const CAREER_HIGHLIGHTS: CareerHighlight[] = [
  {
    title: "Direct employment",
    description: "Contract, visa and insurance in your own name.",
  },
  {
    title: "Six trades to move between",
    description: "Cross-train once you are signed off on your own.",
  },
  {
    title: "Supervisor track",
    description: "Team lead at three years, supervisor at five.",
  },
  {
    title: "Fixed hours",
    description: "Sat – Thu, with paid overtime on call-outs.",
  },
];
