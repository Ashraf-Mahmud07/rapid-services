import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your vision, goals, and requirements to create a strong foundation for your project.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our experts craft detailed plans and innovative designs tailored to your space, budget, and expectations.",
  },
  {
    number: "03",
    title: "Construction & Execution",
    description:
      "With precision and expertise, we bring your vision to life using high-quality materials and skilled craftsmanship.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative isolate overflow-hidden surface-wash py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 section-background bg-cover opacity-30"
      />
      <div className="relative container-page mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Image */}
          <div>
            <h2 className="mb-6 max-w-[440px] text-[26px] font-bold tracking-[-0.52px] text-black">
              A Refined Process Built for{" "}
              <span className="text-primary">Precision &amp; Excellence</span>
            </h2>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-md lg:max-w-115">
              <Image
                src="/images/commitmentImage.png"
                alt="Technician working on precise electrical installation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Steps */}
          <div>
            <div className="mt-2 flex flex-col gap-8 lg:mt-14">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="shrink-0">
                    <span className="block text-[11.5px] font-semibold tracking-[0.92px] text-primary uppercase">
                      Step
                    </span>
                    <span className="block text-[28px] leading-none font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[16.5px] font-bold text-black">{step.title}</h3>
                    <p className="mt-2 max-w-[460px] text-[14.5px] leading-[24px] text-black/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
