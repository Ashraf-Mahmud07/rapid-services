import type { StaticImageData } from "next/image";

export interface StatItem {
  key: "projectsCompleted" | "yearsExperience" | "investmentValue" | "skilledProfessionals";
  value: string;
  icon: string | StaticImageData;
}

export interface StepItem {
  key: "step1" | "step2" | "step3" | "step4";
  icon: string | StaticImageData;
}
