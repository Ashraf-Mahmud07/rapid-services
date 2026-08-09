"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Product } from "../types/product.type";
import ShareIcon from "../icons/ShareIcon";

export default function ProductGridCard({ product }: { product: Product }) {
  const t = useTranslations("product");
  const detailsUrl = product.slug ? `/product/${product.slug}` : `/product/${product.id}`;
  const plainOverview = product.shortOverview?.replace(/<[^>]*>/g, "") || "";

  return (
    <article className="group relative flex h-89 flex-col rounded-2xl border border-[#efefef] bg-white p-3 transition duration-200 hover:bg-primary">
      <Link className="absolute inset-0 z-0" href={detailsUrl} />
      <div className="relative h-[236px] overflow-hidden rounded-2xl bg-[#f8f8f8]">
        <button
          type="button"
          aria-label={t("shareProduct")}
          className="group absolute top-2.25 right-2.5 z-10 inline-flex size-8.5 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#1F1F1F] transition duration-200 hover:bg-primary hover:text-white"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <span aria-hidden="true" className="inline-flex size-4 items-center justify-center">
            <ShareIcon />
          </span>
        </button>

        <Link className="absolute inset-0" href={detailsUrl}>
          <Image
            src={product.thumb}
            alt={product.title}
            width={208}
            height={176}
            className="absolute top-1/2 left-1/2 h-44 w-52 -translate-x-1/2 -translate-y-1/2 object-contain transition duration-500 hover:scale-110"
          />
        </Link>

        <div className="absolute bottom-3 left-3 rounded-md bg-white px-2.25 py-0.75 text-[12px] leading-none">
          <div className="flex items-center gap-3.5">
            <span className="text-[12px] leading-none font-normal text-primary">★</span>
            <span className="text-[12px] leading-none font-medium text-[#5b5b5b]">
              {product.reviews?.average || "4.5"}
            </span>
          </div>
        </div>
      </div>

      <h3 className="mt-auto overflow-hidden text-[16px] leading-5 font-semibold text-ellipsis whitespace-nowrap text-[#0e0e0e] transition duration-200 group-hover:text-white">
        {product.title}
      </h3>

      <p className="line-clamp-2 overflow-hidden pt-2 text-[14px] leading-5.25 font-normal text-[#737373] transition group-hover:text-white">
        {plainOverview}
      </p>
    </article>
  );
}
