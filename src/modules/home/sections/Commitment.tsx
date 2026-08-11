"use client";

import Image from "next/image";

import { useOverlays } from "@/shared/components/overlays/OverlayProvider";

const commitmentImage = "/images/commitmentImage.png";

export default function Commitment() {
  const overlays = useOverlays();

  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[14px] bg-primary">
          <div className="relative z-10 grid items-center gap-10 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12.5 lg:py-10">
            <div className="max-w-142.5">
              <div className="inline-flex rounded-md border border-white/35 bg-white/15 px-3 py-2">
                <span className="text-[11px] font-semibold tracking-[1.1px] text-white uppercase">
                  Our commitment
                </span>
              </div>

              <h2 className="mt-5 max-w-105 text-[34px] leading-[40.8px] font-semibold tracking-[-0.884px] text-white sm:text-[40px]">
                Committed to precision <span className="text-white/70"> and quality</span>
              </h2>

              <p className="mt-4 max-w-[560px] text-[16px] leading-[26.25px] text-white/80 sm:text-[18px]">
                From electrical and plumbing to painting and cleaning, our skilled team delivers
                reliable, high-quality services tailored to your needs. Every project is completed
                with precision, professionalism, and a commitment to exceptional results.
              </p>

              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => overlays.open("quote")}
                className="mt-8 inline-flex rounded-full bg-white px-7.5 py-3.5 text-[15px] font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Request a Quote
              </button>
            </div>

            <div className="relative h-80 rounded-xl lg:h-107.5">
              <Image
                src={commitmentImage}
                alt="Skilled professionals working on a property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-md object-cover"
              />
              <div className="bg-[background: linear-gradient(90deg, #0A0E1C_0.41%, rgba(10, 14, 28, 0.00)_99.59%);] absolute inset-0 z-10 -translate-x-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
