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
        <Certifications />
        <div className="container-page">
          <FaqSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
