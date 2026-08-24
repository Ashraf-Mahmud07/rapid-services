import { StaticImageData } from "next/image";

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  review: string;
  image: string;
  companyLogo: StaticImageData;
  companyName: string;
}

export interface ReviewsData {
  title: string;
  items: ReviewItem[];
}
