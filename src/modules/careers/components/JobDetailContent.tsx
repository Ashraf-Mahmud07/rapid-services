"use client";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { useState } from "react";
import type { Job } from "../types/careers.types";
import ApplyModal from "./ApplyModal";
import JobCheckList from "./JobCheckList";

interface JobDetailContentProps {
  job: Job;
}

export default function JobDetailContent({ job }: JobDetailContentProps) {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div className="container-page mx-auto px-5 py-8 sm:px-6 lg:px-8 lg:py-12">
      {/* Top Back link */}
      <Link
        href={ROUTES.CAREER}
        className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#00A99D] transition-colors hover:text-[#008f84]"
      >
        <span>←</span> Back
      </Link>

      {/* About the role */}
      <h2 className="mb-4 text-[22px] font-semibold text-[#111827] sm:text-[24px] lg:mb-5 lg:text-[26px]">
        About the role
      </h2>
      {job.about.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-4 text-[15px] leading-relaxed text-[#374151] lg:mb-5 lg:text-[16px]"
        >
          {paragraph}
        </p>
      ))}

      {/* What you'll do */}
      <h2 className="mt-8 mb-4 text-[22px] font-bold text-[#111827] sm:text-[24px] lg:mt-10 lg:mb-5 lg:text-[26px]">
        What you&apos;ll do
      </h2>
      <JobCheckList items={job.responsibilities} className="mb-8 lg:mb-10" />

      {/* What we're looking for */}
      <h2 className="mt-8 mb-4 text-[22px] font-bold text-[#111827] sm:text-[24px] lg:mt-10 lg:mb-5 lg:text-[26px]">
        What we&apos;re looking for
      </h2>
      <JobCheckList items={job.requirements} className="mb-6 lg:mb-8" />

      {job.closingNote && (
        <p className="mt-6 mb-8 text-[14px] leading-relaxed text-[#6B7280]">{job.closingNote}</p>
      )}

      {/* Apply Now button */}
      <div>
        <button
          type="button"
          onClick={() => setApplyOpen(true)}
          className="inline-flex w-full max-w-[203px] cursor-pointer items-center justify-center rounded-full bg-[#00A99D] px-8 py-3.5 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#008f84] hover:shadow-md"
        >
          Apply Now
        </button>
      </div>

      {/* Bottom Back link */}
      <div className="mt-8">
        <Link
          href={ROUTES.CAREER}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#00A99D] transition-colors hover:text-[#008f84]"
        >
          <span>←</span> Back
        </Link>
      </div>

      <ApplyModal open={applyOpen} onOpenChange={setApplyOpen} job={job} />
    </div>
  );
}
