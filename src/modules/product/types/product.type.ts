export interface ReviewUser {
  name: string;
  avatar: string;
}

export interface ProductReviewItem {
  count: number;
  isVerified: boolean;
  date: string;
  user: ReviewUser;
  text?: string;
}

export interface ProductReviews {
  average: string;
  reviewList: ProductReviewItem[];
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  thumb: string;
  title: string;
  slug: string;
  category: string;
  reviews: ProductReviews;
  shortOverview: string;
  overview: string;
  specifications: ProductSpecification[];
}
export interface NoProductFoundProps {
  className?: string;
  onGoBack?: () => void;
}
