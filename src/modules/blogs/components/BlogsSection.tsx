"use client";

import { useState } from "react";
import { useBlogs } from "../hooks/useBlogs";
import { Mail, ArrowRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { Pagination } from "@/shared/components/ui/Pagination";

const CATEGORIES = [
  "All Categories",
  "Inspection",
  "Force & Torque",
  "Process Control Instrumentation",
  "Electrical & Electronics",
  "Laboratories",
  "Mechanical & Inspection Equipment",
  "Force & Torque",
  "Process Control Instrumentation",
  "Electrical & Electronics",
];

export function BlogsSection() {
  const { featuredBlogs, listBlogs } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Combine all blogs to feed the new unified grid design
  const allBlogs = [...featuredBlogs, ...listBlogs];
  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);
  const displayedBlogs = allBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] xl:gap-12">
          {/* LEFT SIDEBAR */}
          <div className="flex flex-col gap-8">
            {/* Categories Widget */}
            <div className="overflow-hidden rounded-xl bg-[#F8F8F8] pb-6">
              <div className="bg-[#D8FFFD] px-6 py-5">
                <h3 className="text-[18px] font-bold text-primary">Categories</h3>
              </div>
              <div className="px-6 pt-6">
                <div className="flex custom-scrollbar max-h-[600px] flex-col gap-2 overflow-y-auto pr-2">
                  {CATEGORIES.map((category, idx) => {
                    const isActive = category === "All Categories"; // Default active state
                    return (
                      <button
                        key={idx}
                        className={`flex w-full cursor-pointer items-center rounded-lg px-5 py-3.5 text-left text-[13px] font-bold transition-all ${
                          isActive
                            ? "bg-primary text-white shadow-sm"
                            : "bg-white text-primary hover:bg-gray-50"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Widget */}
            <div className="flex flex-col items-center rounded-xl bg-primary p-8 text-center shadow-sm">
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <Mail className="size-5 text-primary" />
              </div>
              <h3 className="mb-6 text-[16px] leading-relaxed font-bold text-white">
                We are always available to discuss with you
              </h3>
              <a
                href="mailto:info@majokaengineering.com"
                className="mb-8 text-[13px] font-medium text-white/90 hover:text-white"
              >
                info@majokaengineering.com
              </a>
              <Link
                href={ROUTES.CONTACT}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-bold text-primary transition-all hover:bg-gray-50"
              >
                Contact Us <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className="flex flex-col">
            {/* Blog Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:gap-8">
              {displayedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={allBlogs.length}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              className="mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
