import {
  Building,
  Building2,
  CalendarCheck,
  Factory,
  FileCheck2,
  Home,
  Landmark,
  ShieldCheck,
  Wallet,
  Wrench,
} from "lucide-react";

import certificationIso9001 from "../assets/icons/certification-1.svg";
import certificationIso14001 from "../assets/icons/certification-2.svg";
import certificationIso45001 from "../assets/icons/certification-3.svg";
import certificationMunicipality from "../assets/icons/certification-4.svg";

import type {
  CounterItem,
  HomeCertificationItem,
  HomeExpert,
  HomeFeatureItem,
  HomeFinishedProject,
  HomePostItem,
  HomeProcessStep,
  HomeServiceItem,
  HomeSocialItem,
  HomeStepCard,
  IndustrySplitItem,
  RecentWorkItem,
  TeamMember,
} from "../types/home.types";

export const TRADES = [
  "Electrical",
  "Plumbing",
  "Painting",
  "Cleaning",
  "Repairs",
  "Heating & Cooling",
  "Electrical",
  "Plumbing",
  "Painting",
] as const;

export const COUNTERS: CounterItem[] = [
  {
    value: 20,
    suffix: "+",
    label: "Successfully completed projects",
    icon: "/icons/counter-projects.svg",
  },
  {
    value: 17,
    suffix: "+",
    label: "Years of industry experience",
    icon: "/icons/counter-experience.svg",
  },
  {
    value: 10,
    suffix: "M+",
    label: "Total project investment value",
    icon: "/icons/counter-investment.svg",
  },
  {
    value: 120,
    suffix: "+",
    label: "Skilled professionals & engineers",
    icon: "/icons/counter-professionals.svg",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Olivia Bennett",
    role: "CEO",
    image: "/images/team/olivia-bennett.png",
  },
  {
    name: "Michael Anderson",
    role: "Site Supervisor",
    image: "/images/team/michael-anderson.png",
  },
  {
    name: "Sophia Martinez",
    role: "Site Supervisor",
    image: "/images/team/sophia-martinez.png",
  },
  {
    name: "Daniel Brooks",
    role: "Project Manager",
    image: "/images/team/expert-1.jpg",
  },
];

export const HOME_SERVICES: HomeServiceItem[] = [
  {
    title: "Electrical Installation",
    description: "Complete electrical setups for new homes and businesses, ensuring safe.",
    image: "/images/services/electrical-installation.jpg",
  },
  {
    title: "Wiring & Rewiring",
    description: "Upgrade or repair outdated wiring with modern solutions that improve safety.",
    image: "/images/services/wiring-rewiring.jpg",
  },
  {
    title: "Lighting Solutions",
    description: "Design and install indoor, outdoor, and smart lighting systems to enhance.",
    image: "/images/services/lighting-solutions.jpg",
  },
  {
    title: "Panel Upgrades",
    description: "Replace or upgrade electrical panels to handle modern power demands.",
    image: "/images/services/panel-upgrades.jpg",
  },
  {
    title: "Maintenance & Repairs",
    description: "Routine maintenance and fast repairs to keep your electrical systems running.",
    image: "/images/services/maintenance-repairs.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency electrical support to quickly resolve urgent issues and restore.",
    image: "/images/services/emergency-services.jpg",
  },
];

export const HOME_FEATURES: HomeFeatureItem[] = [
  {
    title: "Fixed price up front",
    description:
      "You approve the number before a tool comes out of the van. No callout fee and nothing added afterwards.",
    icon: Wallet,
  },
  {
    title: "Licensed and insured crews",
    description:
      "Every technician is licensed for the work they carry out, background checked and insured to $2M.",
    icon: ShieldCheck,
  },
  {
    title: "Two-hour arrival windows",
    description:
      "You get a named technician and a two-hour window, not a full day of waiting at home.",
    icon: CalendarCheck,
  },
  {
    title: "Certified and documented",
    description:
      "Circuits tested, work signed off and certificates issued in writing before we leave site.",
    icon: FileCheck2,
  },
];

export const FEATURE_PROMISES = [
  "One team across electrical, plumbing, painting, cleaning and repairs",
  "90-day workmanship guarantee on every visit",
  "Pay on completion by card, transfer or cash",
] as const;

export const HOME_PROCESS_STEPS: HomeProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your vision, goals, and requirements to create a strong foundation for your project.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our experts craft detailed plans and innovative designs tailored to your space, budget, and expectations.",
  },
  {
    number: "03",
    title: "Construction & Execution",
    description:
      "With precision and expertise, we bring your vision to life using high-quality materials and skilled craftsmanship.",
  },
];

export const STEPS_LIST: HomeStepCard[] = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your vision, goals, and requirements to create a strong foundation for your project.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Our experts craft detailed plans and innovative designs tailored to your space, budget, and expectations.",
  },
  {
    step: "03",
    title: "Construction & Execution",
    description:
      "With precision and expertise, we bring your vision to life using high-quality materials and skilled craftsmanship.",
  },
];

export const FINISHED_PROJECTS_TALL: HomeFinishedProject = {
  pill: "Cleaning · 6 hours",
  title: "Move-out deep clean, two-bed apartment",
  body: "Oven, extractor, grout and windows — handed back for a full deposit return the same week.",
  image: "/images/projects/deep-clean-tall.jpg",
};

export const FINISHED_PROJECTS_STACKED: HomeFinishedProject[] = [
  {
    pill: "Electrical · 1 day",
    title: "Consumer unit upgrade and RCD test",
    body: "Old fuse board swapped for a modern unit, every circuit tested and certified.",
    image: "/images/projects/consumer-unit-upgrade.jpg",
  },
  {
    pill: "Plumbing · 2 hours",
    title: "Leaking cistern and full bathroom reseal",
    body: "Replaced the fill valve, reset the pan and resealed the shower tray after two years of wear.",
    image: "/images/projects/bathroom-reseal.jpg",
  },
];

export const CERTIFICATIONS: HomeCertificationItem[] = [
  { title: "ISO 9001:2015", subtitle: "Quality management systems", icon: certificationIso9001 },
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental management",
    icon: certificationIso14001,
  },
  {
    title: "ISO 45001:2018",
    subtitle: "Occupational health & safety",
    icon: certificationIso45001,
  },
  {
    title: "Dubai Municipality",
    subtitle: "Approved contractor registration",
    icon: certificationMunicipality,
  },
];

export const EXPERTS: HomeExpert[] = [
  { name: "Michael Carter", role: "Site Supervisor", image: "/images/team/expert-1.jpg" },
  { name: "James Walker", role: "Senior Technician", image: "/images/team/expert-2.jpg" },
  { name: "Ryan Mitchell", role: "Installation Specialist", image: "/images/team/expert-3.jpg" },
  { name: "Daniel Brooks", role: "Maintenance Lead", image: "/images/team/expert-4.jpg" },
];

export const EXPERT_SOCIALS: HomeSocialItem[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.5-1.3H16V5.6c-.3 0-1.2-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8v2.8h2.4V21z",
    accent: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.9 8.7H4.2V20h2.7zM5.6 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2M20 13.5c0-2.9-1.6-4.3-3.7-4.3-1.7 0-2.5.9-2.9 1.6V8.7H10.7V20h2.7v-6c0-1.3.6-2.1 1.8-2.1s1.6.8 1.6 2.1v6H20z",
    accent: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2m0 1.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6M17.4 5.5a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5m0 1.8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8z",
    accent: false,
  },
];

export const RECENT_WORKS: RecentWorkItem[] = [
  {
    title: "Leaking cistern and full bathroom reseal",
    category: "Plumbing",
    image: "/images/recent-works/plumbing.svg",
  },
  {
    title: "Move-out deep clean, two-bed apartment",
    category: "Cleaning",
    image: "/images/recent-works/cleaning.svg",
  },
  {
    title: "Consumer unit upgrade and RCD test",
    category: "Electrical",
    image: "/images/recent-works/electrical.svg",
  },
];

export const INDUSTRIES_LEFT: IndustrySplitItem[] = [
  {
    title: "Residential Spaces",
    body: "Crafting Comfortable, Functional & Elegant Homes",
    icon: Home,
  },
  {
    title: "Commercial Projects",
    body: "Innovative Spaces Designed for Business Success",
    icon: Building2,
  },
  {
    title: "Industrial Facilities",
    body: "Engineered for Efficiency, Safety & Operational Excellence",
    icon: Factory,
  },
];

export const INDUSTRIES_RIGHT: IndustrySplitItem[] = [
  {
    title: "Civil Infrastructure",
    body: "Building Strong Foundations for Sustainable Communities",
    icon: Landmark,
  },
  {
    title: "Government Projects",
    body: "Delivering Trusted Infrastructure for Public Excellence",
    icon: Building,
  },
  {
    title: "Custom Developments",
    body: "Tailored Solutions Designed Around Your Vision",
    icon: Wrench,
  },
];

export const FEATURED_POST: HomePostItem = {
  category: "Waterproofing",
  date: "Mar 12, 2026",
  title: "Advanced Waterproofing: Protecting Concrete from Harsh Climates",
  description:
    "Learn how specialized membrane applications and chemical coatings can extend the lifespan of your building's foundation by preventing moisture seepage and salt-related corrosion.",
  image: "/images/services/electrical-installation.jpg",
};

export const HOME_POSTS: HomePostItem[] = [
  {
    category: "Project Management",
    date: "Feb 25, 2026",
    title: "Structural Restoration: Reviving Heritage Buildings",
    description:
      "A deep dive into the techniques used to reinforce older structures without compromising their original architectural integrity.",
    image: "/images/blog/blueprint-review.jpg",
  },
  {
    category: "Project Management",
    date: "Feb 25, 2026",
    title: "Structural Restoration: Reviving Heritage Buildings",
    description:
      "A deep dive into the techniques used to reinforce older structures without compromising their original architectural integrity.",
    image: "/images/projects/panel-rewire.jpg",
  },
  {
    category: "Project Management",
    date: "Feb 25, 2026",
    title: "Structural Restoration: Reviving Heritage Buildings",
    description:
      "A deep dive into the techniques used to reinforce older structures without compromising their original architectural integrity.",
    image: "/images/blog/blueprint-review.jpg",
  },
  {
    category: "Maintenance Dept",
    date: "Feb 25, 2026",
    title: "Essential Maintenance Tips for Luxury Swimming",
    description:
      "Keep your pool crystal clear with these professional chemical balancing and filtration tips.",
    image: "/images/projects/panel-rewire.jpg",
  },
];
