"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ShareIcon from "../icons/ShareIcon";
import { Product } from "../types/product.type";
import ShareNowModal from "./ShareNowModal";

export default function ProductGridCard({ product }: { product: Product }) {
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
      className={`group relative flex flex-col rounded-xl border bg-white transition-colors duration-200 sm:rounded-2xl ${
        isShareOpen ? "border-primary" : "border-transparent hover:border-primary"
      }`}
    >
      <Link className="absolute inset-0 z-0" href={detailsUrl} />

      {/* Top Image Container */}
      <div className="xs:h-[160px] relative h-[130px] w-full overflow-hidden rounded-xl bg-[#f8f8f8] sm:h-[245px] sm:rounded-2xl">
        {/* Share Button (Always visible on mobile, hover on desktop) */}
        <button
          ref={buttonRef}
          type="button"
          onClick={handleShareClick}
          aria-label={t("shareProduct")}
          className={`absolute top-2 right-2 z-10 flex size-7 cursor-pointer items-center justify-center rounded-full shadow-sm backdrop-blur-[3px] transition-all duration-200 sm:top-5 sm:right-5 sm:size-8.5 ${
            isShareOpen
              ? "bg-[#00a79d] text-white opacity-100"
              : "bg-white/92 text-[#00a79d] opacity-100 hover:bg-[#00a79d] hover:text-white sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          <span
            aria-hidden="true"
            className="inline-flex size-3 items-center justify-center sm:size-4"
          >
            <ShareIcon />
          </span>
        </button>

        {/* Product Image */}
        <Link className="absolute inset-0" href={detailsUrl}>
          <Image
            src={product.thumb}
            alt={product.title}
            width={208}
            height={176}
            className="absolute h-full w-full object-cover transition duration-500 hover:scale-110"
          />
        </Link>

        {/* Rating Badge (Always visible on mobile, hover on desktop) */}
        <div
          className={`absolute top-2 left-2 flex h-[18px] items-center gap-0.5 rounded bg-white px-1.5 py-0.5 text-[10px] leading-none shadow-sm transition-opacity duration-200 sm:top-5 sm:left-5 sm:h-[22px] sm:gap-1 sm:rounded-md sm:px-2 sm:text-[12px] ${
            isShareOpen ? "opacity-100" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          <span className="text-[#00a79d]">★</span>
          <span className="font-medium text-[#5b5b5b]">{product.reviews?.average || "4.5"}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-2 sm:px-3.25 sm:pt-3 sm:pb-3">
        <h3 className="xs:text-sm overflow-hidden text-xs leading-tight font-medium text-ellipsis whitespace-nowrap text-black transition duration-200 sm:text-[18px] sm:leading-[normal]">
          {product.title}
        </h3>

        <p className="xs:text-xs line-clamp-2 overflow-hidden pt-1 text-[11px] leading-snug font-normal text-[#737373] transition sm:pt-1.5 sm:text-[14px] sm:leading-[normal]">
          {plainOverview}
        </p>
      </div>

      {/* Share dropdown menu container */}
      {isShareOpen && (
        <div
          ref={dropdownRef}
          className="xs:w-[300px] absolute top-[40px] -right-1 z-30 mt-1 w-[260px] max-w-[calc(100vw-16px)] animate-[fadeIn_0.15s_ease] rounded-[16px] border border-[#e5e7eb] bg-white p-3 shadow-[0px_10px_25px_rgba(0,0,0,0.15)] sm:top-[54px] sm:right-3 sm:w-[420px] sm:p-[30px]"
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
