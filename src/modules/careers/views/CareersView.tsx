"use client";

import { FaqSection, Footer, Navbar } from "@/shared/components/layout";
import CareerIntro from "../components/CareerIntro";
import CareersHero from "../components/CareersHero";
import JobBoard from "../components/JobBoard";

export default function CareersView() {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <CareersHero />
      <div className="container-page pt-10 sm:pt-14 lg:pt-19">
        <CareerIntro />
        <JobBoard />
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}
