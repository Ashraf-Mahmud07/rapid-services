"use client";
import { FolderOpen } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProjectCategory } from "../types/projects.types";
import ProjectGrid from "./ProjectGrid";
import ProjectDetail from "./ProjectDetail";

interface ProjectContentAreaProps {
  activeData: ProjectCategory;
  activeItem: string | null;
  onItemChange: (itemId: string | null) => void;
}

export default function ProjectContentArea({ activeData, activeItem, onItemChange }: ProjectContentAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeItem && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    }
  }, [activeItem]);

  const activeProject = activeData.projects?.find((project) => project.id === activeItem);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 bg-white p-6 md:p-8 lg:p-10 relative overflow-y-auto hide-scrollbar rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl border-t border-gray-100 lg:border-t-0"
    >
      {!activeProject && (
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="inline-block h-6 w-1 rounded-sm bg-primary"></span>
            {activeData.title}
          </h2>
          {activeData.badge && (
            <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-500">
              {activeData.badge}
            </span>
          )}
        </div>
      )}

      {activeProject ? (
        <ProjectDetail 
          project={activeProject} 
          onBack={() => onItemChange(null)} 
        />
      ) : activeData.projects?.length > 0 ? (
        <ProjectGrid 
          projects={activeData.projects} 
          onCardClick={onItemChange} 
        />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <FolderOpen className="h-16 w-16 text-primary mb-4 fill-primary/20" strokeWidth={1} />
          <h3 className="text-xl font-bold text-slate-800 mb-2">No Projects Found</h3>
          <p className="text-[15px] text-slate-500">Sorry, no projects match the selected category.</p>
        </div>
      )}
    </div>
  );
}
