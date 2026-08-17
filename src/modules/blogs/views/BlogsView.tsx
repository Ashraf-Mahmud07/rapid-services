"use client";

import { useTranslations } from "next-intl";
import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import HeroSection from "@/shared/components/layout/HeroSection";
import { BlogsSection } from "../components/BlogsSection";

export default function BlogsView() {
  const t = useTranslations("blogs");

  return (
    <main>
      <HeroSection
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        backgroundImage={serviceBanner}
      />
      <div className="section-background">
        <BlogsSection />
      </div>
    </main>
  );
}
