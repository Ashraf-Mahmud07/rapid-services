export default function AuthLoading() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-neutral-50">
      <div className="w-full max-w-sm rounded-lg border border-border bg-background px-8 py-10 shadow-sm">
        {/* Logo skeleton */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="h-11 w-11 animate-pulse rounded-lg bg-muted" />
          <div className="h-5 w-32 animate-pulse rounded bg-muted" />
          <div className="h-4 w-48 animate-pulse rounded bg-muted" />
        </div>
        {/* Field skeletons */}
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="h-4 w-12 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          </div>
          <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
        </div>
      </div>
    </div>
  );
}
