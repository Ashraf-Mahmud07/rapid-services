import type { LucideIcon } from "lucide-react";

export interface Trade {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface TradeContent {
  title: string;
  badge?: string;
  highlightTitle: string;
  highlightDesc: string;
  features: string[];
  benefits: string[];
}
