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
  Reviews,
  Services,
  Team,
  TradesTicker,
} from "@/modules/home/sections";
import { Footer, Navbar } from "@/shared/components/layout";

export default function HomePage() {
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
