"use client";

import Image from "next/image";
import { useAboutData } from "../hooks/useAboutData";

export default function StatsBand() {
  const { stats } = useAboutData();

  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="container-page grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12">
        {stats.map((stat) => (
          <div key={stat.key}>
            <span className="mb-5 flex size-14 items-center justify-center rounded-[10px] bg-white/15">
              <Image src={stat.icon} alt="" aria-hidden="true" className="size-7" />
            </span>
            <p className="text-[clamp(1.75rem,2.4vw,2.25rem)] leading-none font-bold text-white">
              {stat.value}
            </p>
            <p className="mt-2.5 max-w-[220px] text-[12.5px] tracking-[0.08em] text-white/85 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
