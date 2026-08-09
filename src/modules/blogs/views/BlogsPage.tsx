import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
import { BlogsSection } from "../components/BlogsSection";

export function BlogsPage() {
  return (
    <main>
      <HeroSection
        title="Our articles and news"
        subtitle="Explore our latest articles, industry insights, product updates, and company news. Stay informed with valuable resources, expert knowledge, and the latest developments from our team."
        backgroundImage={serviceBanner}
      />
      <BlogsSection />
    </main>
  );
}
