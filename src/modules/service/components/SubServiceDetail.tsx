"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/components/ui/Button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { SubService } from "../types/service.types";

interface SubServiceDetailProps {
  subService: SubService;
  onBack: () => void;
}

export default function SubServiceDetail({ subService, onBack }: SubServiceDetailProps) {
  const [index, setIndex] = useState(-1);

  // Map the imported images to the format expected by the lightbox
  const slides = subService.gallery?.map((img) => ({ src: img.src || img })) || [];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 flex min-h-full flex-col duration-500">
      <button
        onClick={onBack}
        className="mb-6 flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to services
      </button>

      <h2 className="mb-6 text-xl font-extrabold tracking-tight text-primary md:text-2xl">
        {subService.title}
      </h2>

      <div className="w-full">
        {Array.isArray(subService.content) ? (
          <div className="flex flex-col space-y-10 pb-8">
            {subService.content.map((block, index) => {
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
                  <div key={index} className="flex flex-col rounded-2xl bg-white p-5 md:p-6">
                    <h3 className="mb-3 text-base font-semibold text-primary md:text-[18px]">
                      {block.title}
                    </h3>
                    <p className="mb-5 text-[14.5px] leading-relaxed text-slate-600">
                      {block.description}
                    </p>
                    {block.bullets && block.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {block.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start text-[14.5px]">
                            <div className="mt-0.5 flex-shrink-0">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            </div>
                            <div className="ml-3">
                              <strong className="font-semibold text-slate-900">
                                {bullet.label}{" "}
                              </strong>
                              <span className="leading-relaxed text-slate-600">{bullet.text}</span>
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
            {subService.content}
          </div>
        )}
      </div>

      {subService.gallery && subService.gallery.length > 0 && (
        <>
          <div className="mb-10 grid grid-cols-2 gap-1.5 md:grid-cols-4">
            {subService.gallery.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100"
                onClick={() => setIndex(idx)}
              >
                <Image
                  src={img}
                  alt={`${subService.title} gallery ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(4px)" },
            }}
          />
        </>
      )}

      <div className="mb-10 text-center">
        <Link href={ROUTES.CONTACT} className="inline-block w-full cursor-pointer md:w-auto">
          <button className="w-full cursor-pointer rounded-full bg-primary px-10 py-3 text-[15px] font-medium text-white transition-all hover:bg-primary/90 md:w-auto">
            Technician Visit
          </button>
        </Link>
      </div>

      <div className="mt-auto border-t border-gray-100 pt-6">
        <button
          onClick={onBack}
          className="flex w-full cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </button>
      </div>
    </div>
  );
}
