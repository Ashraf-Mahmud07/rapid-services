"use client";

import CareersHero from "../components/CareersHero";
import JobDetailContent from "../components/JobDetailContent";
import { Footer, Navbar } from "@/shared/components/layout";
import type { Job } from "../types/careers.types";

export interface JobDetailViewProps {
  job: Job;
}

export default function JobDetailView({ job }: JobDetailViewProps) {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <CareersHero />
      <JobDetailContent job={job} />
      <Footer />
    </div>
  );
}
