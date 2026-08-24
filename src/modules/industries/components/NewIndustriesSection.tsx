"use client";

import Image from "next/image";
import projects1 from "@/shared/assets/png/projects1.jpg";
import { cn } from "@/shared/utils/cn";
import { industryCards } from "../constants/mock-industries";

export default function NewIndustriesSection() {
  return (
    <div className="container-page py-10 md:py-16">
      <div className="relative flex h-[820px] flex-col overflow-hidden rounded-3xl bg-[#f8f9fa] p-6 lg:p-10">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 mb-2 bg-[#f8f9fa] pb-6">
          <h2 className="flex items-center border-l-[3px] border-primary pl-4 text-2xl font-bold text-gray-900">
            Industries We Serve
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="custom-scrollbar flex-1 overflow-y-auto pr-4">
          <div className="grid gap-6 md:grid-cols-2">
            {industryCards.map((card, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex h-[199px] overflow-hidden rounded-xl border border-transparent bg-white transition-all hover:border-primary hover:shadow-md"
                )}
              >
                {/* Image side */}
                <div className="relative w-[160px] shrink-0 bg-gray-200">
                  <Image src={projects1} alt={card.title} fill className="object-cover" />
                </div>

                {/* Content side */}
                <div className="flex flex-1 flex-col justify-center p-4 lg:p-5">
                  <h3 className="mb-1.5 text-[16px] font-bold text-gray-900">{card.title}</h3>
                  <p className="line-clamp-6 text-[13px] leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
