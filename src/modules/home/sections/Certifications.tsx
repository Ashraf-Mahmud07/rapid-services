import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";
import { CERTIFICATIONS } from "../data/home.data";

/** Home runs the card in brand teal; the About page reference runs it in navy. */
export type CertificationsTone = "brand" | "navy";

const TONES: Record<CertificationsTone, { card: string; action: string }> = {
  brand: {
    card: "bg-primary",
    action: "bg-white px-7 text-primary",
  },
  navy: {
    card: "bg-[#0A365C]",
    action: "w-full max-w-[300px] justify-center bg-primary px-7 text-white",
  },
};

interface CertificationsProps {
  tone?: CertificationsTone;
}

export default function Certifications({ tone = "brand" }: CertificationsProps) {
  const styles = TONES[tone];

  return (
    <section>
      <div className="container-page">
        <div
          className={cn(
            "grid gap-10 rounded-xl px-7 py-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:items-center lg:gap-16 lg:px-16 lg:py-10",
            styles.card
          )}
        >
          <div>
            <p className="inline-flex rounded-md border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-white uppercase">
              Certifications
            </p>
            <h2 className="mt-4 text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.24] font-bold tracking-[-0.02em] text-white">
              Quality and safety, backed by international standards
            </h2>
            <p className="mt-2 max-w-105 text-[14.5px] leading-[1.68] text-white/80">
              Backed by international certifications, we deliver trusted quality and safety in every
              project.
            </p>
            <Link
              href={ROUTES.CERTIFICATION}
              className={cn(
                "mt-7 inline-flex h-11 items-center rounded-full text-[15px] font-semibold transition-opacity hover:opacity-90",
                styles.action
              )}
            >
              View More
            </Link>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((item) => (
              <li key={item.title} className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                <span className="flex size-16 flex-none items-center justify-center rounded-lg bg-white/15">
                  <Image src={item.icon} alt="" aria-hidden="true" className="size-6.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-semibold text-white">{item.title}</span>
                  <span className="mt-1 block text-[12px] leading-[1.5] text-white/70">
                    {item.subtitle}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
