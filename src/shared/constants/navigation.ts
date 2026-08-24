import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Building,
  Building2,
  Droplet,
  Factory,
  Hammer,
  Home,
  Hospital,
  Info,
  Landmark,
  MessageCircleQuestion,
  Newspaper,
  Paintbrush,
  Plane,
  SprayCan,
  TrainFront,
  Video,
  Warehouse,
  Waves,
} from "lucide-react";

import { ROUTES } from "./routes";

export type MegaMenuItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
};

export type MegaMenu =
  | {
      layout: "list";
      iconStyle: "solid" | "tint";
      iconShape: "circle" | "square";
      items: MegaMenuItem[];
    }
  | {
      layout: "split" | "cards" | "grid";
      iconStyle: "tint" | "solid";
      iconShape: "square" | "circle";
      headerEyebrow?: string;
      headerNote?: string;
      eyebrow: string;
      title: string;
      blurb: string;
      note?: string;
      footnote?: string;
      cta: { label: string; href: string };
      items: MegaMenuItem[];
    };

export const MEGA_MENUS: Record<string, MegaMenu> = {
  [ROUTES.SERVICE]: {
    layout: "split",
    iconStyle: "tint",
    iconShape: "square",
    headerEyebrow: "OUR SERVICES",
    headerNote: "Six Specialist Divisions — One Guarantee",
    eyebrow: "SERVICES",
    title: "Services we provide",
    blurb:
      "Explore our specialized contracting and waterproofing solutions designed for long-term durability and performance.",
    cta: { label: "All Services", href: ROUTES.SERVICE },
    items: [
      {
        title: "Waterproofing",
        subtitle: "Membrane systems & leak protection",
        href: ROUTES.SERVICE + "?tab=heating",
        icon: Droplet,
      },
      {
        title: "GRP & Pool Lining",
        subtitle: "Fibreglass linings for pools & tanks",
        href: ROUTES.SERVICE + "?tab=painting",
        icon: Waves,
      },
      {
        title: "Polyurea Application",
        subtitle: "Fast-cure heavy-duty coatings",
        href: ROUTES.SERVICE + "?tab=repairs",
        icon: SprayCan,
      },
      {
        title: "Flooring & Roofing",
        subtitle: "Epoxy floors, screeds & roofing",
        href: ROUTES.SERVICE + "?tab=cleaning",
        icon: Home,
      },
      {
        title: "Structural Restoration",
        subtitle: "Concrete repair & strengthening",
        href: ROUTES.SERVICE + "?tab=electrical",
        icon: Hammer,
      },
      {
        title: "Refurbishment",
        subtitle: "Renovation and finishing works",
        href: ROUTES.SERVICE + "?tab=plumbing",
        icon: Paintbrush,
      },
    ],
  },

  [ROUTES.PROJECT]: {
    layout: "split",
    iconStyle: "tint",
    iconShape: "square",
    headerEyebrow: "FEATURED PROJECTS",
    headerNote: "Delivered Across The UAE",
    eyebrow: "PROJECTS",
    title: "Projects we delivered",
    blurb:
      "Take a look at our landmark developments and specialized execution across industrial, commercial, and public sectors.",
    cta: { label: "All Projects", href: ROUTES.PROJECT },
    items: [
      {
        title: "Dubai Metro Station",
        subtitle: "Transit infrastructure",
        href: ROUTES.PROJECT + "?tab=bathroom_refits",
        icon: TrainFront,
      },
      {
        title: "City Hospital Tower",
        subtitle: "Healthcare facility",
        href: ROUTES.PROJECT + "?tab=panel_upgrades",
        icon: Hospital,
      },
      {
        title: "Palm Jumeirah Villa",
        subtitle: "Private residence",
        href: ROUTES.PROJECT + "?tab=full_repaints",
        icon: Home,
      },
      {
        title: "Industrial Hangar",
        subtitle: "Industrial facility",
        href: ROUTES.PROJECT + "?tab=move_out_cleans",
        icon: Warehouse,
      },
      {
        title: "Office Complex",
        subtitle: "Commercial building",
        href: ROUTES.PROJECT + "?tab=kitchen_installs",
        icon: Building2,
      },
      {
        title: "Residential Complex",
        subtitle: "Residential development",
        href: ROUTES.PROJECT + "?tab=damp_leak",
        icon: Building,
      },
    ],
  },

  [ROUTES.INDUSTRY]: {
    layout: "split",
    iconStyle: "tint",
    iconShape: "square",
    headerEyebrow: "INDUSTRY WE SERVE",
    headerNote: "Six Key Industries — One Proven Expertise",
    eyebrow: "INDUSTRIES",
    title: "Industries we serve",
    blurb:
      "Select the sector your project falls under to explore our experience, capabilities, and proven expertise, and discover the quality of work we deliver across a wide range.",
    cta: { label: "All Industries", href: ROUTES.INDUSTRY },
    items: [
      {
        title: "Residential Spaces",
        subtitle: "Homes, Villas & High-End Pri...",
        href: ROUTES.INDUSTRY + "?tab=homeowners",
        icon: Home,
      },
      {
        title: "Commercial Projects",
        subtitle: "Corporate Offices, Retail Spaces...",
        href: ROUTES.INDUSTRY + "?tab=offices",
        icon: Building2,
      },
      {
        title: "Industrial Facilities",
        subtitle: "Warehouses, Industrial Plants &...",
        href: ROUTES.INDUSTRY + "?tab=construction",
        icon: Factory,
      },
      {
        title: "Aviation & Transport",
        subtitle: "Airports, Terminals, Transit Hub...",
        href: ROUTES.INDUSTRY + "?tab=landlords",
        icon: Plane,
      },
      {
        title: "Civil Infrastructure",
        subtitle: "Public Works, Civil Engineering...",
        href: ROUTES.INDUSTRY + "?tab=retail",
        icon: Landmark,
      },
      {
        title: "Government Projects",
        subtitle: "Municipal, Government & Fe...",
        href: ROUTES.INDUSTRY + "?tab=property_managers",
        icon: Building,
      },
    ],
  },

  [ROUTES.ABOUT]: {
    layout: "list",
    iconStyle: "tint",
    iconShape: "square",
    items: [
      {
        title: "About Us",
        subtitle: "Our Company, Values, And Expertise",
        href: ROUTES.ABOUT,
        icon: Info,
      },
      {
        title: "Careers",
        subtitle: "Explore Careers And Opportunities",
        href: ROUTES.CAREER,
        icon: Briefcase,
      },
      {
        title: "Certifications",
        subtitle: "Our Certifications And Experience",
        href: ROUTES.CERTIFICATION,
        icon: Award,
      },
    ],
  },

  [ROUTES.CONTACT]: {
    layout: "list",
    iconStyle: "tint",
    iconShape: "square",
    items: [
      {
        title: "Blogs",
        subtitle: "Insights, Updates, And Industry News",
        href: ROUTES.BLOG,
        icon: Newspaper,
      },
      {
        title: "Video Library",
        subtitle: "Guides, Insights, And Project Videos",
        href: ROUTES.MEDIA,
        icon: Video,
      },
      {
        title: "Contact Us",
        subtitle: "Get In Touch With Our Team",
        href: ROUTES.CONTACT,
        icon: MessageCircleQuestion,
      },
    ],
  },
};
