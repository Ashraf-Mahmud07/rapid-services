"use client";

import { Link } from "@/i18n/navigation";
import { careerDetailRoute } from "@/shared/constants/routes";
import type { Job } from "../types/careers.types";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={careerDetailRoute(job.slug)}
      className="group flex flex-col items-start gap-4 rounded-[12px] bg-[#F8F9FA] px-6 py-5 transition-all hover:bg-[#F3F4F6] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 lg:px-9 lg:py-6.5"
    >
      <div className="min-w-0">
        <h3 className="text-[18px] leading-snug font-semibold text-[#111827] transition-colors group-hover:text-[#00A99D] sm:text-[19px] lg:text-[20px]">
          {job.title}
        </h3>
        <div className="mt-2.5 flex flex-wrap items-center gap-2.5 text-[13.5px] text-[#6B7280] sm:text-[14px] lg:gap-3">
          <span>{job.department}</span>
          <span className="text-[#D1D5DB]">|</span>
          <span>{job.location}</span>
          <span className="text-[#D1D5DB]">|</span>
          <span>{job.employmentType}</span>
        </div>
      </div>

      <span className="flex flex-none items-center gap-1.5 text-[14px] font-semibold text-[#00A99D] transition-colors group-hover:text-[#008f84]">
        View details
        <svg
          className="size-4 flex-none transition-transform group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8H13.5M13.5 8L8.75 3.25M13.5 8L8.75 12.75"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
