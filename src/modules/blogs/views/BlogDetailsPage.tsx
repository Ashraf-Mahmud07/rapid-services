import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import { BlogDetailsHero } from "../components/BlogDetailsHero";
import { BlogDetailsSection } from "../components/BlogDetailsSection";
import { blogDetailMock } from "../constants/mock-blogs";

export function BlogDetailsPage() {
  // In a real application, you would fetch the blog based on the [id] param here or via RTK query.
  // For now, we just use the mocked data.
  const blog = blogDetailMock;

  return (
    <main className="bg-white">
      <BlogDetailsHero
        title={blog.title}
        subtitle={blog.description}
        backgroundImage={serviceBanner}
      />
      <BlogDetailsSection blog={blog} />
    </main>
  );
}
