"use client";

import { useTranslations } from "next-intl";
import { aboutCards, sliderItems } from "../data/about.data";
import { engineeringSafetyItems, engineeringSafetyIntro } from "../data/engineeringSafety.data";

export function useHomeData() {
  const t = useTranslations("home");

  return {
    t,
    aboutCards,
    sliderItems,
    engineeringSafetyItems,
    engineeringSafetyIntro,
  };
}
