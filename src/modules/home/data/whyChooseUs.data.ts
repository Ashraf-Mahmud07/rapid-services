import { ROUTES } from "@/shared/constants/routes";
import { WhyChooseUsData } from "../types/whyChooseUs.types";

export const whyChooseUsData: WhyChooseUsData = {
  eyebrow: "WHY MAJOKA ENGINEERING",
  title: "Why Choose Us?",
  features: [
    {
      id: "unmatched-expertise",
      title: "Unmatched Expertise",
      description:
        "With years of experience across residential, commercial, and industrial projects, we bring proven knowledge and innovative techniques to every build.",
    },
    {
      id: "commitment-to-quality",
      title: "Commitment to Quality",
      description:
        "From materials to craftsmanship, we follow international standards to ensure long-lasting durability and top-tier finishing.",
    },
    {
      id: "on-time-delivery",
      title: "On-Time Delivery",
      description:
        "We value your time. Our structured planning and efficient project management guarantee deadlines are met without compromise.",
    },
  ],
  cta: {
    label: "Explore More",
    href: ROUTES.ABOUT,
  },
};
