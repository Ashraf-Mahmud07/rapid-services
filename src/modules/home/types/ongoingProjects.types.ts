import { StaticImageData } from "next/image";

export interface OngoingProjectItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  href?: string;
}

export interface OngoingProjectsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
  items: OngoingProjectItem[];
}
