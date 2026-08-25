import { notFound } from "next/navigation";
import HeroSection from "@/shared/components/layout/HeroSection";
import FAQCTASection from "@/modules/service/components/FAQCTASection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import IndustryDetail from "../components/IndustryDetail";
import { getIndustryById } from "../constants/mock-industries";

interface IndustryDetailsPageProps {
  industryId: string;
}

export default function IndustryDetailsPage({ industryId }: IndustryDetailsPageProps) {
  const industry = getIndustryById(industryId);

  if (!industry) {
    notFound();
  }

  return (
    <div className="w-full">
      <HeroSection
        title="Industries We Serve"
        subtitle="Discover the wide range of industries we support with our specialized services and solutions."
        backgroundImage={bgImage}
      />

      <div className="w-full bg-white">
        <div className="container-page py-8 md:py-16">
          <div className="rounded-2xl bg-[#F8F8F8] p-4 sm:p-6 md:p-10 lg:p-12">
            <IndustryDetail industry={industry} />
          </div>
        </div>
      </div>

      <FAQCTASection />
    </div>
  );
}
