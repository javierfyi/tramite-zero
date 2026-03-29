import { MoreHorizontal, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  mockSubmissions,
  getStatusLabel,
  getStatusVariant,
} from "@/lib/mock-data";

export default function AdminSolicitudesPage() {
  return (
    <div className="animate-page-enter">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Solicitudes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tight">Solicitudes</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Revisa y gestiona las solicitudes de trámites de ciudadanos.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input placeholder="Buscar por folio o nombre..." className="sm:max-w-xs" />
        <Button variant="outline" size="sm">
          <Filter className="mr-1.5 h-3.5 w-3.5" />
          Filtros
        </Button>
      </div>

      <div className="rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                  Folio
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                  Trámite
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground sm:table-cell">
                  Solicitante
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground md:table-cell">
                  Categoría
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                  Estado
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground md:table-cell">
                  Fecha
                </th>
                <th className="w-10 px-4 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {mockSubmissions.map((sub) => (
                <tr
                  key={sub.id}
                  className="border-b last:border-b-0 transition-colors hover:bg-muted/50 cursor-pointer"
                >
                  <td className="px-4 py-2.5">
                    <span className="font-mono text-xs">{sub.folio}</span>
                  </td>
                  <td className="px-4 py-2.5 text-sm">{sub.tramiteName}</td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground sm:table-cell">
                    {sub.citizenName}
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground md:table-cell">
                    {sub.category}
                  </td>
                  <td className="px-4 py-2.5">
                    <Badge
                      variant={getStatusVariant(sub.status)}
                      className="text-[10px]"
                    >
                      {getStatusLabel(sub.status)}
                    </Badge>
                  </td>
                  <td className="hidden px-4 py-2.5 text-xs text-muted-foreground md:table-cell">
                    {new Date(sub.submittedAt).toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-2.5">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
