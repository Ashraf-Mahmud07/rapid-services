import completedProjects from "../assets/completed-projects.svg";
import persons from "../assets/persons.svg";
import star from "../assets/star.svg";
import timer from "../assets/timier.svg";

import step1Icon from "../assets/Icon.svg";
import step2Icon from "../assets/Icon-1.svg";
import step3Icon from "../assets/Icon-2.svg";
import step4Icon from "../assets/step-4.svg";

import type { StatItem, StepItem } from "../types/about.types";

export const ABOUT_STATS_CONFIG: StatItem[] = [
  { key: "projectsCompleted", value: "20+", icon: completedProjects },
  { key: "yearsExperience", value: "17+", icon: timer },
  { key: "investmentValue", value: "10M+", icon: star },
  { key: "skilledProfessionals", value: "120+", icon: persons },
];

export const ABOUT_STEPS_CONFIG: StepItem[] = [
  { key: "step1", icon: step1Icon },
  { key: "step2", icon: step2Icon },
  { key: "step3", icon: step3Icon },
  { key: "step4", icon: step4Icon },
];
