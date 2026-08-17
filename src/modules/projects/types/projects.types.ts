import { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

export type ProjectContentBlock = 
  | { type: 1; title: string; description: string }
  | { 
      type: 2; 
      title: string; 
      description: string; 
      bullets?: { label: string; text: string }[] 
    };

export interface Project {
  id: string;
  title: string;
  image: string | StaticImageData | any;
  shortDesc: string;
  content: string | ProjectContentBlock[];
  gallery?: (string | StaticImageData | any)[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  badge?: string;
  projects: Project[];
}

export interface BookingStep {
  step: string;
  title: string;
  desc: string;
}
