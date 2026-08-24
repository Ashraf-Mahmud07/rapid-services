import { Metadata } from "next";
import ProjectDetailsPage from "@/modules/projects/views/ProjectDetailsPage";
import { getProjectById } from "@/modules/projects/constants/mock-projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found | Rapid",
    };
  }

  return {
    title: `${project.title} | Rapid Projects`,
    description: project.shortDesc || project.title,
  };
}

export default async function ProjectRoutePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const resolvedParams = await params;
  return <ProjectDetailsPage projectId={resolvedParams.id} />;
}
