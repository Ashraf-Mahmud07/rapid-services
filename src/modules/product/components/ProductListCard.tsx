"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Product } from "../types/product.type";

const shareIcon = "/shareIcon.svg";

export default function ProductListCard({ product }: { product: Product }) {
  const t = useTranslations("product");
  const detailsUrl = product.slug ? `/product/${product.slug}` : `/product/${product.id}`;

  return (
    <article className="group relative flex h-30 items-center rounded-2xl border border-[#efefef] bg-white transition duration-300 hover:bg-primary 2xl:h-48.5">
      <Link href={detailsUrl} className="absolute inset-0 z-0 h-full w-full" />
      <div className="ml-4 h-24 w-24 overflow-hidden rounded-2xl bg-[#f8f8f8] 2xl:h-39.5 2xl:w-47">
        <Link
          href={detailsUrl}
          className="relative block h-full w-full overflow-hidden transition duration-500 hover:scale-110"
        >
          <Image
            alt={product.title}
            src={product.thumb}
            fill
            className="object-cover object-center"
          />
        </Link>
      </div>

      <div className="ml-10.5 flex min-w-0 flex-1 flex-col gap-3">
        <h3 className="text-[20px] leading-6.5 font-semibold tracking-[-0.3px] text-[#0e0e0e] transition duration-200 group-hover:text-white">
          {product.title}
        </h3>

        <div className="flex items-center">
          <div className="flex h-5.5 items-center gap-2 rounded-md bg-[#f6f6f6] px-2.25 text-[12px] leading-none">
            <span className="font-normal text-primary">★</span>
            <span className="font-medium text-[#5b5b5b]">{product.reviews?.average || "4.5"}</span>
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center">
        <div className="h-full w-px bg-[#f2f2f2] sm:h-40.5" />

        <button
          type="button"
          aria-label={t("shareProduct")}
          className="absolute top-2.5 left-2.5 z-10 flex size-7.25 items-center justify-center rounded-full bg-[#f8f8f8] backdrop-blur-[2px] 2xl:static 2xl:mx-6.25"
        >
          <Image alt="" src={shareIcon} width={14} height={14} className="block max-w-none" />
        </button>
      </div>
    </article>
  );
}
