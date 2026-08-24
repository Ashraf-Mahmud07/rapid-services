"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ShareIcon from "../icons/ShareIcon";
import { Product } from "../types/product.type";
import ShareNowModal from "./ShareNowModal";

export default function ProductListCard({ product }: { product: Product }) {
  const t = useTranslations("product");
  const locale = useLocale();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const detailsUrl = product.slug ? `/product/${product.slug}` : `/product/${product.id}`;
  const plainOverview = product.shortOverview?.replace(/<[^>]*>/g, "") || "";
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

  const handleMouseLeave = () => {
    if (isShareOpen) {
      setIsShareOpen(false);
    }
  };

  return (
    <article
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col items-stretch gap-3 rounded-[16px] border bg-white p-3 transition-colors duration-200 sm:flex-row sm:gap-0 sm:p-4 ${
        isShareOpen ? "border-primary" : "border-[#efefef] hover:border-primary"
      }`}
    >
      <Link className="absolute inset-0 z-0" href={detailsUrl} />

      {/* Left Image Box */}
      <div
        style={{
          width: "clamp(80px, calc(80px + 108 * (100vw - 1034px) / 365), 188px)",
          height: "clamp(80px, calc(80px + 78 * (100vw - 1034px) / 365), 158px)",
        }}
        className="relative shrink-0 overflow-hidden rounded-[15px] bg-[#f8f8f8]"
      >
        <Link className="absolute inset-0" href={detailsUrl}>
          <Image
            src={product.thumb}
            alt={product.title}
            width={178}
            height={124}
            className="absolute h-full w-full object-cover transition duration-500 hover:scale-110"
          />
        </Link>
      </div>

      {/* Right Content */}
      <div className="inset relative mr-0 ml-0 flex min-w-0 flex-1 flex-col justify-center sm:mr-2 sm:ml-6">
        {/* Top actions row (Always visible on mobile, hover on desktop) */}
        <div
          className={`absolute top-0 left-0 mt-auto mb-1 flex min-h-[28.6px] w-full items-center justify-between transition-opacity duration-200 ${
            isShareOpen ? "opacity-100" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          {/* Rating Badge */}
          <div className="flex h-[22px] items-center gap-1 rounded-[6px] bg-[#f7f7f7] px-2 py-0.5 text-[12px] leading-none shadow-xs">
            <span className="text-[#00a79d]">★</span>
            <span className="font-medium text-[#5b5b5b]">{product.reviews?.average || "4.5"}</span>
          </div>

          {/* Share Button */}
          <button
            ref={buttonRef}
            type="button"
            onClick={handleShareClick}
            aria-label={t("shareProduct")}
            className={`flex size-[28.6px] cursor-pointer items-center justify-center rounded-full backdrop-blur-[2.5px] transition-all duration-200 ${
              isShareOpen
                ? "bg-[#00a79d] text-white"
                : "bg-[#f7f7f7] text-[#00a79d] hover:bg-[#00a79d] hover:text-white"
            }`}
          >
            <span aria-hidden="true" className="inline-flex size-3.5 items-center justify-center">
              <ShareIcon />
            </span>
          </button>
        </div>

        <div className="flex w-full flex-1 flex-col justify-center self-stretch sm:self-center">
          {/* Title */}
          <h3 className="overflow-hidden text-base leading-snug font-medium tracking-[-0.3px] text-ellipsis whitespace-nowrap text-[#0e0e0e] transition duration-200 sm:text-[18px] sm:leading-[26px]">
            {product.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-2 overflow-hidden pt-1 text-xs leading-relaxed font-normal text-[#737373] transition sm:text-[14px] sm:leading-[20px]">
            {plainOverview}
          </p>
        </div>
      </div>

      {/* Share dropdown menu container */}
      {isShareOpen && (
        <div
          ref={dropdownRef}
          className="xs:w-[320px] absolute top-[48px] right-2 z-30 w-[280px] max-w-[calc(100vw-24px)] animate-[fadeIn_0.15s_ease] rounded-[16px] border border-[#e5e7eb] bg-white p-4 shadow-[0px_10px_25px_rgba(0,0,0,0.15)] sm:right-4 sm:w-[420px] sm:p-[30px]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ShareNowModal shareUrl={shareUrl} onClose={() => setIsShareOpen(false)} />
        </div>
      )}
    </article>
  );
}
