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
