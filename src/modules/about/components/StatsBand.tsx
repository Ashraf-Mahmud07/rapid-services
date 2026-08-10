import Image from "next/image";

/**
 * Full-bleed brand band. Same four figures as the home counter section, but the
 * reference gives them square translucent icon tiles on brand rather than the
 * light treatment used on home.
 */
const STATS = [
  { value: "20+", label: "Successfully completed projects", icon: "/icons/counter-projects.svg" },
  { value: "17+", label: "Years of industry experience", icon: "/icons/counter-experience.svg" },
  { value: "10M+", label: "Total project investment value", icon: "/icons/counter-investment.svg" },
  {
    value: "120+",
    label: "Skilled professionals & engineers",
    icon: "/icons/counter-professionals.svg",
  },
];

export default function StatsBand() {
  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="container-page grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <span className="mb-5 flex size-14 items-center justify-center rounded-[10px] bg-white/15">
              <Image src={stat.icon} alt="" aria-hidden="true" width={26} height={26} />
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
