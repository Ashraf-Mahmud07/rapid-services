import type { Metadata } from "next";
import { CareersView } from "@/modules/careers";

export const metadata: Metadata = {
  title: "Careers | Rapid",
  description: "Explore rewarding career opportunities and grow with us.",
};

export default function CareerPage() {
  return <CareersView />;
}
