import type { LucideIcon } from "lucide-react";

export interface Industry {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface IndustryContent {
  title: string;
  highlightTitle: string;
  highlightDesc: string;
  features: string[];
  benefits: string[];
}

export interface BookingStep {
  step: string;
  title: string;
  desc: string;
}
