import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { blogDetailRoute } from "@/shared/constants/routes";
import { ArrowRight } from "lucide-react";
import { Blog } from "../types/blogs.types";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={blogDetailRoute(blog.id)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#EDE8E9] bg-[#F8F8F8] transition-all hover:border-gray-300"
    >
      <div className="p-4 pb-3 sm:p-5 sm:pb-4">
        <div className="relative aspect-[1.66] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-5 sm:px-5">
        <h3 className="mb-2 line-clamp-2 text-[16px] leading-snug font-bold text-[#2A2A2A] transition-colors group-hover:text-primary sm:text-[17px]">
          {blog.title}
        </h3>
        <p className="mb-5 line-clamp-3 flex-1 text-[13px] leading-relaxed text-gray-500">
          {blog.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[13px] font-bold text-primary transition-colors">
            Read more <ArrowRight className="size-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-[12px] text-[#7A7A7A]">{blog.date}</span>
        </div>
      </div>
    </Link>
  );
}
