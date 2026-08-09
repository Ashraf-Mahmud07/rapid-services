import { Skeleton } from "@/shared/components/ui/Skeleton";

export default function ProductGridCardSkeleton() {
  return (
    <div className="flex h-89 flex-col rounded-2xl border border-[#efefef] bg-white p-3">
      {/* Image container skeleton */}
      <div className="relative h-[236px] w-full overflow-hidden rounded-2xl bg-[#f8f8f8]">
        <Skeleton className="absolute top-2.25 right-2.5 size-8.5 rounded-full" />
        <Skeleton className="absolute bottom-3 left-3 h-5.5 w-14 rounded-md" />
        <Skeleton className="absolute top-1/2 left-1/2 h-44 w-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl" />
      </div>

      {/* Title skeleton */}
      <Skeleton className="mt-auto h-5 w-3/4" />

      {/* Overview skeleton */}
      <div className="mt-2 space-y-1.5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
