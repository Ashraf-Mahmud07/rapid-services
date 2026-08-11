import { Award, Building2, Droplet, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

type Credential = { title: string; subtitle: string; icon: LucideIcon };

/** The reference card carries four credentials, not the six listed before. */
const CREDENTIALS: Credential[] = [
  { title: "ISO 9001:2015", subtitle: "Quality management systems", icon: Award },
  { title: "ISO 14001:2015", subtitle: "Environmental management", icon: Droplet },
  { title: "ISO 45001:2018", subtitle: "Occupational health & safety", icon: ShieldCheck },
  { title: "Dubai Municipality", subtitle: "Approved contractor registration", icon: Building2 },
];

export default function Certifications() {
  return (
    <section className="section-space">
      <div className="container-page">
        <div className="grid gap-10 rounded-[14px] bg-primary px-7 py-10 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16 lg:px-14 lg:py-14">
          <div>
            <p className="inline-flex rounded-[6px] border border-white/45 px-3.5 py-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-white uppercase">
              Certifications
            </p>
            <h2 className="mt-5 max-w-[15ch] text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.24] font-bold tracking-[-0.02em] text-white">
              Quality and safety, backed by international standards
            </h2>
            <p className="mt-4 max-w-[420px] text-[14.5px] leading-[1.68] text-white/80">
              Backed by international certifications, we deliver trusted quality and safety in every
              project.
            </p>
            <Link
              href={ROUTES.CERTIFICATION}
              className="mt-7 inline-flex h-11 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-primary transition-opacity hover:opacity-90"
            >
              View more
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-[10px] bg-white/12 p-4 lg:p-5"
              >
                <span className="flex size-11 flex-none items-center justify-center rounded-[10px] bg-white/18 text-white">
                  <item.icon className="size-5" strokeWidth={1.9} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold text-white">{item.title}</span>
                  <span className="mt-0.5 block text-[13px] text-white/75">{item.subtitle}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
