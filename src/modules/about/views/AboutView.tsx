"use client";

import { Certifications } from "@/modules/home/sections";
import { FaqSection, Footer, Navbar } from "@/shared/components/layout";
import AboutHero from "../components/AboutHero";
import CeoQuote from "../components/CeoQuote";
import HowItWorks from "../components/HowItWorks";
import MissionVision from "../components/MissionVision";
import StatsBand from "../components/StatsBand";

export default function AboutView() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <div className="section-background">
        <CeoQuote />
        <StatsBand />
        <HowItWorks />
        <MissionVision />
        <Certifications tone="navy" />
        <div className="container-page pt-10 sm:pt-14 lg:pt-19">
          <FaqSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
