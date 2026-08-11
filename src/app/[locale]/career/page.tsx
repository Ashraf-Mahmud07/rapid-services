import type { Metadata } from "next";

import { CareersHero, JobBoard } from "@/modules/careers";
import { Newsletter } from "@/modules/home/sections";
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
      <div className="section-background">
        <div className="container-page pt-10 sm:pt-14 lg:pt-19">
          <JobBoard />
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
}
