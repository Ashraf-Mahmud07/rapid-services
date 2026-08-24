"use client";

import { Footer, Navbar } from "@/shared/components/layout";
import {
  About,
  Blog,
  Commitment,
  Contact,
  CTA,
  EngineeringSafety,
  HomeHero,
  IndustriesSplit,
  MeetTheExperts,
  Newsletter,
  OngoingProjects,
  ProcessSection,
  RecentWork,
  Reviews,
  Services,
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
      <RecentWork />
      <Services />
      <ProcessSection />
      <Reviews />
      <IndustriesSplit />
      <CTA />
      <MeetTheExperts />
      {/* <Certifications /> */}
      <Blog />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
