"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { TRADES } from "../data/home.data";

export default function TradesTicker() {
  const railRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="mt-12 border-y border-[#D8F3F0] bg-[#EBF9F8] lg:mt-[110px]">
      <div className="container-page flex items-center gap-4 py-8">
        <button
          type="button"
          aria-label="Previous trades"
          onClick={() => scrollBy(-1)}
          className="flex size-9 flex-none cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition-all duration-200 hover:bg-primary hover:text-white active:scale-95"
        >
          <ChevronLeft className="size-4" strokeWidth={2.2} />
        </button>

        <div className="relative min-w-0 flex-1">
          <div
            ref={railRef}
            className="hide-scrollbar flex items-center gap-7 overflow-x-auto scroll-smooth sm:gap-9"
            style={{
              maskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
              WebkitMaskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
            }}
          >
            {TRADES.map((trade, index) => (
              <React.Fragment key={`${trade}-${index}`}>
                {index > 0 && (
                  <span aria-hidden="true" className="flex-none text-lg text-primary">
                    •
                  </span>
                )}
                <span
                  className={`flex-none text-[16px] font-semibold whitespace-nowrap sm:text-[18px] ${
                    index % 2 === 0 ? "text-primary" : "text-[#0E0E0E]"
                  }`}
                >
                  {trade}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next trades"
          onClick={() => scrollBy(1)}
          className="flex size-9 flex-none cursor-pointer items-center justify-center rounded-full border border-primary text-primary transition-all duration-200 hover:bg-primary hover:text-white active:scale-95"
        >
          <ChevronRight className="size-4" strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
