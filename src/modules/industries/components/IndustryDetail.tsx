"use client";

import { CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { IndustryDetailData, IndustryContentBlock } from "../types/industries.types";

interface IndustryDetailProps {
  industry: IndustryDetailData;
}

export default function IndustryDetail({ industry }: IndustryDetailProps) {
  const router = useRouter();
  const heroImage = industry.image || (industry.gallery && industry.gallery[0]);

  const handleBack = () => {
    router.push(ROUTES.INDUSTRY);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div
        onClick={handleBack}
        className="mb-8 flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to industries
      </div>

      <h2 className="mb-6 text-xl font-extrabold tracking-tight text-primary uppercase md:text-2xl">
        {industry.title}
      </h2>

      {heroImage && (
        <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl bg-gray-100 md:h-[400px] lg:h-[450px]">
          <Image src={heroImage} alt={industry.title} fill className="object-cover" priority />
        </div>
      )}

      {industry.content && industry.content.length > 0 ? (
        <div className="space-y-6">
          {industry.content.map((block: IndustryContentBlock, index: number) => {
            if (block.type === "paragraph") {
              return (
                <p key={index} className="mb-6 px-1 text-[15px] leading-relaxed text-gray-600">
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <div
                  key={index}
                  className="rounded-xl border border-transparent bg-white p-6 shadow-sm"
                >
                  {block.title && (
                    <h3 className="mb-4 text-base font-bold text-primary">{block.title}</h3>
                  )}
                  {block.text && (
                    <p className="mb-6 text-[14px] leading-relaxed text-gray-600">{block.text}</p>
                  )}
                  <ul className="space-y-4">
                    {block.items.map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary"
                          strokeWidth={2}
                        />
                        <span className="text-[14px] leading-relaxed text-gray-600">
                          {item.title && (
                            <span className="font-bold text-gray-900">{item.title}: </span>
                          )}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return null;
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-[#EBEFF0] bg-white p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-gray-600">{industry.shortDesc}</p>
        </div>
      )}

      <div className="mt-auto pt-8">
        <div
          onClick={handleBack}
          className="flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to industries
        </div>
      </div>
    </div>
  );
}
