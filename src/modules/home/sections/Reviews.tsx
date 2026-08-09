import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const logos = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function Reviews() {
  return (
    <section className="section-space">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[6px] bg-[#12172a]">
          <div className="grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-14">
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <div className="flex items-center gap-3">
                <span className="text-[40px] leading-none font-bold text-primary">“</span>
                <h2 className="text-[26px] font-bold tracking-[-0.52px] text-white">
                  What Customer <span className="text-primary">Say</span>
                </h2>
              </div>

              <p className="mt-5 max-w-[560px] text-[15px] leading-[25.5px] text-white/68">
                “We engaged Taj Al Rahmah for our new commercial build, and they proved to be a
                reliable and dedicated partner throughout the project. Their team delivered
                high-quality workmanship, maintained clear communication, and completed every stage
                with professionalism and attention to detail.”
              </p>

              <div className="mt-8 flex items-center justify-between gap-6">
                <div>
                  <p className="text-[15.5px] font-bold text-white">Zayed Omar</p>
                  <p className="mt-1 text-[11.5px] font-semibold tracking-[0.92px] text-primary uppercase">
                    Regular customer
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous review"
                    className="flex size-[38px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                  >
                    <ArrowLeft className="size-[15px]" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    className="flex size-[38px] items-center justify-center rounded-full bg-primary text-white transition hover:opacity-90"
                  >
                    <ArrowRight className="size-[15px]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative order-1 min-h-[320px] overflow-hidden rounded-[6px] lg:order-2 lg:min-h-[420px]">
              <Image
                src="/images/about/about-home.webp"
                alt="Customer testimonial"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/70" />
              <div className="absolute inset-0 border border-white/15" />
              <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur-sm">
                <Quote className="size-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 rounded-[6px] border border-[#efefef] bg-white p-4 shadow-sm sm:gap-6 md:gap-8">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex size-[110px] items-center justify-center rounded-full border border-[#efefef] bg-white text-[24px] font-semibold text-[#0e0e0e] shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
