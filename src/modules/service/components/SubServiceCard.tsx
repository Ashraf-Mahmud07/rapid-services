import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { SubService } from "../types/service.types";

interface SubServiceCardProps {
  subService: SubService;
  onClick: (id: string) => void;
}

export default function SubServiceCard({ subService, onClick }: SubServiceCardProps) {
  return (
    <div
      onClick={() => onClick(subService.id)}
      className="group flex h-full cursor-pointer flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:border-primary"
    >
      <div className="relative mb-4 h-[120px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-slate-50">
        {subService.image ? (
          <Image
            src={subService.image}
            alt={subService.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-50 text-gray-300">
            <span className="text-xs font-bold tracking-wider uppercase">No Image</span>
          </div>
        )}
      </div>

      <h3 className="mb-2 line-clamp-2 text-base leading-snug font-bold text-gray-900">
        {subService.title}
      </h3>

      {subService.shortDesc && (
        <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-gray-500">
          {subService.shortDesc}
        </p>
      )}

      <div className="mt-auto inline-flex items-center text-[13px] font-semibold text-primary transition-colors">
        Read more
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}
