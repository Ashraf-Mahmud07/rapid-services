export { default as ProductsView } from "./views/ProductsView";
export { default as ProductDetailView } from "./views/ProductDetailView";

export { default as NoProductFound } from "./components/NoProductFound";
export { default as ProductGridCard } from "./components/ProductGridCard";
export { default as ProductHeader } from "./components/ProductHeader";
export { default as ProductListCard } from "./components/ProductListCard";
export { default as ProductOverview } from "./components/ProductOverview";
export { default as ProductPagination } from "./components/ProductPagination";
export { default as ProductRatings } from "./components/ProductRatings";
export { default as ProductScrollspyNav } from "./components/ProductScrollspyNav";
export { default as ProductShortOverview } from "./components/ProductShortOverview";
export { default as ProductSpecifications } from "./components/ProductSpecifications";
export { default as ProductView } from "./components/ProductView";
export { default as ProductsBreadcrumb } from "./components/ProductsBreadcrumb";
export { default as ProductsFilter } from "./components/ProductsFilter";
export { default as ProductsHelp } from "./components/ProductsHelp";
export { default as RatingCard } from "./components/RatingCard";

export * from "./hooks/useProductFilter";
export * from "./hooks/useProductHeader";
export * from "./hooks/useProductView";

export {
  default as productFilterReducer,
  toggleCategory,
  setSelectedCategories,
  setSelectedRating,
  setSearchQuery,
  setItemsPerPage,
  setCurrentPage,
  setActiveView,
  setIsLoading,
  resetFilters,
} from "./store/productFilterSlice";

export * from "./data/product.data";
export * from "./data/filter.data";
export * from "./types/product.type";
export * from "./types/product-filter.types";
export * from "./constants/product.constants";
