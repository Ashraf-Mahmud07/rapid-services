"use client";

import Image from "next/image";
import * as React from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";

type Project = { category: string; title: string; image: string };

const PROJECTS: Project[] = [
  {
    category: "Plumbing",
    title: "Leaking cistern and full bathroom reseal",
    image: "/images/projects/pipework-repair.jpg",
  },
  {
    category: "Cleaning",
    title: "Move-out deep clean, two-bed apartment",
    image: "/images/projects/move-out-clean.jpg",
  },
  {
    category: "Electrical",
    title: "Consumer unit upgrade and RCD test",
    image: "/images/projects/consumer-unit-upgrade.jpg",
  },
  {
    category: "Plumbing",
    title: "Shower tray reseal and valve replacement",
    image: "/images/projects/bathroom-reseal.jpg",
  },
  {
    category: "Cleaning",
    title: "Post-handover deep clean, three-bed villa",
    image: "/images/projects/deep-clean-tall.jpg",
  },
  {
    category: "Electrical",
    title: "Distribution board rewire and certification",
    image: "/images/projects/panel-rewire.jpg",
  },
];

const PER_PAGE = 3;
const PAGES = Math.ceil(PROJECTS.length / PER_PAGE);

export default function OngoingProjects() {
  const [page, setPage] = React.useState(0);
  const visible = PROJECTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="relative isolate overflow-hidden py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 section-background bg-cover opacity-30"
      />

      <div className="container-page grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 className="text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Ongoing Projects
          </h2>
          <p className="mt-4 text-[14px] leading-[1.7] text-body-soft">
            We take pride in offering you the best services available, backed by full documentation
            on every job.
          </p>
          <p className="mt-5 text-[14px] leading-[1.7] text-body-soft">
            Every visit is carried out by a licensed technician and signed off in writing before we
            leave site.
          </p>
          <Link
            href={ROUTES.PROJECT}
            className="mt-7 inline-flex h-11 items-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            View More
          </Link>
        </div>

        <div>
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => (
              <li key={project.title}>
                <article className="group relative isolate aspect-square overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                    className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,12,16,0)_45%,rgba(8,12,16,0.82)_100%)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 text-[15px] leading-[1.35] font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {PAGES > 1 && (
            <div className="mt-7 flex items-center justify-center gap-2">
              {Array.from({ length: PAGES }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show projects ${index + 1} of ${PAGES}`}
                  aria-current={index === page ? "true" : undefined}
                  onClick={() => setPage(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    index === page ? "w-6 bg-primary" : "w-1.5 bg-[#c7cdd1] hover:bg-[#9aa0a6]"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
