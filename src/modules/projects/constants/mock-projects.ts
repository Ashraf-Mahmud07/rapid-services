import { Bath, Zap, Paintbrush, Sparkles, Utensils, Droplet } from "lucide-react";
import type { Project, ProjectContent, BookingStep } from "../types/projects.types";

export const projects: Project[] = [
  { id: "bathroom_refits", label: "Bathroom refits", icon: Bath },
  { id: "panel_upgrades", label: "Panel upgrades", icon: Zap },
  { id: "full_repaints", label: "Full repaints", icon: Paintbrush },
  { id: "move_out_cleans", label: "Move-out cleans", icon: Sparkles },
  { id: "kitchen_installs", label: "Kitchen installs", icon: Utensils },
  { id: "damp_leak", label: "Damp & leak repair", icon: Droplet },
];

export const tabData: Record<string, ProjectContent> = {
  bathroom_refits: {
    title: "Bathroom refits",
    badge: "PLUMBING PROJECT",
    highlightTitle: "From a failed seal to a room finished in a week",
    highlightDesc:
      "Bathrooms fail slowly and then all at once. We strip back to what is sound, replace the valves and waste runs, reset the pan or tray, tile and reseal, and finish with the decorating so you are not left booking a painter afterwards. Water is off for hours, not days, and the room is usable each evening on longer jobs.",
    featuresTitle: "What we cover",
    features: [
      "Leak and damp assessment first",
      "Valve, cistern and waste replacement",
      "Pan or shower tray reset",
      "Tiling, grouting and resealing",
      "Finishing paintwork included",
    ],
    benefitsTitle: "Included in the price",
    benefits: [
      "One crew across plumbing and finishing.",
      "Fixed price agreed before stripping out.",
      "Room usable between working days.",
    ],
  },
  panel_upgrades: {
    title: "Panel upgrades",
    badge: "ELECTRICAL PROJECT",
    highlightTitle: "Modernize your electrical system safely",
    highlightDesc:
      "Upgrade your electrical panel to handle modern loads and improve safety. We handle everything from the initial assessment to coordinating with your utility company and ensuring everything is up to code.",
    featuresTitle: "What we cover",
    features: [
      "Load capacity assessment",
      "Panel and breaker replacement",
      "Grounding system updates",
      "Permitting and inspections",
      "Labeling and documentation",
    ],
    benefitsTitle: "Included in the price",
    benefits: [
      "All necessary permits and fees.",
      "Coordination with utility providers.",
      "Comprehensive safety guarantee.",
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
