import type { Metadata } from "next";
import { BlogDetailView, getBlogById } from "@/modules/blogs";

interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);

  return {
    title: `${blog.title} | Rapid Blog`,
    description: blog.description,
  };
}

export default async function Page({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  return <BlogDetailView id={id} />;
}
