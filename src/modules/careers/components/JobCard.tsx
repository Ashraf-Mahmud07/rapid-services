"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { careerDetailRoute } from "@/shared/constants/routes";
import type { Job } from "../types/careers.types";
import SalaryRange from "./SalaryRange";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const t = useTranslations("careers");

  return (
    <Link
      href={careerDetailRoute(job.slug)}
      className="flex flex-col items-start gap-4 rounded-[10px] bg-[#F6F7F7] px-5 py-5 transition-colors hover:bg-[#EFF1F1] sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6 lg:gap-6 lg:px-9 lg:py-7"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="text-[17px] font-bold text-[#17181a] sm:text-[18px] lg:text-[20px]">
            {job.title}
          </span>
          {job.isNew && (
            <span className="text-[11px] font-bold tracking-[1px] text-primary">
              {t("newBadge")}
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-[#8b9096] sm:text-sm lg:gap-4">
          <span>{job.department}</span>
          <span className="text-[#d5d8da]">|</span>
          <span>{job.location}</span>
          <span className="text-[#d5d8da]">|</span>
          <span>{job.employmentType}</span>
          <span className="text-[#d5d8da]">|</span>
          <SalaryRange low={job.salaryLow} high={job.salaryHigh} className="text-[#5a5f63]" />
        </div>
      </div>

      <span className="flex flex-none items-center gap-2 text-[15px] font-semibold whitespace-nowrap text-primary">
        {t("viewRole")}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
