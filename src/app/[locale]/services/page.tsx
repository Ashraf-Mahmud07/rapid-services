import type { Metadata } from "next";

import { ServicePage } from "@/modules/service";

export const metadata: Metadata = {
  title: "Services | Rapid",
  description:
    "Browse our full range of professional services designed to meet your home, business, and maintenance needs with quality you can trust.",
};

export default function ServicesPage() {
  return <ServicePage />;
}
