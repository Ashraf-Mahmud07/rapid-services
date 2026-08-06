import type { Metadata } from "next";

import { CareersHero, JobBoard, NewsletterSection } from "@/modules/careers";
import { Footer, Navbar } from "@/shared/components/layout";

export const metadata: Metadata = {
  title: "Careers | Rapid",
  description: "Explore rewarding career opportunities and grow with us.",
};

export default function CareerPage() {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <CareersHero />

      <div className="container-page pt-10 sm:pt-14 lg:pt-[76px]">
        <JobBoard />
        <NewsletterSection />
      </div>

      <Footer />
    </div>
  );
}
