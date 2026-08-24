import Image from "next/image";

import { Link } from "@/i18n/navigation";
import whyChooseUsMain from "../assets/images/why-choose-us-main.jpg";
import whyChooseUsVideo from "../assets/images/why-choose-us-video.jpg";
import { whyChooseUsData } from "../data/whyChooseUs.data";
import PlayIcon from "../icons/PlayIcon";
import WhyChooseUsCheckIcon from "../icons/WhyChooseUsCheckIcon";

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Column: Visual Showcase */}
          <div className="relative mx-auto w-full max-w-[620px] pb-10 sm:pb-12 lg:max-w-none lg:pb-0">
            {/* Main Arch-top Image */}
            <div className="relative aspect-[688/474] max-h-[474px] w-full overflow-hidden rounded-tl-[160px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] shadow-sm sm:rounded-tl-[200px] md:rounded-tl-[240px]">
              <Image
                src={whyChooseUsMain}
                alt="Engineers inspecting architectural drawings on construction site"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Video Thumbnail Overlay with Play Icon */}
            <div className="group absolute right-2 -bottom-4 h-[175px] w-[175px] cursor-pointer overflow-hidden rounded-[24px] border-[5px] border-white bg-neutral-900 shadow-2xl sm:right-6 sm:-bottom-8 sm:h-[215px] sm:w-[215px] sm:border-[6px] md:right-8 md:-bottom-10 md:h-[238px] md:w-[238px] lg:-right-4 lg:-bottom-6 xl:-right-6 xl:-bottom-8">
              <Image
                src={whyChooseUsVideo}
                alt="Modern skyscraper under construction"
                fill
                sizes="240px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#00A79D]/30 text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <PlayIcon className="h-7 w-7 translate-x-0.5 fill-white text-white sm:h-8 sm:w-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Features */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="inline-block h-[2px] w-7 rounded-full bg-primary" />
              <span className="text-[12px] font-bold tracking-[1.5px] text-[#737373] uppercase sm:text-[13px]">
                {whyChooseUsData.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] leading-[1.2] font-bold tracking-tight text-primary sm:text-[38px] lg:text-[42px]">
              {whyChooseUsData.title}
            </h2>

            {/* Features List */}
            <div className="mt-8 divide-y divide-[#EFEFEF] border-y border-[#EFEFEF]">
              {whyChooseUsData.features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4 py-5 sm:gap-5 sm:py-6">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] bg-primary text-white shadow-sm">
                    <WhyChooseUsCheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[18px] leading-snug font-bold text-[#0E0E0E] sm:text-[20px]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-[#737373]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href={whyChooseUsData.cta.href}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
              >
                <span>{whyChooseUsData.cta.label}</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
