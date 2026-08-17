import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface Trade {
  id: string;
  label: string;
  icon: LucideIcon;
}

export type ContentBlock = 
  | { type: 1; title: string; description: string }
  | { type: 2; title: string; description: string; bullets: { label: string; text: string }[] };

export interface SubService {
  id: string;
  title: string;
  shortDesc: string;
  image: any;
  gallery?: any[];
  content: string | ContentBlock[];
}

export interface TradeContent {
  title: string;
  badge?: string;
  subServices: SubService[];
}
