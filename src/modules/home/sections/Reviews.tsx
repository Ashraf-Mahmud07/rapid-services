"use client";

import asusLogo from "@/modules/home/assets/images/asus.png";
import lenovoLogo from "@/modules/home/assets/images/lenovo.png";
import siemensLogo from "@/modules/home/assets/images/siemens.png";
import sonyLogo from "@/modules/home/assets/images/sony.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const logos = [
  sonyLogo,
  lenovoLogo,
  siemensLogo,
  asusLogo,
  lenovoLogo,
  sonyLogo,
  lenovoLogo,
  siemensLogo,
  sonyLogo,
];

export default function Reviews() {
  const [activeLogo, setActiveLogo] = useState(4);

  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-md bg-primary">
          <div className="grid min-h-[420px] lg:grid-cols-[0.85fr_1.15fr]">
            {/* Photo panel */}
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src="/images/team/review.png"
                alt="Customer testimonial"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Text panel */}
            <div className="flex flex-col justify-center px-6 py-10 md:px-10 lg:px-14 lg:py-14">
              <span className="text-[40px] leading-none font-bold text-white/90">&ldquo;</span>

              <h2 className="mt-2 text-[26px] font-bold tracking-[-0.52px] text-white">
                What Customer <span className="text-white">Say</span>
              </h2>

              <p className="mt-5 max-w-[560px] text-[15px] leading-[25.5px] text-white/68">
                &ldquo;We engaged Taj Al Rahmah for our new commercial build, and they proved to be
                a reliable and dedicated partner throughout the project. Their team delivered
                high-quality workmanship, maintained clear communication, and completed every stage
                with professionalism and attention to detail. We were impressed with their
                commitment to excellence and would gladly recommend their services.&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-between gap-6">
                <div>
                  <p className="text-[15.5px] font-bold text-white">Zayed Omar</p>
                  <p className="mt-1 text-[11.5px] font-semibold tracking-[0.92px] text-white/80 uppercase">
                    Regular customer
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous review"
                    className="flex size-[38px] items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition hover:bg-white/10"
                  >
                    <ArrowLeft className="size-[15px]" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    className="flex size-[38px] items-center justify-center rounded-full bg-white text-primary transition hover:opacity-90"
                  >
                    <ArrowRight className="size-[15px]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 bg-white p-4 sm:gap-6 md:gap-8">
          {logos.map((logo, index) => {
            const isActive = index === activeLogo;
            return (
              <button
                type="button"
                key={index}
                onClick={() => setActiveLogo(index)}
                aria-label={`Show client ${index + 1}`}
                className={`flex size-27.5 shrink-0 items-center justify-center rounded-full bg-[#F6F6F6] p-3 transition-all ${
                  isActive ? "scale-105 shadow-md ring-2 ring-primary" : "shadow-sm hover:shadow-md"
                }`}
              >
                <Image src={logo} alt="Company logo" className="opacity-70" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
