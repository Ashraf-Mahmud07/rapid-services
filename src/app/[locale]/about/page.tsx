import type { Metadata } from "next";

import { AboutHero, CeoQuote, HowItWorks, MissionVision, StatsBand } from "@/modules/about";
import { Certifications } from "@/modules/home/sections";
import { FaqSection, Footer, Navbar } from "@/shared/components/layout";
import { ROUTES } from "@/shared/constants/routes";

export const metadata: Metadata = {
  title: "About Us | Rapid",
  description:
    "One crew covering six trades. A Sharjah maintenance contractor that employs its own technicians and quotes the job before it starts.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <CeoQuote />
      <StatsBand />
      <HowItWorks />
      <MissionVision />
      <Certifications />
      <div className="container-page">
        <FaqSection askHref={ROUTES.FAQ} />
      </div>
      <Footer />
    </main>
  );
}
