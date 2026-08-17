"use client";

import Image from "next/image";
import { useAboutData } from "../hooks/useAboutData";

export default function HowItWorks() {
  const { t, steps } = useAboutData();

  return (
    <section className="section-space">
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

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {steps.map((step, index) => (
            <li
              key={step.key}
              className={[
                "xl:px-7",
                index > 0 && "xl:border-s xl:border-dotted xl:border-black/20",
                index === 1 && "xl:mt-11",
                index === 2 && "xl:mt-5",
                index === 3 && "xl:mt-16",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary text-white">
                <Image
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-5 brightness-0 invert"
                />
              </span>
              <h3 className="max-w-[14ch] text-[17px] leading-[1.28] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.68] text-body-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
