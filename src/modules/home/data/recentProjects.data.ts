import { ROUTES } from "@/shared/constants/routes";
import recentProject1 from "../assets/images/recent-project-1.jpg";
import recentProject2 from "../assets/images/recent-project-2.jpg";
import recentProject3 from "../assets/images/recent-project-3.jpg";
import { RecentProjectsData } from "../types/recentProjects.types";

export const recentProjectsData: RecentProjectsData = {
  eyebrow: "Our Electrical Services",
  title: "Recent Projects",
  subtitle:
    "We take pride in offering you the best services available, backed by full documentation on every job.",
  cta: {
    label: "View All",
    href: ROUTES.PROJECT,
  },
  items: [
    {
      id: "leak-detection-repair",
      title: "Leak Detection & Repair",
      description:
        "Using advanced tools, we identify leaks early and provide fast, reliable repairs to protect your home or facility.",
      image: recentProject1,
      href: ROUTES.SERVICE,
    },
    {
      id: "faucet-sink-repair",
      title: "Faucet & Sink Repair",
      description:
        "Quick, dependable repair solutions to stop leaks and improve your sink and faucet performance.",
      image: recentProject2,
      href: ROUTES.SERVICE,
    },
    {
      id: "pipe-repair-replacement",
      title: "Pipe Repair & Replacement",
      description:
        "We repair damaged pipes and replace old ones to ensure a safe, leak-free plumbing system.",
      image: recentProject3,
      href: ROUTES.SERVICE,
    },
  ],
};
