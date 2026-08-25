"use client";

import { CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import type { Project } from "../types/projects.types";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Use the primary image or the first gallery image if available
  const heroImage = project.image || (project.gallery && project.gallery[0]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link
        href={ROUTES.PROJECT}
        className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <h2 className="mb-6 text-xl font-extrabold tracking-tight text-primary uppercase md:text-2xl">
        {project.title}
      </h2>

      {heroImage && (
        <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl bg-gray-100 md:h-[400px] lg:h-[450px]">
          <Image src={heroImage} alt={project.title} fill className="object-cover" priority />
        </div>
      )}

      <div className="w-full">
        {Array.isArray(project.content) ? (
          <div className="flex flex-col space-y-10 pb-8">
            {project.content.map((block, index) => {
              if (block.type === 1) {
                return (
                  <div key={index} className="relative flex flex-col">
                    <h2 className="mb-4 text-[18px] leading-snug font-bold tracking-tight text-primary md:text-xl">
                      {block.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {block.description}
                    </p>
                  </div>
                );
              } else if (block.type === 2) {
                return (
                  <div key={index} className="flex flex-col rounded-xl bg-white p-4 sm:p-6 md:p-8">
                    <h3 className="mb-4 text-base font-bold text-primary md:text-[18px]">
                      {block.title}
                    </h3>
                    {block.description && (
                      <p className="mb-6 text-[14px] leading-relaxed text-slate-600 md:text-[14.5px]">
                        {block.description}
                      </p>
                    )}
                    {block.bullets && block.bullets.length > 0 && (
                      <ul className="space-y-4">
                        {block.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start text-[14px] md:text-[14.5px]">
                            <div className="mt-0.5 flex-shrink-0">
                              <CheckCircle2
                                className="h-[18px] w-[18px] text-primary"
                                strokeWidth={2}
                              />
                            </div>
                            <div className="ml-3 leading-relaxed text-slate-500">
                              <strong className="font-semibold text-slate-800">
                                {bullet.label}{" "}
                              </strong>
                              {bullet.text}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : (
          <div className="prose prose-slate mb-8 max-w-none text-[15px] leading-relaxed text-slate-600">
            {project.content}
          </div>
        )}
      </div>

      <div className="mt-auto border-t border-gray-100 pt-6">
        <Link
          href={ROUTES.PROJECT}
          className="flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>
    </div>
  );
}
