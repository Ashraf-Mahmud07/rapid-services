import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  selectedRating: "any",
  searchQuery: "",
  itemsPerPage: 20,
  currentPage: 1,
  activeView: "grid",
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
      state.currentPage = 1;
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
      state.currentPage = 1;
    },
    setSelectedRating: (state, action: PayloadAction<string>) => {
      state.selectedRating = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
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
      state.selectedRating = "any";
      state.searchQuery = "";
      state.currentPage = 1;
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
