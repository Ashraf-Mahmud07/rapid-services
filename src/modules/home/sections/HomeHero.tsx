"use client";

import { ChevronRight, Volume2 } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { useOverlays } from "@/shared/components/overlays/OverlayProvider";
import { ROUTES } from "@/shared/constants/routes";

const STATS = [
  { value: "20+", label: "Projects Completed" },
  { value: "17+", label: "Years Experience" },
  { value: "120+", label: "Happy Clients" },
];

/**
 * The home hero. The navbar renders over it in its transparent variant, so the
 * section owns the full band from the top of the page down to the trades strip
 * and carries its own top padding to clear the 96px bar.
 */
export default function HomeHero() {
  const overlays = useOverlays();

  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden lg:min-h-[915px]">
      {/* The photograph sits behind a left-weighted scrim so the copy stays
          legible over the bright right-hand side of the frame. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/careers-hero.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,10,12,0.94)_0%,rgba(8,10,12,0.82)_38%,rgba(8,10,12,0.45)_62%,rgba(8,10,12,0.25)_100%)]"
      />

      <div className="container-page pt-32 pb-14 lg:pt-40 lg:pb-20">
        <p className="inline-flex rounded-md border border-primary px-4 py-2.5 text-eyebrow font-semibold text-primary uppercase">
          Trusted Waterproofing Expert
        </p>

        <h1 className="mt-6 max-w-[15ch] text-[clamp(2.25rem,6.1vw,5.85rem)] leading-[1.02] font-bold tracking-[-0.045em] text-white">
          Rapid Contracting
        </h1>

        <p className="mt-6 text-[clamp(1.375rem,2.2vw,2.125rem)] leading-[1.24] font-bold tracking-[-0.01em] text-white">
          Contracting &amp;
          <br />
          Waterproofing <span className="text-primary">Excellence</span>
        </p>

        <p className="mt-6 max-w-[720px] border-s-[3px] border-primary ps-5 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-[2.15] text-white/80 italic">
          Combining technical expertise with superior craftsmanship, we provide durable cost
          effective solutions that safeguard properties, enhance performance and deliver long term
          value for our clients.
        </p>

        <div className="mt-6 flex flex-wrap gap-3.5">
          <button
            type="button"
            onClick={() => overlays.open("quote")}
            className="inline-flex h-14 items-center gap-2.5 rounded-full bg-primary px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Unmute Video
            <Volume2 className="size-[18px]" strokeWidth={2} />
          </button>
          <Link
            href={ROUTES.PROJECT}
            className="inline-flex h-14 items-center gap-2.5 rounded-full border border-primary px-8 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Projects
            <ChevronRight className="size-[18px]" strokeWidth={2.2} />
          </Link>
        </div>

        <dl className="mt-8 flex flex-wrap items-center gap-y-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index === 0
                  ? "pe-8 sm:pe-12"
                  : "border-s border-white/25 ps-8 pe-8 sm:ps-12 sm:pe-12"
              }
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(1.75rem,2.4vw,2.25rem)] leading-none font-bold text-white">
                  {stat.value}
                </span>
                <span className="mt-2.5 block text-[13px] tracking-[0.09em] text-white/80 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
