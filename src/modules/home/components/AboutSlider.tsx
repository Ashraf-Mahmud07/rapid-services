"use client";
import Image from "next/image";
import { useState } from "react";
import { sliderItems } from "../data/about.data";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

export default function AboutSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swipeStart, setSwipeStart] = useState<number | null>(null);

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? sliderItems.length - 1 : current - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current === sliderItems.length - 1 ? 0 : current + 1));
  };

  const handlePointerUp = (clientX: number) => {
    if (swipeStart === null) return;

    const swipeDistance = clientX - swipeStart;

    if (Math.abs(swipeDistance) > 48) {
      if (swipeDistance > 0) {
        goToPreviousSlide();
      } else {
        goToNextSlide();
      }
    }

    setSwipeStart(null);
  };

  return (
    <div className="flex w-full max-w-[702px] shrink-0 flex-col gap-4 lg:w-1/2">
      <div
        className="relative aspect-[702/511] w-full overflow-hidden rounded-[6px] bg-[#f8f8f8]"
        onPointerDown={(event) => setSwipeStart(event.clientX)}
        onPointerUp={(event) => handlePointerUp(event.clientX)}
        onPointerCancel={() => setSwipeStart(null)}
      >
        {sliderItems.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={item.title}
            className={`object-cover transition-opacity duration-300 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-[14px]">
          <div className="flex items-center gap-[6px]" aria-label="About slider progress">
            {sliderItems.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Go to ${item.title}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-[6px] rounded-[99px] transition-all ${
                  index === activeSlide ? "w-[26px] bg-[#00a79d]" : "w-[6px] bg-[#e5e7eb]"
                }`}
              />
            ))}
          </div>
          <p className="truncate text-[14px] leading-normal font-normal text-[#737373]">
            {sliderItems[activeSlide].title}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPreviousSlide}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#0E0E0E] transition transition-colors duration-200 hover:border-[#00a79d] hover:bg-[#00a79d] hover:text-white focus-visible:ring-2 focus-visible:ring-[#00a79d]/30 focus-visible:outline-none"
          >
            <LeftArrowIcon className="size-4.5 transition duration-200" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNextSlide}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#0E0E0E] transition transition-colors duration-200 hover:border-[#00a79d] hover:bg-[#00a79d] hover:text-white focus-visible:ring-2 focus-visible:ring-[#00a79d]/30 focus-visible:outline-none"
          >
            <RightArrowIcon className="size-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
