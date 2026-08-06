import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JobDetailContent, JobDetailHero, JobSidebar, getJobBySlug } from "@/modules/careers";
import { Footer, Navbar } from "@/shared/components/layout";

interface CareerDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) return { title: "Role not found | Rapid" };

  return {
    title: `${job.title} | Rapid Careers`,
    description: job.about[0],
  };
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

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
