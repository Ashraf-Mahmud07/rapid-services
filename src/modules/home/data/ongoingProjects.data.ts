import { ROUTES } from "@/shared/constants/routes";
import ongoingElectrical1 from "../assets/images/ongoing-electrical-1.jpg";
import ongoingElectrical2 from "../assets/images/ongoing-electrical-2.jpg";
import ongoingElectrical3 from "../assets/images/ongoing-electrical-3.jpg";
import { OngoingProjectsData } from "../types/ongoingProjects.types";

export const ongoingProjectsData: OngoingProjectsData = {
  eyebrow: "Our Electrical Services",
  title: "Ongoing Projects",
  subtitle:
    "We take pride in offering you the best services available, backed by full documentation on every job.",
  cta: {
    label: "View All",
    href: ROUTES.PROJECT,
  },
  items: [
    {
      id: "wiring-rewiring",
      title: "Wiring & Rewiring",
      description:
        "Safe and professional electrical wiring and rewiring solutions to ensure safety and code compliance.",
      image: ongoingElectrical1,
      href: ROUTES.SERVICE,
    },
    {
      id: "electrical-maintenance",
      title: "Electrical Maintenance",
      description:
        "Regular inspection and maintenance of electrical systems to ensure safety, reliability, and peak performance.",
      image: ongoingElectrical2,
      href: ROUTES.SERVICE,
    },
    {
      id: "lighting-installation",
      title: "Lighting Installation",
      description:
        "Professional installation of indoor and outdoor lighting solutions designed to enhance aesthetics and efficiency.",
      image: ongoingElectrical3,
      href: ROUTES.SERVICE,
    },
  ],
};
