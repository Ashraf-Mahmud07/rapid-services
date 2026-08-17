import type { LucideIcon } from "lucide-react";

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface HomeServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface HomeFeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HomeProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface HomeStepCard {
  step: string;
  title: string;
  description: string;
}

export interface HomeFinishedProject {
  pill: string;
  title: string;
  body: string;
  image: string;
}

export interface HomeCertificationItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface HomeExpert {
  name: string;
  role: string;
  image: string;
}

export interface HomeSocialItem {
  label: string;
  href: string;
  path: string;
  accent: boolean;
}

export interface RecentWorkItem {
  title: string;
  category: string;
  image: string;
}

export interface IndustrySplitItem {
  title: string;
  body: string;
  icon: LucideIcon;
}

export interface HomePostItem {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}
