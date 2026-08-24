import { Suspense } from "react";
import { Skeleton } from "@/shared/components/ui/Skeleton";
import FAQCTASection from "@/modules/service/components/FAQCTASection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
// import IndustriesSection from "../components/IndustriesSection";
import NewIndustriesSection from "../components/NewIndustriesSection";
// import StatsSection from "../components/StatsSection";

export default function IndustriesPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Explore by industries"
        subtitle="One crew covering electrical, plumbing, painting, cleaning and repairs. Pick who you are and see how the work is scheduled, priced and signed off."
        backgroundImage={bgImage}
      />
      <div className="w-full">
        {/* <StatsSection /> */}
        <Suspense
          fallback={
            <div className="container flex gap-8 py-8">
              <Skeleton className="h-96 w-64" />
              <div className="flex-1 space-y-4">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            </div>
          }
        >
          {/* <IndustriesSection /> */}
          <NewIndustriesSection />
        </Suspense>
        <FAQCTASection />
      </div>
    </div>
  );
}
