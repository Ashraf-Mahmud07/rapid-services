import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
import FAQCTASection from "../components/FAQCTASection";
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
      <div className="section-background">
        <StatsSection />
        <TradesSection />
        <FAQCTASection />
      </div>
    </div>
  );
}
