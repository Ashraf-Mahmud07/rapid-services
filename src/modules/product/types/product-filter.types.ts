export interface CategoryItem {
  label: string;
  count: number;
}

export interface RatingItem {
  value: string;
  label: string;
}

export interface ProductFilterType {
  categoryItems: CategoryItem[];
  ratingItems: RatingItem[];
}
export interface CategoryRowProps {
  item: CategoryItem;
  isSelected: boolean;
  onSelect: (category: string) => void;
}

export interface StarRowProps {
  item: RatingItem;
  isSelected: boolean;
  onSelect: (rating: string) => void;
}
