import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Building,
  Building2,
  CircleHelp,
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
      iconStyle: "solid";
      iconShape: "circle";
      items: MegaMenuItem[];
    }
  | {
      layout: "split";
      iconStyle: "tint";
      iconShape: "square";
      eyebrow: string;
      title: string;
      blurb: string;
      cta: { label: string; href: string };
      items: MegaMenuItem[];
    }
  | {
      layout: "cards" | "grid";
      iconStyle: "tint" | "solid";
      iconShape: "square";
      eyebrow: string;
      note: string;
      footnote: string;
      cta: { label: string; href: string };
      items: MegaMenuItem[];
    };

export const MEGA_MENUS: Record<string, MegaMenu> = {
  [ROUTES.SERVICE]: {
    layout: "cards",
    iconStyle: "tint",
    iconShape: "square",
    eyebrow: "Our services",
    note: "Six specialist divisions — one guarantee",
    footnote: "Not sure which service you need? We'll survey the site first.",
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
    layout: "grid",
    iconStyle: "solid",
    iconShape: "square",
    eyebrow: "Selected projects",
    note: "Delivered across the UAE",
    footnote: "Over 400 completed jobs since 2009.",
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
    eyebrow: "Industries",
    title: "Industries we serve",
    blurb: "Pick the sector your project falls under to see the work we do there.",
    cta: { label: "All Industries", href: ROUTES.INDUSTRY },
    items: [
      {
        title: "Residential Spaces",
        subtitle: "Homes, villas & private residences",
        href: ROUTES.INDUSTRY + "?tab=homeowners",
        icon: Home,
      },
      {
        title: "Commercial Projects",
        subtitle: "Offices, retail & hospitality fit-outs",
        href: ROUTES.INDUSTRY + "?tab=offices",
        icon: Building2,
      },
      {
        title: "Industrial Facilities",
        subtitle: "Warehouses, plants & operational sites",
        href: ROUTES.INDUSTRY + "?tab=construction",
        icon: Factory,
      },
      {
        title: "Aviation & Transport",
        subtitle: "Terminals & transit infrastructure",
        href: ROUTES.INDUSTRY + "?tab=landlords",
        icon: Plane,
      },
      {
        title: "Civil Infrastructure",
        subtitle: "Public works & structural foundations",
        href: ROUTES.INDUSTRY + "?tab=retail",
        icon: Landmark,
      },
      {
        title: "Government Projects",
        subtitle: "Municipal & federal contracts",
        href: ROUTES.INDUSTRY + "?tab=property_managers",
        icon: Building,
      },
    ],
  },

  [ROUTES.ABOUT]: {
    layout: "list",
    iconStyle: "solid",
    iconShape: "circle",
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
      {
        title: "FAQs",
        subtitle: "Answers To Common Questions",
        href: ROUTES.FAQ,
        icon: CircleHelp,
      },
    ],
  },

  [ROUTES.CONTACT]: {
    layout: "list",
    iconStyle: "solid",
    iconShape: "circle",
    items: [
      {
        title: "Blogs",
        subtitle: "Insights, Updates, And Industry News",
        href: ROUTES.BLOG,
        icon: Newspaper,
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
