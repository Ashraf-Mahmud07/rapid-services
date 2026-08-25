import { notFound } from "next/navigation";
import HeroSection from "@/shared/components/layout/HeroSection";
import FAQCTASection from "@/modules/service/components/FAQCTASection";
import bgImage from "@/shared/assets/png/service-banner.jpg";
import ProjectDetail from "../components/ProjectDetail";
import { getProjectById } from "../constants/mock-projects";

interface ProjectDetailsPageProps {
  projectId: string;
}

export default function ProjectDetailsPage({ projectId }: ProjectDetailsPageProps) {
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full">
      <HeroSection
        title="Explore by projects"
        subtitle="The work we are booked for most often. Pick a project to see what is included, what it starts at and how long it takes on site."
        backgroundImage={bgImage}
      />

      <div className="w-full bg-white">
        <div className="container-page py-8 md:py-16">
          <div className="rounded-2xl bg-[#F8F8F8] p-4 sm:p-6 md:p-10 lg:p-12">
            <ProjectDetail project={project} />
          </div>
        </div>
      </div>

      <FAQCTASection />
    </div>
  );
}
