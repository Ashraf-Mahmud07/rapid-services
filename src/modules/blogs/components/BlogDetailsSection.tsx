import React from "react";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { ChevronLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Blog } from "../types/blogs.types";
import { defaultBlogDetail } from "../data/blogs.data";

interface BlogDetailsSectionProps {
  blog: Blog;
}

export function BlogDetailsSection({ blog }: BlogDetailsSectionProps) {
  const t = useTranslations("blogs");
  const contentToRender = blog.content || defaultBlogDetail.content;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container-page mx-auto">
        {/* Top Back Link */}
        <Link
          href={ROUTES.BLOG}
          className="mb-10 flex w-fit items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ChevronLeft className="h-4 w-4" />
          {t("back")}
        </Link>

        {/* Blog Content */}
        <div className="w-full">
          {contentToRender?.map((section, idx) => (
            <div key={idx} className="mb-10 md:mb-12">
              <h2 className="mb-4 text-[18px] leading-tight font-medium text-gray-900 md:mb-5 md:text-[20px]">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.text.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-[14px] leading-relaxed text-gray-500">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back Link */}
        <Link
          href={ROUTES.BLOG}
          className="mt-6 flex w-fit items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:text-primary/80 md:mt-8"
        >
          <ChevronLeft className="h-4 w-4" />
          {t("back")}
        </Link>
      </div>
    </div>
  );
}
