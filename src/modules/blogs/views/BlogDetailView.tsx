"use client";

import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import { BlogDetailsHero } from "../components/BlogDetailsHero";
import { BlogDetailsSection } from "../components/BlogDetailsSection";
import { useBlogDetail } from "../hooks/useBlogDetail";

export interface BlogDetailViewProps {
  id?: string;
}

export default function BlogDetailView({ id }: BlogDetailViewProps) {
  const { blog, handleShare, copied } = useBlogDetail({ id });

  return (
    <main className="bg-white">
      <BlogDetailsHero
        title={blog.title}
        subtitle={blog.description}
        backgroundImage={blog.image}
        onShare={handleShare}
        copied={copied}
      />
      <BlogDetailsSection blog={blog} />
    </main>
  );
}
