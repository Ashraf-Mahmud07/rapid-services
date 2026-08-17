import type { Project } from "../types/projects.types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onCardClick: (id: string) => void;
}

export default function ProjectGrid({ projects, onCardClick }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onClick={onCardClick} 
        />
      ))}
    </div>
  );
}
