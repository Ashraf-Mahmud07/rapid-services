import Image from "next/image";
import type { StaticImageData } from "next/image";

import step2 from "../assets/Icon-1.svg";
import step3 from "../assets/Icon-2.svg";
import step1 from "../assets/Icon.svg";
import step4 from "../assets/step-4.svg";

type Step = { title: string; body: string; icon: StaticImageData };

const STEPS: Step[] = [
  {
    title: "Request & Consultation",
    body: "Tell us your requirements and schedule a consultation. We understand your needs and provide the best solution.",
    icon: step1,
  },
  {
    title: "Inspection & Planning",
    body: "Our experts inspect your site, identify issues, and create a clear plan to ensure safe and efficient electrical work.",
    icon: step2,
  },
  {
    title: "Execution & Installation",
    body: "We carry out the work using modern tools and techniques, ensuring precision, safety, and high-quality results.",
    icon: step3,
  },
  {
    title: "Testing & Completion",
    body: "After completion, we thoroughly test everything to ensure safety, performance & satisfaction.",
    icon: step4,
  },
];

/**
 * Four steps separated by dotted rules, each sitting a little lower than the
 * last — the staircase is the point, so the offset is deliberate rather than a
 * spacing accident.
 */
export default function HowItWorks() {
  return (
    <section className="section-space">
      <div className="container-page">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <p className="text-eyebrow font-semibold text-primary uppercase">How it works</p>
          <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Simple, Safe and Efficient Process to Get Your Electrical Work Done Right.
          </h2>
          <p className="mt-4 text-[14.5px] leading-[1.68] text-body-soft">
            We follow a clear and professional process to ensure every project is handled smoothly,
            safely, and with the highest level of quality.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className={[
                "xl:px-7",
                index > 0 && "xl:border-s xl:border-dotted xl:border-black/20",
                // Staggered baseline, as the reference draws it.
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
