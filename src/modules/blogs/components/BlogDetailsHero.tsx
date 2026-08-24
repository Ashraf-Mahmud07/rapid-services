"use client";

import Navbar from "@/shared/components/layout/Navbar";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

interface BlogDetailsHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string | StaticImageData;
  onShare?: () => void;
  copied?: boolean;
}

export function BlogDetailsHero({
  title,
  subtitle,
  backgroundImage,
  onShare,
  copied,
}: BlogDetailsHeroProps) {
  const t = useTranslations("blogs");

  return (
    <section className="relative flex min-h-112.5 flex-col overflow-hidden bg-slate-900 pt-0">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/60 mix-blend-multiply" />
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="absolute inset-0 z-0 h-full w-full object-cover"
            priority
          />
        )}
      </div>

      {/* Navbar at the top of the hero */}
      <div className="relative z-50 w-full">
        <Navbar variant="transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-page flex w-full flex-1 flex-col items-center justify-center pt-16 pb-20 text-center text-white sm:pt-20 sm:pb-24">
        <h1 className="mb-4 max-w-4xl text-2xl leading-tight font-bold tracking-tight drop-shadow-sm md:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed font-medium text-white/90 md:text-[15px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
