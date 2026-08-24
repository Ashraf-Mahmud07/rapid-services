import { Building2, Droplets, FlaskConical, Leaf, Shield, ShieldCheck } from "lucide-react";
import type { ElementType } from "react";
import type { CertificationIconName } from "../types/certification.types";

/**
 * Marks drawn with `currentColor`, so the card controls the colour:
 * `text-primary` on the tinted certificate tile, `text-white` on the solid approval tile.
 */
export const CERTIFICATION_ICONS: Record<CertificationIconName, ElementType> = {
  shield: Shield,
  droplet: Droplets,
  "shield-check": ShieldCheck,
  building: Building2,
  lab: FlaskConical,
  leaf: Leaf,
};
