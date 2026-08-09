import {
  About,
  Brands,
  Certifications,
  Commitment,
  Contact,
  CounterSection,
  CTA,
  EngineeringSafety,
  Features,
  RecentWork,
} from "@/modules/home/sections";
import { Footer, Navbar } from "@/shared/components/layout";

export default function HomePage() {
  return (
    <main>
      <Navbar variant="solid" />
      <About />
      <CounterSection />
      <EngineeringSafety />
      <Commitment />
      <RecentWork />
      <Features />
      <Certifications />
      <Brands />
      {/* Sections below wait on the /images/about/about-home.webp asset. */}
      {/* <Services /> */}
      {/* <Steps /> */}
      {/* <Reviews /> */}
      {/* <Team /> */}
      {/* <Blog /> */}
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
