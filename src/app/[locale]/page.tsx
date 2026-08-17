import type { Metadata } from "next";
import { HomeView } from "@/modules/home";

export const metadata: Metadata = {
  title: "Rapid | Contracting & Maintenance Services",
  description:
    "One crew covering six trades across Sharjah & the Emirates. In-house technicians, upfront fixed quotes, and guaranteed workmanship.",
};

export default function HomePage() {
  return <HomeView />;
}
