"use client";

import { useState } from "react";

import { Button } from "@/shared/components/ui/Button";
import type { Job } from "../types/careers.types";
import ApplyModal from "./ApplyModal";
import SalaryRange from "./SalaryRange";

interface JobSidebarProps {
  job: Job;
}

export default function JobSidebar({ job }: JobSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="rounded-2xl bg-[#F6F7F8] px-5 pt-5 pb-6 lg:px-[26px] lg:pt-[26px] lg:pb-7">
      <p className="mb-1.5 text-[13px] text-[#8b9096]">Base salary range</p>
      <SalaryRange
        low={job.salaryLow}
        high={job.salaryHigh}
        symbolClassName="h-[19px] align-[-2px] me-[3px]"
        className="mb-1.5 block text-[26px] font-bold text-[#17181a]"
      />
      <p className="mb-[22px] text-[13px] text-[#8b9096]">{job.salaryNote}</p>

      <div className="flex flex-col gap-3.5 border-t border-[#E6E8EA] pt-[22px]">
        {job.meta.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4">
            <span className="text-[13px] text-[#8b9096]">{row.label}</span>
            <span className="text-end text-[13px] font-semibold text-[#2b2e31]">{row.value}</span>
          </div>
        ))}
      </div>

      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-[26px] h-auto w-full rounded-full p-3.5 text-sm font-semibold"
      >
        Apply now
      </Button>

      <ApplyModal open={open} onOpenChange={setOpen} />
    </aside>
  );
}
