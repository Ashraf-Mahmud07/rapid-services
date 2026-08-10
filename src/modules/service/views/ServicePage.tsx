import bgImage from "@/shared/assets/png/service-banner.jpg";
import { FaqSection } from "@/shared/components/layout";
import HeroSection from "@/shared/components/layout/HeroSection";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import TradesSection from "../components/TradesSection";

export default function ServicePage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Explore by services"
        subtitle="Browse our full range of professional services designed to meet your home, business, and maintenance needs with quality you can trust."
        backgroundImage={bgImage}
      />
      <StatsSection />
      <TradesSection />
      <div className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/images/section-background.png')",
            transform: "rotate(180deg) scale(1.1)",
          }}
        />
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <FaqSection />
          </div>
          <CTASection />
        </div>
      </div>
    </div>
  );
}
