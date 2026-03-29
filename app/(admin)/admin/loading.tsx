import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
  return (
    <div>
      <Skeleton className="h-6 w-40" />
      <Skeleton className="mt-2 h-4 w-64" />
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-lg" />
        ))}
      </div>
      <Skeleton className="mt-6 h-64 w-full rounded-lg" />
    </div>
  );
}
