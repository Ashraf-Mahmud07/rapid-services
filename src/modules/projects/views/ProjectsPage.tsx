import bgImage from "@/shared/assets/png/service-banner.jpg";
import { FaqSection } from "@/shared/components/layout";
import HeroSection from "@/shared/components/layout/HeroSection";
import CTASection from "../components/CTASection";
import ProjectsSection from "../components/ProjectsSection";
import StatsSection from "../components/StatsSection";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="Explore by projects"
        subtitle="The work we are booked for most often. Pick a project to see what is included, what it starts at and how long it takes on site."
        backgroundImage={bgImage}
      />
      <StatsSection />
      <ProjectsSection />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FaqSection />
      </div>
      <CTASection />
    </div>
  );
}
