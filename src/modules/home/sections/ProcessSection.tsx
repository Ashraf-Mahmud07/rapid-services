import Image from "next/image";
import { HOME_PROCESS_STEPS } from "../data/home.data";

export default function ProcessSection() {
  return (
    <section className="bg-[#EBF9F8] py-12 lg:py-20">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14 xl:gap-16">
          {/* Left: Heading & Image */}
          <div>
            <h2 className="text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
              A Refined Process Built for{" "}
              <span className="text-primary">Precision &amp; Excellence</span>
            </h2>
            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-neutral-100 shadow-md">
              <Image
                src="/images/commitmentImage.png"
                alt="Technician working with precision"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: 3 Steps */}
          <div className="divide-y divide-[#D1F0EC]">
            {HOME_PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6 py-7 first:pt-0 last:pb-0 sm:gap-8"
              >
                <div className="shrink-0 text-center">
                  <span className="block text-[11px] font-bold tracking-[0.14em] text-primary uppercase">
                    Step
                  </span>
                  <span className="block text-[32px] leading-tight font-bold text-primary sm:text-[36px]">
                    {step.number}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[19px] font-bold text-primary sm:text-[21px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-[#737373] sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
