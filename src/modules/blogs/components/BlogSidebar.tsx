import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES, blogDetailRoute } from "@/shared/constants/routes";
import { listBlogs } from "../data/blogs.data";

export function BlogSidebar() {
  // Grab the first 5 blogs for the "More Insights" section
  const insights = listBlogs.slice(0, 5);

  return (
    <aside className="flex flex-col gap-10">
      {/* More Insights Section */}
      <div>
        <h3 className="mb-6 flex items-center border-l-[3px] border-primary pl-3 text-[18px] font-bold text-gray-900">
          MORE INSIGHTS
        </h3>
        <div className="flex flex-col gap-6">
          {insights.map((blog) => (
            <Link
              key={blog.id}
              href={blogDetailRoute(blog.id)}
              className="group flex items-start gap-4"
            >
              <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="mb-1 text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
                  {blog.category}
                </span>
                <h4 className="mb-1.5 line-clamp-2 text-[13px] leading-snug font-semibold text-gray-900 transition-colors group-hover:text-primary">
                  {blog.title}
                </h4>
                <span className="text-[10px] font-medium text-gray-400 uppercase">{blog.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="flex flex-col items-center rounded-xl bg-primary p-8 text-center text-white shadow-lg">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm">
          <Mail className="h-6 w-6" />
        </div>
        <h4 className="mb-4 text-[16px] leading-snug font-bold md:text-[18px]">
          We are always available to
          <br />
          discuss with you
        </h4>
        <a
          href="mailto:info@majokaengineering.com"
          className="mb-8 text-[14px] font-medium transition-opacity hover:opacity-80"
        >
          info@majokaengineering.com
        </a>
        <Link
          href={ROUTES.CONTACT}
          className="flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-primary transition-transform"
        >
          Contact Us
          <ArrowRight className="pointer-events-none h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
