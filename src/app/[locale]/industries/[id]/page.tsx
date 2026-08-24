import { Metadata } from "next";
import IndustryDetailsPage from "@/modules/industries/views/IndustryDetailsPage";
import { getIndustryById } from "@/modules/industries/constants/mock-industries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = getIndustryById(resolvedParams.id);

  if (!industry) {
    return {
      title: "Industry Not Found | Rapid",
    };
  }

  return {
    title: `${industry.title} | Rapid Industries`,
    description: industry.shortDesc || industry.title,
  };
}

export default async function IndustryRoutePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const resolvedParams = await params;
  return <IndustryDetailsPage industryId={resolvedParams.id} />;
}
