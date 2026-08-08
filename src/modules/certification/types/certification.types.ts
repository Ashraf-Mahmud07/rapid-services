import type { StaticImageData } from "next/image";

export type CertificationIconName =
  "shield" | "droplet" | "shield-check" | "building" | "lab" | "leaf";

export interface Certificate {
  code: string;
  name: string;
  issuer: string;
  status: string;
  icon: CertificationIconName;
}

export interface Approval {
  title: string;
  description: string;
  highlight: string;
  icon: CertificationIconName;
}

export interface MunicipalityHighlightContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  highlight: string;
  badge: string;
  /** Statically imported so next/image derives the intrinsic size. */
  logo: StaticImageData;
  logoAlt: string;
}
