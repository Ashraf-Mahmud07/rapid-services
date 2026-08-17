"use client";

import { useTranslations } from "next-intl";
import { ABOUT_STATS_CONFIG, ABOUT_STEPS_CONFIG } from "../data/about.data";

export function useAboutData() {
  const t = useTranslations("about");

  const stats = ABOUT_STATS_CONFIG.map((stat) => ({
    ...stat,
    label: t(`stats.${stat.key}`),
  }));

  const steps = ABOUT_STEPS_CONFIG.map((step) => ({
    ...step,
    title: t(`steps.${step.key}Title`),
    body: t(`steps.${step.key}Body`),
  }));

  return {
    t,
    stats,
    steps,
  };
}
