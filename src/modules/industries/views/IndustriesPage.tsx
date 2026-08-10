import FAQCTASection from "@/modules/service/components/FAQCTASection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
import IndustriesSection from "../components/IndustriesSection";
import StatsSection from "../components/StatsSection";

export default function IndustriesPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Explore by industries"
        subtitle="One crew covering electrical, plumbing, painting, cleaning and repairs. Pick who you are and see how the work is scheduled, priced and signed off."
        backgroundImage={bgImage}
      />
      <StatsSection />
      <IndustriesSection />
      <FAQCTASection />
    </div>
  );
}
