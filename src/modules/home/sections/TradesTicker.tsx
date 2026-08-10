"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

/**
 * The pale mint strip under the hero. Trades alternate between ink and brand
 * teal, separated by teal dots, and the rail fades out at both edges so the
 * list reads as continuous. Arrows scroll it; on touch it scrolls directly.
 */
const TRADES = [
  "Electrical",
  "Plumbing",
  "Painting",
  "Cleaning",
  "Repairs",
  "Heating & Cooling",
  "Electrical",
  "Plumbing",
  "Painting",
];

export default function TradesTicker() {
  const railRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-brand-tint">
      <div className="container-page flex items-center gap-4 py-5">
        <button
          type="button"
          aria-label="Previous trades"
          onClick={() => scrollBy(-1)}
          className="flex size-9 flex-none items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
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
                  <span aria-hidden="true" className="flex-none text-primary">
                    •
                  </span>
                )}
                <span
                  className={`flex-none text-[17px] font-medium whitespace-nowrap sm:text-[19px] ${
                    index % 2 === 0 ? "text-primary" : "text-ink"
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
          className="flex size-9 flex-none items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronRight className="size-4" strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
