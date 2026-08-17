import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { FINISHED_PROJECTS_STACKED, FINISHED_PROJECTS_TALL } from "../data/home.data";
import type { HomeFinishedProject } from "../types/home.types";

function Card({ job, tall }: { job: HomeFinishedProject; tall?: boolean }) {
  return (
    <article
      className={`group relative isolate overflow-hidden rounded-xl ${
        tall ? "min-h-75 lg:min-h-105" : "min-h-50"
      }`}
    >
      <Image
        src={job.image}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,12,16,0.15)_0%,rgba(8,12,16,0.45)_55%,rgba(8,12,16,0.86)_100%)]"
      />

      <span className="absolute top-4 right-4 rounded-md bg-white/85 px-2.5 py-1 text-[10.5px] font-bold tracking-[0.09em] text-ink uppercase">
        {job.pill}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
        <h3
          className={`font-semibold text-white ${tall ? "text-[19px] lg:text-[21px]" : "text-[16px]"}`}
        >
          {job.title}
        </h3>
        <p className="mt-1.5 max-w-[46ch] text-[13.5px] leading-[1.55] text-white/80">{job.body}</p>
      </div>
    </article>
  );
}

export default function FinishedProjects() {
  return (
    <section className="relative isolate overflow-hidden py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 section-background bg-cover opacity-30"
      />

      <div className="container-page grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 className="text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Finished <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.7] text-body-soft">
            Every job closes with a photo report — this is a live sample from the crew&apos;s
            schedule, not a portfolio shoot.
          </p>
          <Link
            href={ROUTES.PROJECT}
            className="mt-7 inline-flex h-11 items-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            View More
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Card job={FINISHED_PROJECTS_TALL} tall />
          <div className="grid gap-5">
            {FINISHED_PROJECTS_STACKED.map((job) => (
              <Card key={job.title} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
