import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_RATING_FILTER,
  DEFAULT_VIEW_MODE,
} from "../constants/product.constants";

export interface ProductFilterState {
  selectedCategories: string[];
  selectedRating: string;
  searchQuery: string;
  itemsPerPage: number;
  currentPage: number;
  activeView: "grid" | "list";
  isLoading: boolean;
}

const initialState: ProductFilterState = {
  selectedCategories: [],
  selectedRating: DEFAULT_RATING_FILTER,
  searchQuery: "",
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  currentPage: DEFAULT_CURRENT_PAGE,
  activeView: DEFAULT_VIEW_MODE,
  isLoading: false,
};

export const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const index = state.selectedCategories.indexOf(category);
      if (index >= 0) {
        state.selectedCategories.splice(index, 1);
      } else {
        state.selectedCategories.push(category);
      }
      state.currentPage = DEFAULT_CURRENT_PAGE;
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
      state.currentPage = DEFAULT_CURRENT_PAGE;
    },
    setSelectedRating: (state, action: PayloadAction<string>) => {
      state.selectedRating = action.payload;
      state.currentPage = DEFAULT_CURRENT_PAGE;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = DEFAULT_CURRENT_PAGE;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = DEFAULT_CURRENT_PAGE;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setActiveView: (state, action: PayloadAction<"grid" | "list">) => {
      state.activeView = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategories = [];
      state.selectedRating = DEFAULT_RATING_FILTER;
      state.searchQuery = "";
      state.currentPage = DEFAULT_CURRENT_PAGE;
    },
  },
});

export const {
  toggleCategory,
  setSelectedCategories,
  setSelectedRating,
  setSearchQuery,
  setItemsPerPage,
  setCurrentPage,
  setActiveView,
  setIsLoading,
  resetFilters,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;
