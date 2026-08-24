import Image from "next/image";

import { cn } from "@/shared/utils/cn";
import careerHeaderImage from "../assets/images/career-header.png";
import { CAREER_HIGHLIGHTS, CAREER_INTRO } from "../data/career-intro.data";

export default function CareerIntro() {
  return (
    <section className="mb-14 grid items-stretch gap-8 lg:mb-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg lg:aspect-auto lg:h-full lg:min-h-[380px]">
        <Image
          src={careerHeaderImage}
          alt="Two Rapid technicians servicing an office floor"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-primary uppercase">
          <span aria-hidden="true" className="h-px w-4 bg-primary" />
          {CAREER_INTRO.eyebrow}
        </span>

        <h2 className="mt-3.5 text-[26px] leading-[1.24] font-bold tracking-[-0.02em] text-[#17181a] sm:text-[30px] lg:text-[34px]">
          {CAREER_INTRO.title}
        </h2>

        <p className="mt-4 text-[13.5px] leading-[1.78] text-[#5a5f63] lg:text-[14px]">
          {CAREER_INTRO.description}
        </p>

        <div className="mt-8 grid grid-cols-1 border-t border-[#EAEBED] sm:grid-cols-2">
          {CAREER_HIGHLIGHTS.map((highlight, index) => (
            <div
              key={highlight.title}
              className={cn(
                "py-4 lg:py-5",
                index > 0 && "border-t border-[#EAEBED]",
                index === 1 && "sm:border-t-0",
                index % 2 === 0 ? "sm:pe-6" : "sm:border-s sm:border-[#EAEBED] sm:ps-6"
              )}
            >
              <h3 className="text-[13.5px] leading-[1.4] font-bold text-[#17181a]">
                {highlight.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.7] text-[#8b9096]">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
