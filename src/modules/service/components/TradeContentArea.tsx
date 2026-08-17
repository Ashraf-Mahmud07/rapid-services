"use client";

import { useEffect, useRef } from "react";
import type { TradeContent } from "../types/service.types";
import SubServiceGrid from "./SubServiceGrid";
import SubServiceDetail from "./SubServiceDetail";

interface TradeContentAreaProps {
  activeData: TradeContent;
  activeItem: string | null;
  onItemChange: (itemId: string | null) => void;
}

export default function TradeContentArea({ activeData, activeItem, onItemChange }: TradeContentAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeItem && scrollRef.current) {
      // Small timeout ensures the DOM updates with the detail page before we try to scroll
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    }
  }, [activeItem]);

  // Try to find the selected sub-service (if any)
  const activeSubService = activeData.subServices?.find((sub) => sub.id === activeItem);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 bg-white p-6 md:p-8 lg:p-10 relative overflow-y-auto hide-scrollbar rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl border-t border-gray-100 lg:border-t-0"
    >
      {!activeSubService && (
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="inline-block h-6 w-1 rounded-sm bg-primary"></span>
            {activeData.title}
          </h2>
          {activeData.badge && (
            <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-500">
              {activeData.badge}
            </span>
          )}
        </div>
      )}

      {activeSubService ? (
        <SubServiceDetail 
          subService={activeSubService} 
          onBack={() => onItemChange(null)} 
        />
      ) : activeData.subServices?.length > 0 ? (
        <SubServiceGrid 
          subServices={activeData.subServices} 
          onCardClick={onItemChange} 
        />
      ) : (
        <div className="py-10 text-center text-gray-500">
          More details coming soon.
        </div>
      )}
    </div>
  );
}
