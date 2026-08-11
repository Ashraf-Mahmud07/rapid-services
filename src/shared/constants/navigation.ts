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
import type { LucideIcon } from "lucide-react";

import { ROUTES } from "./routes";

export type MegaMenuItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
};

/**
 * The five header dropdowns. Each reference panel uses one of four layouts and
 * one of two icon treatments, so both are named here rather than duplicated
 * across five near-identical components.
 *
 *   list   — narrow single column, no strips        (About, Contact)
 *   split  — promo column beside a two-column grid  (Industry)
 *   cards  — bordered card grid between strips      (Service)
 *   grid   — two-column rows between strips         (Project)
 *
 *   solid  — filled teal shape, white glyph         (About, Contact, Project)
 *   tint   — dark teal-tinted shape, teal glyph     (Industry, Service)
 */
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
        href: ROUTES.SERVICE,
        icon: Droplet,
      },
      {
        title: "GRP & Pool Lining",
        subtitle: "Fibreglass linings for pools & tanks",
        href: ROUTES.SERVICE,
        icon: Waves,
      },
      {
        title: "Polyurea Application",
        subtitle: "Fast-cure heavy-duty coatings",
        href: ROUTES.SERVICE,
        icon: SprayCan,
      },
      {
        title: "Flooring & Roofing",
        subtitle: "Epoxy floors, screeds & roofing",
        href: ROUTES.SERVICE,
        icon: Home,
      },
      {
        title: "Structural Restoration",
        subtitle: "Concrete repair & strengthening",
        href: ROUTES.SERVICE,
        icon: Hammer,
      },
      {
        title: "Refurbishment",
        subtitle: "Renovation and finishing works",
        href: ROUTES.SERVICE,
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
        href: ROUTES.PROJECT,
        icon: TrainFront,
      },
      {
        title: "City Hospital Tower",
        subtitle: "Healthcare facility",
        href: ROUTES.PROJECT,
        icon: Hospital,
      },
      {
        title: "Palm Jumeirah Villa",
        subtitle: "Private residence",
        href: ROUTES.PROJECT,
        icon: Home,
      },
      {
        title: "Industrial Hangar",
        subtitle: "Industrial facility",
        href: ROUTES.PROJECT,
        icon: Warehouse,
      },
      {
        title: "Office Complex",
        subtitle: "Commercial building",
        href: ROUTES.PROJECT,
        icon: Building2,
      },
      {
        title: "Residential Complex",
        subtitle: "Residential development",
        href: ROUTES.PROJECT,
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
        href: ROUTES.INDUSTRY,
        icon: Home,
      },
      {
        title: "Commercial Projects",
        subtitle: "Offices, retail & hospitality fit-outs",
        href: ROUTES.INDUSTRY,
        icon: Building2,
      },
      {
        title: "Industrial Facilities",
        subtitle: "Warehouses, plants & operational sites",
        href: ROUTES.INDUSTRY,
        icon: Factory,
      },
      {
        title: "Aviation & Transport",
        subtitle: "Terminals & transit infrastructure",
        href: ROUTES.INDUSTRY,
        icon: Plane,
      },
      {
        title: "Civil Infrastructure",
        subtitle: "Public works & structural foundations",
        href: ROUTES.INDUSTRY,
        icon: Landmark,
      },
      {
        title: "Government Projects",
        subtitle: "Municipal & federal contracts",
        href: ROUTES.INDUSTRY,
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
