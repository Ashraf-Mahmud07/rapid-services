import { Suspense } from "react";
import { Skeleton } from "@/shared/components/ui/Skeleton";
import FAQCTASection from "@/modules/service/components/FAQCTASection";
import ClientsSection from "../components/ClientsSection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
// import ProjectsSection from "../components/ProjectsSection";
import NewProjectsSection from "../components/NewProjectsSection";
// import StatsSection from "../components/StatsSection";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Explore by projects"
        subtitle="The work we are booked for most often. Pick a project to see what is included, what it starts at and how long it takes on site."
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
          {/* <ProjectsSection /> */}
          <NewProjectsSection />
        </Suspense>
        <ClientsSection />
        <FAQCTASection />
      </div>
    </div>
  );
}
