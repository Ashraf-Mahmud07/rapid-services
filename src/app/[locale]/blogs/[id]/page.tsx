import type { Metadata } from "next";
import { BlogDetailView, getBlogById, listBlogs, featuredBlogs } from "@/modules/blogs";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const allBlogs = [...listBlogs, ...featuredBlogs];
  const uniqueIds = Array.from(new Set(allBlogs.map((b) => b.id)));

  return routing.locales.flatMap((locale) =>
    uniqueIds.map((id) => ({
      locale,
      id,
    }))
  );
}

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
