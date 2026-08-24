import { Skeleton } from "@/shared/components/ui/Skeleton";

export default function ProductListCardSkeleton() {
  return (
    <div className="flex items-center rounded-[16px] border border-[#efefef] bg-white p-4">
      {/* Thumbnail skeleton */}
      <Skeleton className="h-[158px] w-[188px] shrink-0 rounded-[15px]" />

      {/* Content skeleton */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-2 pr-2 pl-6">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
