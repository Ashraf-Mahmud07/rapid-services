import { Suspense } from "react";
import { Skeleton } from "@/shared/components/ui/Skeleton";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
import FAQCTASection from "../components/FAQCTASection";
// import StatsSection from "../components/StatsSection";
import TradesSection from "../components/TradesSection";

export default function ServicePage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Explore by services"
        subtitle="Browse our full range of professional services designed to meet your home, business, and maintenance needs with quality you can trust."
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
          <TradesSection />
        </Suspense>
        <FAQCTASection />
      </div>
    </div>
  );
}
