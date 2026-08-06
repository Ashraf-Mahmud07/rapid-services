"use client";

import { useState } from "react";

import { cn } from "@/shared/utils/cn";
import { FAQ_LEFT, FAQ_RIGHT } from "../data/contact.data";
import type { FaqItem } from "../types/contact.types";

interface FaqColumnProps {
  items: FaqItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}

function FaqColumn({ items, openId, onToggle }: FaqColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-xl transition-colors duration-150",
              isOpen ? "bg-[#E9F6F3]" : "bg-[#F5F6F7]"
            )}
          >
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-4 text-start lg:gap-4 lg:px-5.5 lg:py-5"
            >
              <span className="text-[15px] font-semibold text-[#17181a] lg:text-base">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex size-6.5 flex-none items-center justify-center rounded-full",
                  isOpen ? "bg-primary" : "bg-[#e7e9eb]"
                )}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isOpen ? "#fff" : "#8b9096"}
                  strokeWidth="2.4"
                >
                  <path
                    d={isOpen ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p
                id={`faq-answer-${item.id}`}
                className="px-4 pb-4 text-sm leading-[1.6] text-[#5a5f63] lg:px-5.5 lg:pb-5.5 lg:text-[15px]"
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface FaqSectionProps {
  /** Where "Ask us something else" points. Defaults to the form on the contact page. */
  askHref?: string;
}

export default function FaqSection({ askHref = "#contact-form" }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_LEFT[0].id);

  const onToggle = (id: string) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="mt-14 mb-16 sm:mt-16 sm:mb-20 lg:mt-20 lg:mb-24">
      <div className="mb-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:mb-7.5">
        <h2 className="text-[28px] font-bold text-[#17181a] sm:text-[34px] lg:text-[40px]">FAQ</h2>
        <a href={askHref} className="text-sm text-primary underline lg:text-[15px]">
          Ask us something else
        </a>
      </div>
      <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-5.5">
        <FaqColumn items={FAQ_LEFT} openId={openId} onToggle={onToggle} />
        <FaqColumn items={FAQ_RIGHT} openId={openId} onToggle={onToggle} />
      </div>
    </section>
  );
}
