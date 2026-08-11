import { FaqSection } from "@/shared/components/layout";
import CTASection from "./CTASection";

const FAQCTASection = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/images/section-background.png')",
            transform: "rotate(180deg) scale(1.1)",
          }}
        />
        <div className="relative z-10">
          <div className="container-page">
            <FaqSection />
          </div>
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default FAQCTASection;
