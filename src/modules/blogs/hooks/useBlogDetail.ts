"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { getBlogById } from "../data/blogs.data";
import { Blog } from "../types/blogs.types";

export interface UseBlogDetailProps {
  id?: string;
}

export function useBlogDetail({ id }: UseBlogDetailProps = {}) {
  const t = useTranslations("blogs");
  const [copied, setCopied] = useState(false);

  const blog: Blog = id ? getBlogById(id) : getBlogById("future-of-design");

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.share) {
          await navigator.share({
            title: blog.title,
            text: blog.description,
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error("Failed to share:", err);
      }
    }
  };

  return {
    t,
    blog,
    copied,
    handleShare,
  };
}
