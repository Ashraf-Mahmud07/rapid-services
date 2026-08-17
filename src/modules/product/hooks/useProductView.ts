"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products } from "../data/product.data";
import { setActiveView, setCurrentPage } from "../store/productFilterSlice";

export function useProductView() {
  const dispatch = useAppDispatch();
  const { activeView, selectedCategories, selectedRating, itemsPerPage, currentPage, isLoading } =
    useAppSelector((state) => state.productFilter);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);

    const productRating = Number(product.reviews?.average || 0);
    const requiredRating = Number(selectedRating);
    const matchesRating =
      selectedRating === "any" || isNaN(requiredRating) || productRating >= requiredRating;

    return matchesCategory && matchesRating;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleViewChange = (view: "grid" | "list") => {
    dispatch(setActiveView(view));
  };

  return {
    activeView,
    itemsPerPage,
    currentPage,
    isLoading,
    filteredProducts,
    displayedProducts,
    totalPages,
    handlePageChange,
    handleViewChange,
  };
}
