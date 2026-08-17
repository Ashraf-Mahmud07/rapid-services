"use client";

import { CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "../types/projects.types";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [index, setIndex] = useState(-1);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </button>

      <h2 className="mb-6 text-xl font-extrabold tracking-tight text-primary md:text-2xl">
        {project.title}
      </h2>

      <div className="w-full">
        {Array.isArray(project.content) ? (
          <div className="flex flex-col space-y-10 pb-8">
            {project.content.map((block, index) => {
              if (block.type === 1) {
                return (
                  <div key={index} className="flex flex-col relative">
                    <h2 className="mb-4 text-[18px] md:text-xl font-bold text-primary leading-snug tracking-tight">
                      {block.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {block.description}
                    </p>
                  </div>
                );
              } else if (block.type === 2) {
                return (
                  <div key={index} className="flex flex-col p-5 md:p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors shadow-sm">
                    <h3 className="mb-3 text-base md:text-[18px] font-semibold text-primary">
                      {block.title}
                    </h3>
                    <p className="mb-5 text-[14.5px] leading-relaxed text-slate-600">
                      {block.description}
                    </p>
                    {block.bullets && block.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {block.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start text-[14.5px]">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            </div>
                            <div className="ml-3">
                              <strong className="font-semibold text-slate-900">{bullet.label} </strong>
                              <span className="text-slate-600 leading-relaxed">{bullet.text}</span>
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
          <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-600 mb-8">
            {project.content}
          </div>
        )}
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <>
          <div className="mb-10 grid grid-cols-2 gap-1.5 md:grid-cols-4">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group"
                onClick={() => setIndex(idx)}
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            ))}
          </div>

          {/* Simple Lightbox */}
          {index >= 0 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white"
                onClick={() => setIndex(-1)}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  src={project.gallery[index]}
                  alt="Gallery preview"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {index > 0 && (
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={(e) => { e.stopPropagation(); setIndex(index - 1); }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {index < project.gallery.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={(e) => { e.stopPropagation(); setIndex(index + 1); }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
