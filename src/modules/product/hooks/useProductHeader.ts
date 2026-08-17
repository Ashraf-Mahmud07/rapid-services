"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setItemsPerPage } from "../store/productFilterSlice";
import { PAGE_OPTIONS, type PageOption } from "../constants/product.constants";

export interface UseProductHeaderProps {
  productCount?: number;
}

export function useProductHeader({ productCount }: UseProductHeaderProps = {}) {
  const t = useTranslations("product");
  const dispatch = useAppDispatch();
  const [isPageMenuOpen, setIsPageMenuOpen] = useState<boolean>(false);

  const { selectedCategories, selectedRating, itemsPerPage } = useAppSelector(
    (state) => state.productFilter
  );

  const isFiltered = selectedCategories.length > 0 || (selectedRating && selectedRating !== "any");
  const headerTitle = isFiltered ? t("filteredProducts") : t("allProducts");
  const count = productCount !== undefined ? productCount : 30;

  const handleSelectPageSize = (option: PageOption | string) => {
    dispatch(setItemsPerPage(Number(option)));
    setIsPageMenuOpen(false);
  };

  return {
    t,
    itemsPerPage,
    isPageMenuOpen,
    setIsPageMenuOpen,
    headerTitle,
    count,
    handleSelectPageSize,
    pageOptions: PAGE_OPTIONS,
  };
}
