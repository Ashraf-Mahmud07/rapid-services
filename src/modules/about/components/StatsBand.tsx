"use client";

import Image from "next/image";

import { cn } from "@/shared/utils/cn";
import { useAboutData } from "../hooks/useAboutData";

export default function StatsBand() {
  const { stats } = useAboutData();

  return (
    <section className="bg-[#0A365C] py-14 lg:py-16">
      <div className="container-page grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        {stats.map((stat, index) => (
          <div
            key={stat.key}
            className={cn("xl:pe-8", index > 0 && "xl:border-s xl:border-white/15 xl:ps-8")}
          >
            <span className="mb-5 flex size-14 items-center justify-center rounded-[14px] bg-white">
              <Image src={stat.icon} alt="" aria-hidden="true" className="size-7" />
            </span>
            <p className="text-[clamp(1.75rem,2.4vw,2.25rem)] leading-none font-bold text-white">
              {stat.value}
            </p>
            <p className="mt-2.5 max-w-[220px] text-[11.5px] leading-[1.5] tracking-[0.09em] text-white/75 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
