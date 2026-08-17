"use client";

import { useTranslations } from "next-intl";
import { featuredBlogs, listBlogs } from "../data/blogs.data";

export function useBlogs() {
  const t = useTranslations("blogs");

  return {
    t,
    featuredBlogs,
    listBlogs,
  };
}
