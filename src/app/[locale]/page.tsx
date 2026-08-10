import {
  About,
  Blog,
  Brands,
  Certifications,
  Commitment,
  Contact,
  CounterSection,
  CTA,
  EngineeringSafety,
  Features,
  HomeHero,
  Newsletter,
  RecentWork,
  Reviews,
  Services,
  Steps,
  Team,
  TradesTicker,
} from "@/modules/home/sections";
import { Footer, Navbar } from "@/shared/components/layout";

/**
 * Section order follows the reference top to bottom. The navbar is transparent
 * here because it sits over the hero photograph.
 */
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <TradesTicker />
      <About />
      <RecentWork />
      <EngineeringSafety />
      <Commitment />
      <Services />
      <Steps />
      <Reviews />
      <Brands />
      <Features />
      <CTA />
      <Certifications />
      <Team />
      <Blog />
      <Contact />
      <CounterSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
