"use client";

import { useMemo, useState } from "react";

import { cn } from "@/shared/utils/cn";
import { JOB_FILTERS, JOBS } from "../data/jobs.data";
import type { JobFilter } from "../types/careers.types";
import JobCard from "./JobCard";

export default function JobBoard() {
  const [filter, setFilter] = useState<JobFilter>("All");

  const jobs = useMemo(
    () => (filter === "All" ? JOBS : JOBS.filter((job) => job.department === filter)),
    [filter]
  );

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#EAEBED] pb-5 lg:pb-[26px]">
        <div>
          <h2 className="relative pl-3.5 text-[26px] leading-tight font-bold text-[#17181a] before:absolute before:top-1 before:bottom-1 before:left-0 before:w-[3.5px] before:rounded-full before:bg-primary sm:text-[30px] lg:text-[34px]">
            All Jobs
          </h2>
          <p className="mt-1 text-sm text-[#8b9096] lg:text-[15px]">{JOBS.length} roles open</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {JOB_FILTERS.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setFilter(name)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 sm:px-5 lg:px-6 lg:py-2.5 lg:text-[15px]",
                name === filter ? "bg-primary text-white" : "bg-[#F1F2F3] text-[#5a5f63]"
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 lg:mt-[30px] lg:gap-4">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    </>
  );
}
