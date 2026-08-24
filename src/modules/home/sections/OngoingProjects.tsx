import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ongoingProjectsData } from "../data/ongoingProjects.data";

export default function OngoingProjects() {
  return (
    <section className="bg-[#0B2C4D] py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        {/* Header Row */}
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[560px]">
            <div className="inline-flex rounded-md bg-white/15 px-3.5 py-1.5">
              <span className="text-[13px] font-medium text-white/90">
                {ongoingProjectsData.eyebrow}
              </span>
            </div>

            <h2 className="mt-3 text-[32px] font-bold tracking-tight text-white sm:text-[38px] lg:text-[42px]">
              {ongoingProjectsData.title}
            </h2>

            <p className="mt-2.5 text-[15px] leading-[1.65] text-white/75">
              {ongoingProjectsData.subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href={ongoingProjectsData.cta.href}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
            >
              {ongoingProjectsData.cta.label}
            </Link>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {ongoingProjectsData.items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="relative aspect-[399/262] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-[20px] font-bold text-[#0E1A2B] transition-colors group-hover:text-primary sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#737373] sm:text-[14.5px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
