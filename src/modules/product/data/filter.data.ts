import { CategoryItem, RatingItem } from "../types/product-filter.types";

export const categoryItems: CategoryItem[] = [
  { label: "Technology", count: 5 },
  { label: "Gear", count: 4 },
  { label: "Accessory", count: 3 },
  { label: "Laptop", count: 2 },
  { label: "Mobile", count: 4 },
  { label: "Airpod", count: 4 },
  { label: "Earphone", count: 4 },
  { label: "Phone", count: 4 },
];

export const ratingItems: RatingItem[] = [
  { value: "any", label: "Any rating" },
  { value: "5", label: "5" },
  { value: "4", label: "4" },
  { value: "3", label: "3" },
  { value: "2", label: "2" },
  { value: "1", label: "1" },
];
