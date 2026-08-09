import type { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ProjectContent {
  title: string;
  badge?: string;
  highlightTitle: string;
  highlightDesc: string;
  featuresTitle: string;
  features: string[];
  benefitsTitle: string;
  benefits: string[];
}

export interface BookingStep {
  step: string;
  title: string;
  desc: string;
}
