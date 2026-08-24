"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import type { Project } from "../types/projects.types";

interface NewProjectCardProps {
  project: Project;
  location?: string;
}

export default function NewProjectCard({
  project,
  location = "Dubai, United Arab Emirat",
}: NewProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.image
        ? [project.image]
        : [];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && gallery.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
      }, 1500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, gallery.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <div
      className="flex cursor-pointer flex-col rounded-xl border border-[#EBEFF0] bg-[#F8F8F8] p-4 transition-all hover:shadow-sm lg:p-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="mb-4 text-[17px] font-bold text-primary">{project.title}</h3>

      <div className="relative mb-4 h-[220px] w-full overflow-hidden rounded-xl bg-gray-200">
        {gallery.length > 0 && (
          <Image
            src={gallery[currentIndex]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        )}

        {/* Slider Controls - Only render when hovered and if multiple images exist */}
        {isHovered && gallery.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-white drop-shadow-md transition-all hover:scale-110 hover:text-white/90"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-white drop-shadow-md transition-all hover:scale-110 hover:text-white/90"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    idx === currentIndex ? "bg-primary" : "bg-white/60 hover:bg-white"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-auto text-[13px] text-gray-500">
        <span className="font-bold text-gray-900">Location:</span> {location}
      </div>
    </div>
  );
}
