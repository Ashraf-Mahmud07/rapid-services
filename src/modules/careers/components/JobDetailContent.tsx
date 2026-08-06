import type { Job } from "../types/careers.types";
import JobCheckList from "./JobCheckList";

interface JobDetailContentProps {
  job: Job;
}

export default function JobDetailContent({ job }: JobDetailContentProps) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-[#17181a] lg:mb-[22px] lg:text-2xl">
        About the role
      </h2>
      {job.about.map((paragraph, index) => (
        <p
          key={paragraph}
          className={
            index === job.about.length - 1
              ? "mb-8 text-[15px] leading-[1.75] text-[#4a4d50] lg:mb-[52px]"
              : "mb-4 text-[15px] leading-[1.75] text-[#4a4d50] lg:mb-[22px]"
          }
        >
          {paragraph}
        </p>
      ))}

      <h2 className="mb-3 text-xl font-bold text-[#17181a] lg:mb-[18px] lg:text-2xl">
        What you&apos;ll do
      </h2>
      <JobCheckList items={job.responsibilities} className="mb-8 lg:mb-[52px]" />

      <h2 className="mb-3 text-xl font-bold text-[#17181a] lg:mb-[18px] lg:text-2xl">
        What we&apos;re looking for
      </h2>
      <JobCheckList items={job.requirements} className="mb-6 lg:mb-[34px]" />

      <p className="text-[15px] leading-[1.7] text-[#7c8288]">{job.closingNote}</p>
    </div>
  );
}
