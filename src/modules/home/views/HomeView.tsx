"use client";

import {
  About,
  Blog,
  Certifications,
  Commitment,
  Contact,
  CTA,
  EngineeringSafety,
  FinishedProjects,
  HomeHero,
  IndustriesSplit,
  MeetTheExperts,
  Newsletter,
  OngoingProjects,
  ProcessSection,
  Reviews,
  Services,
  Team,
  TradesTicker,
} from "../sections";
import { Footer, Navbar } from "@/shared/components/layout";

export default function HomeView() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <TradesTicker />
      <About />
      <OngoingProjects />
      <EngineeringSafety />
      <Commitment />
      <FinishedProjects />
      <Services />
      <ProcessSection />
      <Reviews />
      <IndustriesSplit />
      <CTA />
      <Certifications />
      <Team />
      <MeetTheExperts />
      <Blog />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
