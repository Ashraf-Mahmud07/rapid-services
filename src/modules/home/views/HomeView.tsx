"use client";

import { Footer, Navbar } from "@/shared/components/layout";
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
  RecentWork,
  Reviews,
  Services,
  Team,
  TradesTicker,
  WhyChooseUs,
} from "../sections";

export default function HomeView() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <TradesTicker />
      <WhyChooseUs />
      <About />
      <OngoingProjects />
      <EngineeringSafety />
      <Commitment />
      <FinishedProjects />
      <RecentWork />
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
