import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobDetailView, getJobBySlug, JOBS } from "@/modules/careers";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const uniqueSlugs = Array.from(new Set(JOBS.map((j) => j.slug)));

  return routing.locales.flatMap((locale) =>
    uniqueSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

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

  return <JobDetailView job={job} />;
}
