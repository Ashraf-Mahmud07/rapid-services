"use client";

import { cn } from "@/shared/utils/cn";
import { useMemo, useState } from "react";
import { industryCards, industryCategories } from "../constants/mock-industries";
import NewIndustryCard from "./NewIndustryCard";

export default function NewIndustriesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [{ id: "all", title: "All" }, ...industryCategories];

  const filteredIndustries = useMemo(() => {
    if (activeTab === "all") {
      return industryCards.slice(0, 9);
    }
    const category = industryCategories.find((c) => c.id === activeTab);
    return category ? category.industries : [];
  }, [activeTab]);

  return (
    <div className="container-page bg-white py-10 md:py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="text-[28px] font-bold text-primary md:text-[32px]">Industry</h2>
        <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-gray-500">
          Explore industry-specific solutions designed to simplify operations, improve efficiency,
          and keep every project running smoothly.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-10 flex w-full justify-center">
        <div className="hide-scrollbar flex w-full max-w-fit items-center justify-start gap-1 overflow-x-auto rounded-full bg-[#f8f9fa] p-1.5 md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-medium whitespace-nowrap transition-all",
                activeTab === category.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {filteredIndustries.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIndustries.map((industry, idx) => (
            <NewIndustryCard key={`${industry.id}-${idx}`} industry={industry} />
          ))}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-xl bg-[#f8f9fa] text-sm text-gray-500">
          No industries found for this category.
        </div>
      )}
    </div>
  );
}
