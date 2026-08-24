"use client";

import Image from "next/image";

import { useOverlays } from "@/shared/components/overlays/OverlayProvider";

const commitmentImage = "/images/commitmentImage.png";

export default function Commitment() {
  const overlays = useOverlays();

  return (
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0B2C4D] shadow-2xl">
          <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
            <div className="max-w-[580px]">
              <div className="inline-flex rounded-md border border-[#2B4E73] bg-[#1C3E63] px-3.5 py-1.5">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-white uppercase sm:text-[12px]">
                  Our commitment
                </span>
              </div>

              <h2 className="mt-5 text-[32px] leading-[1.2] font-bold tracking-tight text-white sm:text-[38px] lg:text-[42px]">
                Committed to precision and quality
              </h2>

              <p className="mt-4 text-[15px] leading-[1.7] text-white/80 sm:text-[16px]">
                From electrical and plumbing to painting and cleaning, our skilled team delivers
                reliable, high-quality services tailored to your needs. Every project is completed
                with precision, professionalism, and a commitment to exceptional results.
              </p>

              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => overlays.open("quote")}
                className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
              >
                Request a Quote
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] lg:aspect-[16/11]">
              <Image
                src={commitmentImage}
                alt="Skilled technician working on installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B2C4D] via-transparent to-transparent opacity-60 lg:opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
