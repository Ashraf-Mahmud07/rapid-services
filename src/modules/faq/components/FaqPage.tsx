import FAQCTASection from "@/modules/service/components/FAQCTASection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";

export default function FaqPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="FAQ"
        subtitle="Find quick answers to common questions about our services, processes, and support."
        backgroundImage={bgImage}
      />
      <FAQCTASection />
    </div>
  );
}
