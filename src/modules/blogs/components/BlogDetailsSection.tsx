import React from "react";
import Image from "next/image";
import { Blog } from "../types/blogs.types";

interface BlogDetailsSectionProps {
  blog: Blog;
}

export function BlogDetailsSection({ blog }: BlogDetailsSectionProps) {
  return (
    <div className="relative overflow-hidden bg-[#f8f9fa] pb-24 md:bg-white">
      {/* Decorative background swoosh - mostly visible on large screens */}
      <div className="pointer-events-none absolute right-0 bottom-0 hidden h-3/4 w-3/4 rounded-tl-[100px] bg-gradient-to-tl from-gray-50/80 to-transparent md:block" />

      <div className="relative z-10 container-page pt-12 md:pt-16">
        {/* Large Feature Image */}
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 md:mb-16 md:aspect-[2/1]">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
        </div>

        {/* Blog Content */}
        <div className="mt-12 w-full md:mt-16">
          {blog.content?.map((section, idx) => (
            <div key={idx} className="mb-10 md:mb-12">
              <h2 className="mb-4 text-[22px] leading-tight font-bold text-gray-900 md:mb-6 md:text-[26px]">
                {section.heading}
              </h2>
              <div className="space-y-4 md:space-y-5">
                {section.text.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-[15px] leading-relaxed text-gray-500 md:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
