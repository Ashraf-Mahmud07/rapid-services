"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import ShareIcon from "../icons/ShareIcon";
import { Product } from "../types/product.type";
import ShareNowModal from "./ShareNowModal";

export default function ProductShortOverview({ product }: { product: Product }) {
  const t = useTranslations("product");
  const locale = useLocale();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const ratingAvg = product.reviews?.average || "4.5";
  const reviewCount = product.reviews?.reviewList?.length || 0;
  const detailsUrl = product.slug ? `/product/${product.slug}` : `/product/${product.id}`;
  const shareUrl =
    typeof window !== "undefined" ? `${window.location.origin}/${locale}${detailsUrl}` : detailsUrl;

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsShareOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isShareOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsShareOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShareOpen]);

  return (
    <section className="flex min-w-0 flex-1 items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <p className="text-[12px] leading-3.75 font-semibold tracking-[0.12em] text-[#00a79d] uppercase">
          {product.category || "AUDIO"}
        </p>

        <h2 className="xs:text-[26px] mt-1 text-[22px] leading-snug font-semibold tracking-[-0.039em] text-[#0e0e0e] sm:mt-2 sm:text-[34px] sm:leading-[46.2px]">
          {product.title}
        </h2>

        <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
          <span className="text-[13px] leading-none tracking-[2px] text-[#fa5b05] sm:text-[15px]">
            ★★★★★
          </span>
          <p className="text-[13px] leading-none text-[#737373] sm:text-[14px]">
            {ratingAvg}{" "}
            <span className="text-[#bbb]">{t("reviewsCount", { count: reviewCount })}</span>
          </p>
        </div>

        <div
          className="mt-3 space-y-3 text-[14px] leading-relaxed text-[#5b5b5b] sm:mt-4 sm:space-y-4 sm:text-[16px] sm:leading-[27.2px]"
          dangerouslySetInnerHTML={{ __html: product.shortOverview }}
        />
      </div>

      <div className="relative mt-3 shrink-0 sm:mt-6">
        <button
          ref={buttonRef}
          type="button"
          onClick={handleShareClick}
          aria-label={t("shareProduct")}
          className={`flex size-9 cursor-pointer items-center justify-center rounded-full backdrop-blur-[2.529px] transition-all duration-200 sm:size-[42px] ${
            isShareOpen
              ? "bg-[#00a79d] text-white"
              : "bg-[#f8f8f8] text-[#0e0e0e] hover:bg-[#00a79d] hover:text-white"
          }`}
        >
          <span
            aria-hidden="true"
            className="inline-flex size-4 items-center justify-center sm:size-5"
          >
            <ShareIcon />
          </span>
        </button>

        {isShareOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full right-0 z-30 mt-2 w-[300px] max-w-[calc(100vw-24px)] animate-[fadeIn_0.15s_ease] rounded-[16px] border border-[#e5e7eb] bg-white p-4 shadow-[0px_10px_25px_rgba(0,0,0,0.15)] sm:w-[420px] sm:p-[30px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ShareNowModal shareUrl={shareUrl} onClose={() => setIsShareOpen(false)} />
          </div>
        )}
      </div>
    </section>
  );
}
