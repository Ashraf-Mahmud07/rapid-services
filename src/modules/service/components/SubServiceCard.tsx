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
      className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 flex flex-col h-full text-left"
    >
      <div className="flex flex-row items-center gap-4 mb-5">
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-xl bg-slate-50 shadow-sm border border-slate-100 flex-shrink-0">
          {subService.image ? (
            <Image 
              src={subService.image} 
              alt={subService.title}
              fill
              sizes="80px"
              placeholder="blur"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-50 text-gray-300">
              <span className="text-[10px] font-bold uppercase tracking-wider">IMG</span>
            </div>
          )}
        </div>
        
        <h3 className="text-base sm:text-[17px] font-bold text-gray-900 leading-snug line-clamp-2">{subService.title}</h3>
      </div>
      
      <div className="mt-auto inline-flex items-center text-xs sm:text-sm font-semibold text-primary transition-colors">
        Read more
        <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}
