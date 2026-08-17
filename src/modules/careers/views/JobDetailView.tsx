"use client";

import JobDetailContent from "../components/JobDetailContent";
import JobDetailHero from "../components/JobDetailHero";
import JobSidebar from "../components/JobSidebar";
import { Footer, Navbar } from "@/shared/components/layout";
import { Job } from "../types/careers.types";

export interface JobDetailViewProps {
  job: Job;
}

export default function JobDetailView({ job }: JobDetailViewProps) {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <JobDetailHero title={job.title} />

      <div className="container-page grid items-start gap-10 pt-10 pb-14 sm:pt-12 lg:grid-cols-[1fr_372px] lg:gap-[clamp(40px,5.21vw,100px)] lg:pt-16 lg:pb-[90px]">
        <JobDetailContent job={job} />
        <JobSidebar job={job} />
      </div>

      <Footer />
    </div>
  );
}
