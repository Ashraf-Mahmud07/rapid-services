import type { Metadata } from "next";

import { BlogDetailsPage, blogDetailMock } from "@/modules/blogs";

export const metadata: Metadata = {
  title: `${blogDetailMock.title} | Rapid Blog`,
  description: blogDetailMock.description,
};

export default function Page() {
  return <BlogDetailsPage />;
}
