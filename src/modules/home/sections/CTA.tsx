"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

import { useOverlays } from "@/shared/components/overlays/OverlayProvider";

const PHONE = "+971 55 516 4777";

export default function CTA() {
  const overlays = useOverlays();

  return (
    <section className="section-space">
      <div className="container-narrow">
        <div className="relative isolate overflow-hidden rounded-[14px]">
          <Image
            src="/images/cta/power-up.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="-z-10 object-cover"
          />
          {/* Weighted left so the copy holds against the bright tool on the right. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,22,34,0.94)_0%,rgba(12,22,34,0.78)_34%,rgba(12,22,34,0.18)_62%,rgba(12,22,34,0)_100%)]"
          />

          <div className="max-w-[560px] px-7 py-14 sm:px-12 sm:py-20 lg:px-14 lg:py-[104px]">
            <h2 className="text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.2] font-bold tracking-[-0.02em] text-white">
              Power Up Your
              <br />
              Property Today.
            </h2>
            <p className="mt-4 max-w-[420px] text-[15px] leading-[1.62] text-white/80">
              We deliver high quality solutions that keep your home or business running safely and
              efficiently.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <button
                type="button"
                onClick={() => overlays.open("quote")}
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get Free Quote
              </button>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border-b border-white/60 pb-2 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                <Phone className="size-4" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
