"use client";

import { ChevronUp, Star } from "lucide-react";
import * as React from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/utils/cn";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { categoryItems, ratingItems } from "../data/filter.data";
import { resetFilters, setSelectedRating, toggleCategory } from "../productFilterSlice";
import { CategoryRowProps, StarRowProps } from "../types/product-filter.types";
import ProductsHelp from "./ProductsHelp";

export default function ProductsFilter() {
  const t = useTranslations("product");
  const dispatch = useAppDispatch();
  const { selectedCategories, selectedRating } = useAppSelector((state) => state.productFilter);

  const [categoryOpen, setCategoryOpen] = React.useState(true);
  const [ratingOpen, setRatingOpen] = React.useState(true);

  function handleCategoryChange(category: string) {
    dispatch(toggleCategory(category));
  }

  function handleRatingChange(rating: string) {
    dispatch(setSelectedRating(rating));
  }

  function handleResetAll() {
    dispatch(resetFilters());
  }

  return (
    <>
      <div className="w-full rounded-md border border-[#ececec] bg-white p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.3)]">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[18px] leading-none font-semibold text-[#0e0e0e]">{t("filters")}</h1>
          <button
            onClick={handleResetAll}
            type="button"
            className="cursor-pointer text-[13px] font-medium text-[#00a79d] transition-colors hover:text-[#008d84]"
          >
            {t("resetAll")}
          </button>
        </div>

        <div className="space-y-7">
          <section>
            <SectionHeader
              title={t("category")}
              open={categoryOpen}
              onToggle={() => setCategoryOpen((value) => !value)}
            />

            {categoryOpen && (
              <div className="mt-4 space-y-3.5">
                {categoryItems.map((item) => (
                  <CategoryRow
                    key={item.label}
                    item={item}
                    isSelected={selectedCategories.includes(item.label)}
                    onSelect={handleCategoryChange}
                  />
                ))}
              </div>
            )}
          </section>

          <div className="h-px bg-[#f2f2f2]" />

          <section>
            <SectionHeader
              title={t("rating")}
              open={ratingOpen}
              onToggle={() => setRatingOpen((value) => !value)}
            />

            {ratingOpen && (
              <div className="mt-4 space-y-3.5">
                {ratingItems.map((item) => (
                  <StarRow
                    key={item.value}
                    item={item}
                    isSelected={selectedRating === item.value}
                    onSelect={handleRatingChange}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
      <ProductsHelp />
    </>
  );
}

function SectionHeader({
  title,
  open,
  onToggle,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between text-left"
      aria-expanded={open}
    >
      <span className="text-[12px] font-semibold tracking-[1.2px] text-[#737373] uppercase">
        {title}
      </span>
      <ChevronUp
        className={cn("size-5 text-[#9a9a9a] transition-transform", !open && "rotate-180")}
      />
    </button>
  );
}

function CategoryRow({ item, isSelected, onSelect }: CategoryRowProps) {
  return (
    <label
      onClick={() => onSelect(item.label)}
      className="flex cursor-pointer items-center justify-between gap-3 text-[15px]"
    >
      <span className="flex min-w-0 items-center gap-3 text-[#D8D8D8]">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-5 place-items-center rounded-[6px] border",
            isSelected ? "border border-primary text-primary" : "border-[#d8d8d8]"
          )}
        >
          {isSelected && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
        </span>
        <span className="truncate font-medium text-[#5B5B5B]">{item.label}</span>
      </span>
      <span className="shrink-0 text-[13px] text-[#BBBBBB]">{item.count}</span>
    </label>
  );
}

function StarRow({ item, isSelected, onSelect }: StarRowProps) {
  const t = useTranslations("product");
  const ratingNum = Number.parseInt(item.value, 10);

  return (
    <label
      onClick={() => onSelect(item.value)}
      className="flex cursor-pointer items-center justify-between gap-3 text-[15px]"
    >
      <span className="flex min-w-0 items-center gap-3 text-[#5b5b5b]">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-5 place-items-center rounded-full border",
            isSelected ? "border border-primary text-primary" : "border-[#d8d8d8]"
          )}
        >
          {isSelected && <span className="size-2.5 rounded-full bg-primary" />}
        </span>
        <span className="flex items-center gap-1.5 truncate font-medium">
          {item.value === "any" ? (
            t("anyRating")
          ) : (
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "size-4",
                    i < ratingNum
                      ? "fill-[#fa5b05] text-[#fa5b05]"
                      : "fill-[#e5e7eb] text-[#e5e7eb]"
                  )}
                />
              ))}
            </span>
          )}
        </span>
      </span>
    </label>
  );
}
