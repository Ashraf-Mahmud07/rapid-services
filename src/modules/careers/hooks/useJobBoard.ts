"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { JOB_FILTERS, JOBS } from "../data/jobs.data";
import type { JobFilter } from "../types/careers.types";

export function useJobBoard() {
  const t = useTranslations("careers");
  const [filter, setFilter] = useState<JobFilter>("All");

  const jobs = useMemo(
    () => (filter === "All" ? JOBS : JOBS.filter((job) => job.department === filter)),
    [filter]
  );

  return {
    filter,
    setFilter,
    jobs,
    totalJobsCount: JOBS.length,
    filters: JOB_FILTERS,
    t,
  };
}
