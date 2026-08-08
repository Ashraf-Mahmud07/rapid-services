import type { SVGProps } from "react";

import {
  BuildingIcon,
  DropletIcon,
  LabIcon,
  LeafIcon,
  ShieldCheckIcon,
  ShieldIcon,
} from "../assets/icons";
import type { CertificationIconName } from "../types/certification.types";

/**
 * Figma-exported marks drawn with `currentColor`, so the card controls the colour:
 * `text-primary` on the tinted certificate tile, `text-white` on the solid approval tile.
 */
export const CERTIFICATION_ICONS: Record<
  CertificationIconName,
  (props: SVGProps<SVGSVGElement>) => React.ReactElement
> = {
  shield: ShieldIcon,
  droplet: DropletIcon,
  "shield-check": ShieldCheckIcon,
  building: BuildingIcon,
  lab: LabIcon,
  leaf: LeafIcon,
};
