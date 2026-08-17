"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/store/hooks";
import { setSelectedCategories } from "../store/productFilterSlice";
import { Product } from "../types/product.type";

export default function ProductsBreadcrumb({ product }: { product?: Product }) {
  const t = useTranslations("product");
  const dispatch = useAppDispatch();
  const categoryName = product?.category;

  const displayCategory = categoryName || "Technology";

  const handleCategoryClick = () => {
    if (categoryName) {
      dispatch(setSelectedCategories([categoryName]));
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex h-4 items-center overflow-hidden text-[13px] leading-none font-normal whitespace-nowrap text-[#737373]"
    >
      <Link href="/product" className="transition-colors hover:text-primary hover:underline">
        {t("home")}
      </Link>
      <span aria-hidden="true" className="mx-3.5 text-[#d8d8d8]">
        /
      </span>
      {categoryName ? (
        <Link
          href="/product"
          onClick={handleCategoryClick}
          className="transition-colors hover:text-primary hover:underline"
        >
          {displayCategory}
        </Link>
      ) : (
        <span>{displayCategory}</span>
      )}
      <span aria-hidden="true" className="mx-[14px] text-[#d8d8d8]">
        /
      </span>
      <span className="text-[#0e0e0e]">{product?.title || t("productDetails")}</span>
    </nav>
  );
}
