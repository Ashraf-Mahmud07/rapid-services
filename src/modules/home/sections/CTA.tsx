"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

import { useOverlays } from "@/shared/components/overlays/OverlayProvider";

const PHONE = "+971 55 516 4777";

export default function CTA() {
  const overlays = useOverlays();

  return (
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[24px] bg-[#0B2C4D] shadow-2xl">
          <Image
            src="/images/cta/power-up.jpg"
            alt="Power up your property"
            aria-hidden="true"
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="-z-10 object-cover object-right"
          />
          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,44,77,0.96)_0%,rgba(11,44,77,0.85)_40%,rgba(11,44,77,0.3)_70%,rgba(11,44,77,0)_100%)]"
          />

          <div className="max-w-[580px] p-8 sm:p-12 lg:p-16">
            <h2 className="text-[32px] leading-[1.15] font-bold tracking-tight text-white sm:text-[38px] lg:text-[42px]">
              Power Up Your
              <br />
              Property Today.
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">
              We deliver high quality solutions that keep your home or business running safely and
              efficiently.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={() => overlays.open("quote")}
                className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
              >
                Get Free Quote
              </button>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2.5 border-b border-white/60 pb-1 text-[15px] font-semibold text-white transition-colors hover:border-white"
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
