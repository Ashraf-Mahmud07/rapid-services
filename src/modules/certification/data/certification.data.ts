import cert1 from "../assets/images/1.png";
import cert2 from "../assets/images/2.png";
import cert3 from "../assets/images/3.png";
import cert4 from "../assets/images/4.png";
import { StaticImageData } from "next/image";

export interface CertificationCard {
  id: string;
  title: string;
  description: string;
  highlight: string;
  badge: string;
  image: StaticImageData;
}

export const CERTIFICATIONS: CertificationCard[] = [
  {
    id: "dm",
    title: "Dubai Municipality (DM) Approved",
    description:
      "Our products are selected from manufacturers whose systems comply with Dubai Municipality standards, ensuring quality, durability, and safety for construction, waterproofing, roofing, flooring, and swimming pool applications.",
    highlight: "Guarantees solutions that meet the strict regulatory requirements of UAE projects.",
    badge: "REGULATORY COMPLIANCE",
    image: cert1,
  },
  {
    id: "dcl",
    title: "DCL Approved Products",
    description:
      "We utilize products that meet recognized Dubai Central Laboratory (DCL) approval requirements, demonstrating compliance with established technical and quality standards.",
    highlight: "Reliable performance for residential & industrial projects",
    badge: "REGULATORY COMPLIANCE",
    image: cert2,
  },
  {
    id: "wras",
    title: "WRAS Certified Products",
    description:
      "Where applicable, we use products certified under the Water Regulations Approval Scheme (WRAS), ensuring materials that come into contact with potable water meet stringent safety requirements.",
    highlight: "Safe for swimming pools and water storage systems",
    badge: "REGULATORY COMPLIANCE",
    image: cert3,
  },
  {
    id: "dm-green",
    title: "DM Green Building Compliant",
    description:
      "Our solutions support Dubai Green Building regulations by incorporating environmentally responsible materials and systems. These products contribute to sustainable construction.",
    highlight: "Eco-friendly materials with exceptional durability",
    badge: "REGULATORY COMPLIANCE",
    image: cert4,
  },
];
