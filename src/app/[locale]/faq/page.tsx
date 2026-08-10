import type { Metadata } from "next";

import FaqPage from "@/modules/faq/components/FaqPage";

export const metadata: Metadata = {
  title: "FAQ | Rapid",
  description:
    "One crew covering electrical, plumbing, painting, cleaning and repairs. See how the work is scheduled, priced and signed off for your sector.",
};

export default function IndustriesRoutePage() {
  return <FaqPage />;
}
