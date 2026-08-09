import { Zap, Droplet, Paintbrush, Sparkles, Wrench, Thermometer } from "lucide-react";
import type { Trade, TradeContent } from "../types/service.types";

export const trades: Trade[] = [
  { id: "electrical", label: "Electrical", icon: Zap },
  { id: "plumbing", label: "Plumbing", icon: Droplet },
  { id: "painting", label: "Painting", icon: Paintbrush },
  { id: "cleaning", label: "Cleaning", icon: Sparkles },
  { id: "repairs", label: "Repairs", icon: Wrench },
  { id: "heating", label: "Heating & cooling", icon: Thermometer },
];

export const tabData: Record<string, TradeContent> = {
  electrical: {
    title: "Electrical",
    badge: "Licensed electricians",
    highlightTitle: "Certified electrical work, tested and documented",
    highlightDesc:
      "Every electrician on our team is licensed for the work they carry out and insured to $2M. We handle sockets and lighting, consumer unit upgrades, full and partial rewires, fault finding and periodic testing, and we certify each circuit we touch before we leave. If the fault is not what you were told it was, you get a revised fixed price before we continue.",
    features: [
      "Socket, switch and lighting installation",
      "Consumer unit and panel upgrades",
      "Fault finding and circuit testing",
      "Partial and full rewires",
      "Safety certificates on completion",
    ],
    benefits: [
      "Work certified and signed off in writing.",
      "No callout fee, fixed price per circuit.",
      "Same-day attendance for outages.",
    ],
  },
  plumbing: {
    title: "Plumbing",
    badge: "Licensed plumbers",
    highlightTitle: "Expert plumbing solutions, fast and reliable",
    highlightDesc:
      "Our licensed plumbers provide fast and reliable service for all your plumbing needs. From leak detection and repair to full pipe installation and water heater replacements, we guarantee our workmanship.",
    features: [
      "Leak detection and repair",
      "Pipe installation and replacement",
      "Water heater services",
      "Drain cleaning and unclogging",
      "Fixture installation",
    ],
    benefits: [
      "Emergency plumbing services available.",
      "Transparent pricing with no hidden fees.",
      "Quality parts and materials used.",
    ],
  },
};
