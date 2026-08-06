/** TEMPORARY SAMPLE DATA **/

import type {
  Approval,
  Certificate,
  MunicipalityHighlightContent,
} from "../types/certification.types";

export const CERTIFICATION_INTRO = {
  eyebrow: "OUR CREDENTIALS",
  title: "Recognized by international and local authorities",
  description:
    "Documentation for every certificate is available on request for tenders, audits and client due diligence.",
};

export const CERTIFICATES: Certificate[] = [
  {
    code: "ISO 9001:2015",
    name: "Quality management systems",
    issuer: "Issued by Bureau Veritas",
    status: "ACTIVE",
    icon: "shield",
  },
  {
    code: "ISO 14001:2015",
    name: "Environmental management",
    issuer: "Issued by Bureau Veritas",
    status: "ACTIVE",
    icon: "droplet",
  },
  {
    code: "ISO 45001:2018",
    name: "Occupational health & safety",
    issuer: "Issued by Bureau Veritas",
    status: "ACTIVE",
    icon: "shield-check",
  },
  {
    code: "OHSAS 18001",
    name: "Site safety management",
    issuer: "Issued by Bureau Veritas",
    status: "ACTIVE",
    icon: "building",
  },
];

export const MUNICIPALITY_HIGHLIGHT: MunicipalityHighlightContent = {
  eyebrow: "REGULATORY COMPLIANCE",
  title: "Dubai Municipality (DM)",
  titleAccent: "Approved",
  description:
    "Our products are selected from manufacturers whose systems comply with Dubai Municipality standards, ensuring quality, durability, and safety for construction, waterproofing, roofing, flooring, and swimming pool applications.",
  highlight: "Guarantees solutions that meet the strict regulatory requirements of UAE projects.",
  badge: "DM Approved",
  /** Cropped from public/images/municipality-logo.png; swap for a transparent source when available. */
  logo: "/images/dubai-municipality.png",
  logoAlt: "Dubai Municipality",
};

export const APPROVALS: Approval[] = [
  {
    title: "Dubai Municipality (DM) Approved",
    description:
      "Our products are selected from manufacturers whose systems comply with Dubai Municipality standards, ensuring quality, durability, and safety for construction, waterproofing, roofing, flooring, and swimming pool applications.",
    highlight: "GUARANTEES REGULATORY COMPLIANCE ACROSS THE UAE",
    icon: "shield",
  },
  {
    title: "DCL Approved Products",
    description:
      "We utilize products that meet recognized Dubai Central Laboratory (DCL) approval requirements, demonstrating compliance with established technical and quality standards.",
    highlight: "RELIABLE PERFORMANCE FOR RESIDENTIAL & INDUSTRIAL PROJECTS",
    icon: "lab",
  },
  {
    title: "DM Green Building Compliant",
    description:
      "Our solutions support Dubai Green Building regulations by incorporating environmentally responsible materials and systems. These products contribute to sustainable construction.",
    highlight: "ECO-FRIENDLY MATERIALS WITH EXCEPTIONAL DURABILITY",
    icon: "leaf",
  },
  {
    title: "WRAS Certified Products",
    description:
      "Where applicable, we use products certified under the Water Regulations Approval Scheme (WRAS), ensuring materials that come into contact with potable water meet stringent safety requirements.",
    highlight: "SAFE FOR SWIMMING POOLS AND WATER STORAGE SYSTEMS",
    icon: "droplet",
  },
];
