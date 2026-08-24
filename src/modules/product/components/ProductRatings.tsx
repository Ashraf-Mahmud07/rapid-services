"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Product } from "../types/product.type";
import RatingCard from "./RatingCard";

function VerifiedBadge() {
  const t = useTranslations("product");
  return (
    <span className="inline-flex h-6 items-center rounded-[6px] border border-[#bae0de] bg-[#effffe] px-2.5 text-[11px] font-semibold tracking-[0.66px] text-[#00a79d] uppercase">
      {t("verified")}
    </span>
  );
}

export default function ProductRatings({ product }: { product?: Product }) {
  const t = useTranslations("product");
  const [visibleCount, setVisibleCount] = useState<number>(2);

  const reviewList = product?.reviews?.reviewList || [];

  const visibleReviews = reviewList.slice(0, visibleCount);
  const hasMore = visibleCount < reviewList.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <section className="flex flex-col gap-4" id="product-ratings">
      <h2 className="text-[22px] leading-tight font-semibold tracking-[-0.02em] text-[#0e0e0e] sm:text-[28px] sm:leading-9">
        {t("ratings")}
      </h2>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,486px)_minmax(0,1fr)] lg:gap-22">
        <RatingCard product={product} />

        <div className="flex flex-col gap-4">
          {visibleReviews.map((review, idx) => {
            const initials = review.user?.name
              ? review.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
              : "U";

            return (
              <article
                key={idx}
                className="rounded-[10px] border border-[#f2f2f2] bg-[#f8f8f8] p-4 sm:p-7"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.75">
                    <span
                      aria-hidden="true"
                      className="inline-flex text-[14px] tracking-[0.19em] text-[#fa5b05] select-none"
                    >
                      {"★".repeat(Math.round(review.count || 5))}
                    </span>
                    {review.isVerified && <VerifiedBadge />}
                  </div>

                  {review.text ? (
                    <p className="text-[15px] leading-6 text-[#1c1c1c]">{review.text}</p>
                  ) : (
                    <p className="text-[15px] leading-6 text-[#1c1c1c]">{t("defaultReviewText")}</p>
                  )}

                  <div className="flex items-center gap-3">
                    {review.user?.avatar ? (
                      <Image
                        src={review.user.avatar}
                        alt={review.user.name || "User"}
                        width={38}
                        height={38}
                        className="size-9.5 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex size-9.5 items-center justify-center rounded-full border border-[#c9c9c9] bg-white text-[13px] font-semibold text-[#737373]">
                        {initials}
                      </div>
                    )}

                    <div className="flex flex-col justify-center">
                      <p className="text-[14px] leading-none font-semibold text-[#0e0e0e]">
                        {review.user?.name}
                      </p>
                      <p className="mt-1 text-[12px] leading-none text-[#737373]">{review.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {hasMore && (
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="cursor-pointer text-[16px] leading-5 font-medium text-[#0e0e0e] underline decoration-from-font underline-offset-2 transition-colors hover:text-primary"
              >
                {t("loadMore")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
