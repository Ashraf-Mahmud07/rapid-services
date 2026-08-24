import { StaticImageData } from "next/image";

export interface RecentProjectItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  href?: string;
}

export interface RecentProjectsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
  items: RecentProjectItem[];
}
