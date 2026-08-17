"use client";

import CareersHero from "../components/CareersHero";
import JobBoard from "../components/JobBoard";
import { Newsletter } from "@/modules/home/sections";
import { Footer, Navbar } from "@/shared/components/layout";

export default function CareersView() {
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
