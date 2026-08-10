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
          <div className="relative z-10 grid items-center gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-[58px] lg:py-[72px]">
            <div className="max-w-[570px]">
              <div className="inline-flex rounded-[6px] border border-white/35 bg-white/15 px-3 py-2">
                <span className="text-[11px] font-semibold tracking-[1.1px] text-white uppercase">
                  Our commitment
                </span>
              </div>

              <h2 className="mt-5 max-w-[420px] text-[34px] leading-[40.8px] font-semibold tracking-[-0.884px] text-white sm:text-[40px]">
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
                className="mt-8 inline-flex rounded-full bg-white px-[30px] py-[14px] text-[15px] font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Request a Quote
              </button>
            </div>

            <div className="relative h-[320px] rounded-xl lg:h-[430px]">
              <Image
                src={commitmentImage}
                alt="Skilled professionals working on a property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="bg-[background: linear-gradient(90deg, #0A0E1C_0.41%, rgba(10, 14, 28, 0.00)_99.59%);] absolute inset-0 z-10 -translate-x-10" />
              {/* <div className="absolute inset-0 z-10 -translate-x-30 bg-red-200" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
