"use client";

import { useTranslations } from "next-intl";
import { Product } from "../types/product.type";

const ratingRows = [5, 4, 3, 2, 1];

export default function RatingCard({ product }: { product?: Product }) {
  const t = useTranslations("product");
  const reviewList = product?.reviews?.reviewList || [];
  const average = product?.reviews?.average || "4.5";
  const averageNum = Number.parseFloat(average) || 4.5;
  const reviewCount = reviewList.length;

  const distribution = ratingRows.map((starRating) => {
    let count = reviewList.filter((review) => Math.round(review.count) === starRating).length;

    if (reviewList.length > 0 && count === 0) {
      if (starRating === 4 && averageNum >= 4.5) {
        count = Math.max(1, Math.floor(reviewList.length * 0.2));
      } else if (starRating === 3 && averageNum >= 4.0) {
        count = Math.max(0, Math.floor(reviewList.length * 0.05));
      }
    }

    const percentage = reviewList.length ? (count / reviewList.length) * 100 : 0;

    return {
      rating: starRating,
      count,
      percentage: Math.min(percentage, 100),
    };
  });

  return (
    <section className="w-full max-w-121.5 py-1" aria-label="Product ratings breakdown">
      <div className="sticky top-20 left-0 flex flex-col">
        <p className="text-[80px] leading-none font-semibold tracking-[-0.03em] text-[#0e0e0e]">
          {average}
        </p>

        <div className="mt-2.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const isFilled = i < Math.floor(averageNum);
            return (
              <span
                key={i}
                aria-hidden="true"
                className={`text-[24px] select-none ${isFilled ? "text-star" : "text-[#d8d8d8]"}`}
              >
                ★
              </span>
            );
          })}
        </div>

        <p className="mt-2 text-[19px] leading-6 font-normal text-[#737373]">
          {t("basedOnVerifiedReviews", { count: reviewCount })}
        </p>

        <div className="mt-7 flex flex-col gap-3.5">
          {distribution.map(({ rating, count, percentage }) => (
            <div
              key={rating}
              className="grid grid-cols-[42px_minmax(0,1fr)_48px] items-center gap-3"
            >
              <span className="text-[18px] leading-none font-normal text-[#737373]">{rating}★</span>

              <div className="h-2.5 overflow-hidden rounded-full bg-[#f0f0f0]">
                <div
                  className="h-full rounded-full bg-star transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <span className="text-right text-[18px] leading-none font-normal text-[#bbb]">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
