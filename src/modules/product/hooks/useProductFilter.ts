"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetFilters, setSelectedRating, toggleCategory } from "../store/productFilterSlice";
import { categoryItems, ratingItems } from "../data/filter.data";

export function useProductFilter() {
  const t = useTranslations("product");
  const dispatch = useAppDispatch();
  const { selectedCategories, selectedRating } = useAppSelector((state) => state.productFilter);

  const [categoryOpen, setCategoryOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);

  const handleCategoryChange = (category: string) => {
    dispatch(toggleCategory(category));
  };

  const handleRatingChange = (rating: string) => {
    dispatch(setSelectedRating(rating));
  };

  const handleResetAll = () => {
    dispatch(resetFilters());
  };

  return {
    t,
    selectedCategories,
    selectedRating,
    categoryOpen,
    setCategoryOpen,
    ratingOpen,
    setRatingOpen,
    handleCategoryChange,
    handleRatingChange,
    handleResetAll,
    categoryItems,
    ratingItems,
  };
}
