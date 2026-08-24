"use client";

import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/shared/utils/cn";
import { industryDetailRoute } from "@/shared/constants/routes";
import { IndustryDetailData } from "../types/industries.types";
import { ArrowRight } from "lucide-react";

interface NewIndustryCardProps {
  industry: IndustryDetailData;
}

export default function NewIndustryCard({ industry }: NewIndustryCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(industryDetailRoute(industry.id));
  };

  return (
    <div
      onClick={handleNavigate}
      className={cn(
        "group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-[#FAFAFA] transition-all hover:border-primary/40 hover:shadow-lg"
      )}
    >
      {/* Image top */}
      <div className="relative h-[240px] w-full overflow-hidden bg-gray-200">
        {industry.image && (
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
      </div>

      {/* Content bottom */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2.5 text-[20px] font-semibold tracking-tight text-gray-900">
          {industry.title}
        </h3>
        <p className="mb-6 line-clamp-2 text-[13.5px] leading-relaxed text-gray-500">
          {industry.shortDesc}
        </p>

        <div className="mt-auto flex items-center text-[13px] font-semibold text-primary transition-colors">
          Read more <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
