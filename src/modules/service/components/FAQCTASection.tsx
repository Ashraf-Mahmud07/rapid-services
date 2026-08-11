import { FaqSection } from "@/shared/components/layout";
import CTASection from "./CTASection";

const FAQCTASection = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="relative">
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
