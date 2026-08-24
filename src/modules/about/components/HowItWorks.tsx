"use client";

import Image from "next/image";

import { cn } from "@/shared/utils/cn";
import { useAboutData } from "../hooks/useAboutData";

/** The reference staggers the four steps down the row; columns 1 and 3 sit level. */
const STEP_OFFSET = ["", "xl:mt-8", "", "xl:mt-13"] as const;

export default function HowItWorks() {
  const { t, steps } = useAboutData();

  return (
    <section className="section-space bg-[#E6FFFE] py-16 lg:py-24">
      <div className="container-page">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <p className="text-eyebrow font-semibold text-primary uppercase">
            {t("howItWorksEyebrow")}
          </p>
          <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            {t("howItWorksTitle")}
          </h2>
          <p className="mt-4 text-[14.5px] leading-[1.68] text-body-soft">
            {t("howItWorksSubtitle")}
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14">
          {/* Column rules. Drawn on the row rather than on each step so they stay
              level with one another while the steps themselves are staggered. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-full">
            <span className="absolute inset-y-0 left-1/4 hidden border-s border-dotted border-black/25 xl:block" />
            <span className="absolute inset-y-0 left-2/4 hidden border-s border-dotted border-black/25 xl:block" />
            <span className="absolute inset-y-0 left-3/4 hidden border-s border-dotted border-black/25 xl:block" />
          </div>

          <ol className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 xl:grid-cols-4 xl:gap-0">
            {steps.map((step, index) => {
              const isFilled = index % 2 === 0;

              return (
                <li key={step.key} className={cn("xl:px-9", STEP_OFFSET[index])}>
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "flex size-11 flex-none items-center justify-center rounded-full",
                        isFilled ? "bg-primary" : "bg-white"
                      )}
                    >
                      <Image src={step.icon} alt="" aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="pt-1 text-[17px] leading-[1.28] font-semibold text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.68] text-body-soft">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
