import type { Metadata } from "next";

import { BlogsPage } from "@/modules/blogs";

export const metadata: Metadata = {
  title: "Blogs | Rapid",
  description:
    "Explore our latest articles, industry insights, product updates, and company news from our team.",
};

export default function Page() {
  return <BlogsPage />;
}
