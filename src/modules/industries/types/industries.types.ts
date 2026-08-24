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

export interface IndustryCategory {
  id: string;
  title: string;
  industries: IndustryDetailData[];
}

export type IndustryContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      title?: string;
      text?: string;
      items: { title?: string; text: string }[];
      listType?: "bullet" | "check";
    };

export interface IndustryDetailData {
  id: string;
  title: string;
  shortDesc: string;
  image?: any;
  gallery?: any[];
  content?: IndustryContentBlock[];
}
