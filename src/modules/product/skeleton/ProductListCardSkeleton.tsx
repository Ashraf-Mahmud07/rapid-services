import { Skeleton } from "@/shared/components/ui/Skeleton";

export default function ProductListCardSkeleton() {
  return (
    <div className="flex h-30 items-center rounded-2xl border border-[#efefef] bg-white p-3 2xl:h-48.5">
      {/* Thumbnail skeleton */}
      <Skeleton className="ml-4 h-24 w-24 shrink-0 rounded-2xl 2xl:h-39.5 2xl:w-47" />

      {/* Content skeleton */}
      <div className="ml-10.5 flex min-w-0 flex-1 flex-col gap-3">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-5.5 w-16" />
      </div>
    </div>
  );
}
