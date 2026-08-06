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
  logo: string;
  logoAlt: string;
}
