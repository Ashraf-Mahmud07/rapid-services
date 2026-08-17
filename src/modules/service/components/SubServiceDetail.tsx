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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col min-h-full">
      <button
        onClick={onBack}
        className="mb-6 flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
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
                className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group"
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
              container: { backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(4px)" }
            }}
          />
        </>
      )}

      <div className="mb-10 text-center">
        <Link href={ROUTES.CONTACT} className="inline-block w-full md:w-auto cursor-pointer">
          <Button size="lg" className="w-full md:w-auto uppercase tracking-wide cursor-pointer">
            TECHNICIAN VISIT
          </Button>
        </Link>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <button
          onClick={onBack}
          className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors w-full"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </button>
      </div>
    </div>
  );
}
