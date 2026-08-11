import Image from "next/image";
import StepsCard from "../components/StepsCard";

const steps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your vision, goals, and requirements to create a strong foundation for your project.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Our experts craft detailed plans and innovative designs tailored to your space, budget, and expectations.",
  },
  {
    step: "03",
    title: "Construction & Execution",
    description:
      "With precision and expertise, we bring your vision to life using high-quality materials and skilled craftsmanship.",
  },
];

export default function Steps() {
  return (
    <section className="section-space overflow-hidden bg-[#0a0e1c] py-[90px]">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-[560px]">
          <h2 className="text-[34px] leading-[43.1px] font-semibold tracking-[-0.988px] text-white sm:text-[40px]">
            A Refined Process Built for <span className="text-primary">Precision & Excellence</span>
          </h2>
          <p className="mt-5 max-w-[470px] text-[14px] leading-[23.1px] text-white/50">
            Our streamlined process ensures every project is planned, managed, and completed with
            precision, efficiency, and the highest standards of quality from start to finish.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-[6px] border border-white/20 bg-[#0f1626]">
            <div className="relative h-[300px] w-full sm:h-[360px] lg:h-[420px]">
              <Image
                src="/images/services/wiring-rewiring.jpg"
                alt="Project workflow"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,28,0.1),rgba(10,14,28,0.7))]" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <StepsCard key={step.step} {...step} align={index === 1 ? "right" : "left"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
