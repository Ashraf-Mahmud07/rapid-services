"use client";

import { useState, useMemo } from "react";
import { projectCategories } from "../constants/mock-projects";
import NewProjectCard from "./NewProjectCard";
import { cn } from "@/shared/utils/cn";

export default function NewProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [{ id: "all", title: "All" }, ...projectCategories];

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") {
      return projectCategories.flatMap((category) => category.projects);
    }
    const category = projectCategories.find((c) => c.id === activeTab);
    return category ? category.projects : [];
  }, [activeTab]);

  return (
    <div className="container-page bg-white py-10 md:py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="text-[28px] font-bold text-primary md:text-[32px]">Recent Projects</h2>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-gray-500">
          Explore the innovative projects that showcase our steadfast commitment to excellence and
          the creativity we passionately bring to life. Each endeavor reflects our dedication to
          pushing boundaries and achieving remarkable results
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-10 flex w-full justify-center">
        <div className="hide-scrollbar flex w-full max-w-fit items-center justify-start gap-1 overflow-x-auto rounded-full bg-[#f8f9fa] p-1.5 md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-medium whitespace-nowrap transition-all",
                activeTab === category.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <NewProjectCard key={`${project.id}-${idx}`} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-xl bg-[#f8f9fa] text-sm text-gray-500">
          No projects found for this category.
        </div>
      )}
    </div>
  );
}
