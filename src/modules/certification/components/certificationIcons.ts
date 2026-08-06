import type { CertificationIconName } from "../types/certification.types";

/**
 * Figma-exported SVGs in /public/icons. The certificate icons ship in brand teal
 * and are rendered as-is; the approval cards sit on a teal tile and re-colour the
 * same files to white with a CSS mask.
 */
export const CERTIFICATION_ICONS: Record<CertificationIconName, string> = {
  shield: "/icons/iso.svg",
  droplet: "/icons/iso-2015.svg",
  "shield-check": "/icons/iso-20218.svg",
  building: "/icons/ohsas.svg",
  lab: "/icons/dcl-approved.svg",
  leaf: "/icons/dm-green-building.svg",
};
