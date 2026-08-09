import { StaticImageData } from "next/image";

export interface Blog {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  isFeatured?: boolean;
  content?: {
    heading: string;
    text: string[];
  }[];
}
