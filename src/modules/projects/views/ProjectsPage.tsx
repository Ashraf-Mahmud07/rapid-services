import FAQCTASection from "@/modules/service/components/FAQCTASection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
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
      <div className="section-background">
        <StatsSection />
        <ProjectsSection />
        <FAQCTASection />
      </div>
    </div>
  );
}
