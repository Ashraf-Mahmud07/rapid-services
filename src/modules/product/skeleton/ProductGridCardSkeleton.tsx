import { Skeleton } from "@/shared/components/ui/Skeleton";

export default function ProductGridCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#efefef] bg-white sm:rounded-[16px]">
      {/* Image container skeleton */}
      <div className="xs:h-[160px] relative h-[130px] w-full bg-[#f8f8f8] sm:h-[245px]">
        <Skeleton className="absolute top-2 right-2 size-7 rounded-full sm:top-5 sm:right-5 sm:size-[34px]" />
        <Skeleton className="absolute top-2 left-2 h-[18px] w-10 rounded sm:top-5 sm:left-5 sm:h-[22px] sm:w-14 sm:rounded-[6px]" />
      </div>

      {/* Content skeleton */}
      <div className="flex flex-col gap-1.5 p-2 sm:gap-2 sm:px-3.25 sm:pt-3 sm:pb-3">
        <Skeleton className="h-4 w-3/4 sm:h-5" />
        <Skeleton className="h-3 w-full sm:h-4" />
        <Skeleton className="h-3 w-2/3 sm:h-4" />
      </div>
    </div>
  );
}
