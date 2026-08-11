"use client";

import { Link } from "@/i18n/navigation";
import { blogDetailRoute } from "@/shared/constants/routes";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { featuredBlogs, listBlogs } from "../constants/mock-blogs";

export function BlogsSection() {
  const t = useTranslations("blogs");

  return (
    <div className="bg-[#f8f9fa] pt-16 pb-24">
      <div className="container-page">
        {/* Featured Blogs */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {featuredBlogs.map((blog) => (
            <Link
              href={blogDetailRoute(blog.id)}
              key={blog.id}
              className="group flex cursor-pointer flex-col"
            >
              <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[16/9]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase">
                  {t("featured")}
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-wide text-gray-500 uppercase">
                <span className="text-primary">{blog.category}</span>
                <span>•</span>
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="mb-3 text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-primary md:text-2xl">
                {blog.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-[15px]">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Blog List Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 md:text-[28px]">{t("blogList")}</h2>
        </div>

        {/* Blog List Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {listBlogs.map((blog) => (
            <Link
              href={blogDetailRoute(blog.id)}
              key={blog.id}
              className="group flex cursor-pointer items-start gap-4 rounded-xl border border-transparent bg-white p-4 transition-shadow hover:border-gray-100 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] md:gap-5"
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg md:h-32 md:w-32">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 py-1">
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-gray-500 uppercase md:gap-2 md:text-[11px]">
                  <span className="text-primary">{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h4 className="mb-2 line-clamp-2 text-[15px] leading-snug font-bold text-gray-900 transition-colors group-hover:text-primary md:text-[17px]">
                  {blog.title}
                </h4>
                <p className="line-clamp-2 text-[13px] leading-relaxed text-gray-500 md:text-[14px]">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
