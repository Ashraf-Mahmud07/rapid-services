"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

import { cn } from "@/shared/utils/cn";

export type HeroSlide = {
  title: string;
  subtitle: string;
  backgroundImage?: string | StaticImageData;
};

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string | StaticImageData;
  /**
   * Extra slides. The references show circular prev/next controls at the
   * vertical midpoint and a three-dot indicator, with the active dot drawn as a
   * short brand pill. Omit this and the section renders exactly as before —
   * static, with no controls — so existing callers are unaffected.
   */
  slides?: HeroSlide[];
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  slides,
}: HeroSectionProps) {
  const deck: HeroSlide[] =
    slides && slides.length > 0 ? slides : [{ title, subtitle, backgroundImage }];
  const [index, setIndex] = React.useState(0);
  const current = deck[Math.min(index, deck.length - 1)];
  const many = deck.length > 1;

  const step = (direction: -1 | 1) =>
    setIndex((value) => (value + direction + deck.length) % deck.length);

  return (
    <section className="relative flex min-h-125 flex-col overflow-hidden bg-slate-900 pt-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/50 mix-blend-multiply" />
        {current.backgroundImage && (
          <Image
            src={current.backgroundImage}
            alt=""
            aria-hidden="true"
            fill
            className="absolute inset-0 z-0 h-full w-full object-cover"
            priority
          />
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-16 pb-24 text-center text-white sm:pt-20 sm:pb-32 md:pt-28 md:pb-40">
        <h1 className="mb-5 text-3xl font-bold tracking-tight drop-shadow-sm md:text-4xl lg:text-5xl">
          {current.title}
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed font-medium text-white/90 drop-shadow-sm md:text-lg">
          {current.subtitle}
        </p>
      </div>

      {many && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => step(-1)}
            className="absolute top-1/2 left-4 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-ink sm:left-8 lg:left-12"
          >
            <ChevronLeft className="size-5" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => step(1)}
            className="absolute top-1/2 right-4 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-ink sm:right-8 lg:right-12"
          >
            <ChevronRight className="size-5" strokeWidth={2.2} />
          </button>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {deck.map((slide, slideIndex) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === index ? "true" : undefined}
                onClick={() => setIndex(slideIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  slideIndex === index ? "w-6 bg-primary" : "w-1.5 bg-white/55 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
