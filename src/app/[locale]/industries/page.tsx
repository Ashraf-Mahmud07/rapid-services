import type { Metadata } from "next";

import { IndustriesPage } from "@/modules/industries";

export const metadata: Metadata = {
  title: "Industries | Rapid",
  description:
    "One crew covering electrical, plumbing, painting, cleaning and repairs. See how the work is scheduled, priced and signed off for your sector.",
};

export default function IndustriesRoutePage() {
  return <IndustriesPage />;
}
