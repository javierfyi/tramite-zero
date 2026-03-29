import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { mockTramites, getStatusLabel, getStatusVariant } from "@/lib/mock-data";

export default function TramitesPage() {
  const published = mockTramites.filter((t) => t.status === "PUBLISHED");

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Trámites disponibles
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Selecciona el trámite que necesitas realizar. Municipio de Zapopan,
          Jalisco.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {published.map((tramite) => (
          <Link
            key={tramite.id}
            href={`/tramites/${tramite.id}`}
            className="group flex flex-col rounded-lg border bg-card p-4 transition-colors duration-150 hover:bg-accent/30"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium group-hover:text-foreground">
                  {tramite.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {tramite.description}
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <Badge variant={getStatusVariant(tramite.status)} className="text-[10px]">
                {getStatusLabel(tramite.status)}
              </Badge>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {tramite.estimatedDays} días
              </span>
              <span className="inline-flex items-center gap-1">
                <DollarSign className="h-3 w-3" />$
                {tramite.cost.toLocaleString("es-MX")}
              </span>
              <span className="text-muted-foreground/70">
                {tramite.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
