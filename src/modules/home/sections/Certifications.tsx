import type { LucideIcon } from "lucide-react";
import { Award, Building2, CheckCircle2, Leaf, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality management systems",
    icon: Award,
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental management",
    icon: Leaf,
  },
  {
    title: "ISO 45001:2018",
    subtitle: "Occupational health & safety",
    icon: ShieldCheck,
  },
  {
    title: "Dubai Municipality",
    subtitle: "Approved contractor registration",
    icon: Building2,
  },
  {
    title: "Trakhees Certified",
    subtitle: "Free zone works authorization",
    icon: CheckCircle2,
  },
  {
    title: "Civil Defense Approved",
    subtitle: "Fire & life safety compliance",
    icon: ShieldCheck,
  },
];

export default function Certifications() {
  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-[6px] bg-[#0a0e1c]">
          <div className="grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-14">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit rounded-[6px] border border-primary/30 bg-primary/10 px-[14px] py-[8px] text-[10.5px] font-bold tracking-[1.05px] text-primary uppercase">
                Certifications
              </div>

              <h2 className="mt-5 max-w-[420px] text-[32px] leading-[38.4px] font-bold tracking-[-0.768px] text-white sm:text-[36px]">
                Quality and safety, backed by international standards
              </h2>

              <p className="mt-4 max-w-[420px] text-[14.5px] leading-[24.65px] text-white/52">
                Backed by international certifications, we deliver trusted quality and safety in
                every project.
              </p>

              <a
                href="#"
                className="mt-7 inline-flex w-fit rounded-full bg-primary px-[18px] py-[10px] text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                View All
              </a>
            </div>

            <div className="grid gap-[16px] md:grid-cols-2">
              {certifications.map((item) => {
                const Icon = item.icon as LucideIcon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-[14px] rounded-[6px] border border-white/10 bg-white/5 px-[16px] py-[16px]"
                  >
                    <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[11px] bg-primary/15 text-primary">
                      <Icon className="size-[19px]" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-[14.5px] font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-[12px] leading-[18px] text-white/48">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
