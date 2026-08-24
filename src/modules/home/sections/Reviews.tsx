"use client";

import Image from "next/image";
import { useState } from "react";

import { reviewsData } from "../data/reviews.data";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(3);
  const totalReviews = reviewsData.items.length;
  const currentReview = reviewsData.items[activeIndex] ?? reviewsData.items[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  // 7 visible logo slots with the active item fixed in the center (slot index 3, offset 0)
  const slotOffsets = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-[24px] bg-[#0B2C4D] shadow-2xl">
          <div className="grid min-h-[499px] grid-cols-1 lg:grid-cols-[40%_60%] xl:grid-cols-[42%_58%]">
            {/* Left Column: Photographic Portrait */}
            <div className="relative min-h-[380px] w-full bg-[#E5E7EB] sm:min-h-[460px] lg:min-h-[499px]">
              <Image
                src={currentReview.image}
                alt={currentReview.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>

            {/* Right Column: Testimonial & Client Badges */}
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14">
              <div>
                {/* Quote Mark Emblem */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="inline-block h-6 w-2 -skew-x-[16deg] rounded-[2px] bg-white" />
                  <span className="inline-block h-6 w-2 -skew-x-[16deg] rounded-[2px] bg-white" />
                </div>

                {/* Heading */}
                <h2 className="mt-3 text-[26px] font-bold tracking-tight text-white sm:text-[30px] lg:text-[34px]">
                  {reviewsData.title}
                </h2>

                {/* Quote Body */}
                <p className="mt-4 text-[14.5px] leading-[1.75] font-normal text-white/85 italic sm:text-[15.5px] lg:text-[16px]">
                  &ldquo;{currentReview.review}&rdquo;
                </p>
              </div>

              {/* Author Info & Navigation Controls */}
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div>
                  <h3 className="text-[17px] font-bold text-white sm:text-[18px]">
                    {currentReview.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-semibold tracking-[1.2px] text-white/70 uppercase sm:text-[12px]">
                    {currentReview.role}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-transparent text-white/80 transition-all duration-200 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md active:scale-95 sm:h-10 sm:w-10"
                  >
                    <LeftArrowIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next review"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-transparent text-white/80 transition-all duration-200 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md active:scale-95 sm:h-10 sm:w-10"
                  >
                    <RightArrowIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Circular Client Logos: Fixed Center Active Ring with Rotating Images */}
              <div className="mt-8 hide-scrollbar flex items-center justify-start gap-2.5 overflow-x-auto pt-4 pb-2 sm:gap-4 lg:justify-between">
                {slotOffsets.map((offset) => {
                  const targetIndex = (activeIndex + offset + totalReviews * 100) % totalReviews;
                  const item = reviewsData.items[targetIndex];
                  const isCenter = offset === 0;

                  if (!item) return null;

                  return (
                    <button
                      key={`${item.id}-${offset}`}
                      type="button"
                      onClick={() => setActiveIndex(targetIndex)}
                      aria-label={`View review from ${item.companyName}`}
                      className={`relative flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 ${
                        isCenter
                          ? "h-[74px] w-[74px] border-[3px] border-primary shadow-xl sm:h-[84px] sm:w-[84px] lg:h-[92px] lg:w-[92px]"
                          : "h-[54px] w-[54px] opacity-90 shadow-md hover:scale-105 hover:opacity-100 sm:h-[64px] sm:w-[64px] lg:h-[72px] lg:w-[72px]"
                      }`}
                    >
                      {isCenter && (
                        <span
                          className="absolute -top-2.5 left-1/2 -translate-x-1/2 border-r-[8px] border-b-[9px] border-l-[8px] border-r-transparent border-b-primary border-l-transparent"
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative flex h-full w-full items-center justify-center p-2.5 sm:p-3">
                        <Image
                          src={item.companyLogo}
                          alt={item.companyName}
                          className={`max-h-4.5 w-auto object-contain transition-opacity sm:max-h-5 lg:max-h-6 ${
                            isCenter ? "opacity-100" : "opacity-75"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
