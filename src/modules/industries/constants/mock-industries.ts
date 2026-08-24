import { Home, Building2, Briefcase, Monitor, Store, HardHat } from "lucide-react";
import type { Industry, IndustryContent, BookingStep } from "../types/industries.types";

export const industries: Industry[] = [
  { id: "homeowners", label: "Homeowners", icon: Home },
  { id: "landlords", label: "Landlords", icon: Building2 },
  { id: "property_managers", label: "Property managers", icon: Briefcase },
  { id: "offices", label: "Offices", icon: Monitor },
  { id: "retail", label: "Retail & hospitality", icon: Store },
  { id: "construction", label: "Construction handover", icon: HardHat },
];

export const tabData: Record<string, IndustryContent> = {
  homeowners: {
    title: "Residential work",
    highlightTitle: "Homeowners",
    highlightDesc:
      "Most homes need four different trades a year and nobody wants four different phone numbers. We cover electrical work, plumbing, painting, cleaning and the long list of small repairs with one team, one booking and one fixed quote. You get the name and photo of your technician before the visit, and a two-hour arrival window rather than a whole day off work.",
    features: [
      "Electrical, plumbing, painting and repairs",
      "Fixed quote before any work starts",
      "Two-hour arrival windows",
      "Photo report of completed work",
      "90-day workmanship guarantee",
    ],
    benefits: [
      "No chasing four separate trades.",
      "Price agreed up front, no callout fee.",
      "Same technicians on repeat visits.",
    ],
  },
  landlords: {
    title: "Landlord services",
    highlightTitle: "Landlords",
    highlightDesc:
      "Streamline property maintenance with a single provider covering all major trades. We offer emergency response, routine maintenance, and safety compliance checks to keep your properties safe and your tenants happy.",
    features: [
      "Gas and electrical safety certificates",
      "Emergency repairs and maintenance",
      "End of tenancy deep cleaning",
      "Painting and decorating between lets",
    ],
    benefits: [
      "Single point of contact for all properties.",
      "Direct coordination with tenants for access.",
      "Detailed invoices and compliance reports.",
    ],
  },
  property_managers: {
    title: "Property Management",
    highlightTitle: "Property managers",
    highlightDesc:
      "Comprehensive maintenance solutions designed to support property managers. We deliver reliable, high-quality service across multiple trades to ensure your portfolio remains in excellent condition.",
    features: [
      "Planned preventative maintenance",
      "Reactive emergency repairs",
      "Communal area cleaning and upkeep",
      "Compliance and safety testing",
    ],
    benefits: [
      "Dedicated account management.",
      "SLA-driven response times.",
      "Transparent reporting and invoicing.",
    ],
  },
  offices: {
    title: "Office maintenance",
    highlightTitle: "Offices",
    highlightDesc:
      "Keep your workplace fully operational and looking its best with our comprehensive office maintenance services. From electrical issues to regular cleaning, we handle it all with minimal disruption to your business.",
    features: [
      "Out-of-hours service available",
      "Electrical and data cabling",
      "HVAC maintenance and repairs",
      "Daily or weekly office cleaning",
    ],
    benefits: [
      "Minimal disruption to working hours.",
      "Fully vetted and insured technicians.",
      "Customized maintenance schedules.",
    ],
  },
  retail: {
    title: "Retail & hospitality",
    highlightTitle: "Retail & hospitality",
    highlightDesc:
      "Fast, reliable maintenance for retail spaces and hospitality venues where downtime means lost revenue. We provide rapid response repairs and high-quality finishing for customer-facing environments.",
    features: [
      "Rapid emergency response",
      "Lighting maintenance and upgrades",
      "Plumbing and washroom repairs",
      "Shop fitting adjustments and painting",
    ],
    benefits: [
      "Discreet service to protect customer experience.",
      "Flexible scheduling including nights.",
      "High-quality finish for brand standards.",
    ],
  },
  construction: {
    title: "Construction support",
    highlightTitle: "Construction handover",
    highlightDesc:
      "Professional finishing and cleaning services to prepare new builds and renovations for final handover. We ensure every detail meets the highest standards before your clients take possession.",
    features: [
      "Builders cleans and sparkle cleans",
      "Snagging repairs across all trades",
      "Final safety testing and certification",
      "Painting and finishing touches",
    ],
    benefits: [
      "Reliable final-stage partner.",
      "Multi-trade capability reduces coordination.",
      "Strict adherence to site safety protocols.",
    ],
  },
};

export const bookingSteps: BookingStep[] = [
  {
    step: "STEP 1",
    title: "Tell us the job",
    desc: "A short call or form. Photos help, but we will ask the right questions either way.",
  },
  {
    step: "STEP 2",
    title: "Fixed quote, same day",
    desc: "We price the work, not the hours. That number is what appears on the invoice.",
  },
  {
    step: "STEP 3",
    title: "Booked with a window",
    desc: "Same-week slots, a two-hour arrival window and the name of your technician.",
  },
  {
    step: "STEP 4",
    title: "Signed off and guaranteed",
    desc: "Photo report on completion and 90 days of cover on all workmanship.",
  },
];

import { IndustryContentBlock, IndustryDetailData } from "../types/industries.types";

import imgHealthcare from "@/modules/service/assets/clean-industrial.jpg";
import imgEducation from "@/modules/service/assets/hvac-installation.jpg";
import imgFinance from "@/modules/service/assets/elec-panel.jpg";
import imgRetail from "@/modules/service/assets/paint-interior.jpg";
import imgManufacturing from "@/modules/service/assets/epoxy.webp";
import imgTechnology from "@/modules/service/assets/elec-lv.webp";
import imgRealEstate from "@/modules/service/assets/combo-roof.jpg";
import imgLogistics from "@/modules/service/assets/grp-fiberglass.jpg";
import imgEnergy from "@/modules/service/assets/polyurea.jpg";
import imgEntertainment from "@/modules/service/assets/ceil-acoustic.jpg";

const defaultIndustryContent: IndustryContentBlock[] = [
  {
    type: "paragraph",
    text: "Our dedicated solutions for this industry are designed to address the most pressing challenges you face today. We provide comprehensive services tailored to your specific operational requirements, ensuring seamless integration and maximum efficiency.",
  },
  {
    type: "list",
    title: "Key Capabilities & Solutions",
    listType: "check",
    items: [
      {
        title: "Specialized Expertise",
        text: "Deep understanding of industry-specific compliance and technical standards.",
      },
      {
        title: "Scalable Infrastructure",
        text: "Solutions that grow with your business and adapt to changing market demands.",
      },
      {
        title: "24/7 Support",
        text: "Round-the-clock maintenance and rapid response for critical systems.",
      },
    ],
  },
  {
    type: "paragraph",
    text: "By partnering with us, you gain access to a team of dedicated professionals who are committed to delivering excellence. We handle the complexity of your infrastructure so you can focus on what matters most—growing your business.",
  },
];

export const industryCards: IndustryDetailData[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    shortDesc:
      "We support hospitals, clinics, and medical groups with secure, reliable infrastructure that keeps patient care connected and compliant.",
    image: imgHealthcare,
    content: defaultIndustryContent,
  },
  {
    id: "education",
    title: "Education",
    shortDesc:
      "From K-12 to higher ed, we help schools modernize learning environments with scalable, secure solutions for classrooms and campuses.",
    image: imgEducation,
    content: defaultIndustryContent,
  },
  {
    id: "finance",
    title: "Finance",
    shortDesc:
      "Banks, insurers, and fintechs rely on us for high-security infrastructure that protects transactions, data, and compliance.",
    image: imgFinance,
    content: defaultIndustryContent,
  },
  {
    id: "retail",
    title: "Retail",
    shortDesc:
      "We power omnichannel retail with fast, reliable connectivity that keeps stores running smoothly and customers engaged.",
    image: imgRetail,
    content: defaultIndustryContent,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    shortDesc:
      "We help manufacturers build resilient operations with IoT-ready networks that improve efficiency, safety, and supply chain visibility.",
    image: imgManufacturing,
    content: defaultIndustryContent,
  },
  {
    id: "technology",
    title: "Technology",
    shortDesc:
      "Software, SaaS, and IT teams trust us to deliver scalable infrastructure that supports rapid development and global deployment.",
    image: imgTechnology,
    content: defaultIndustryContent,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    shortDesc:
      "Property developers and managers use our solutions to build smart, connected buildings that attract tenants and reduce operational costs.",
    image: imgRealEstate,
    content: defaultIndustryContent,
  },
  {
    id: "logistics",
    title: "Logistics",
    shortDesc:
      "We help logistics and distribution teams streamline operations with reliable connectivity for warehouses, yards, and fleet management.",
    image: imgLogistics,
    content: defaultIndustryContent,
  },
  {
    id: "energy",
    title: "Energy",
    shortDesc:
      "Utilities and energy providers partner with us to secure grid operations, remote monitoring, and critical infrastructure.",
    image: imgEnergy,
    content: defaultIndustryContent,
  },
  {
    id: "entertainment",
    title: "Entertainment",
    shortDesc:
      "Venues, studios, and streaming services rely on us for low-latency connectivity that keeps experiences seamless and engaging.",
    image: imgEntertainment,
    content: defaultIndustryContent,
  },
];

export const getIndustryById = (id: string): IndustryDetailData | undefined => {
  return industryCards.find((industry) => industry.id === id);
};
export const industryCategories = [
  {
    id: "public-sector",
    title: "Public Sector",
    industries: industryCards.filter((c) => ["healthcare", "education"].includes(c.id)),
  },
  {
    id: "commercial",
    title: "Commercial",
    industries: industryCards.filter((c) => ["finance", "retail", "real-estate"].includes(c.id)),
  },
  {
    id: "industrial",
    title: "Industrial",
    industries: industryCards.filter((c) => ["manufacturing", "logistics"].includes(c.id)),
  },
  {
    id: "technology",
    title: "Technology",
    industries: industryCards.filter((c) => ["technology", "entertainment"].includes(c.id)),
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    industries: industryCards.filter((c) => ["energy"].includes(c.id)),
  },
];
