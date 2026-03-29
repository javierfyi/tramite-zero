import { Plus, MoreHorizontal, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { mockTramites, getStatusLabel, getStatusVariant } from "@/lib/mock-data";

export default function AdminTramitesPage() {
  return (
    <div className="animate-page-enter">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Trámites</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Trámites</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Gestiona los tipos de trámite disponibles para ciudadanos.
          </p>
        </div>
        <Button size="sm">
          <Plus className="mr-1.5 h-4 w-4" />
          Nuevo trámite
        </Button>
      </div>

      <div className="rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                  Nombre
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground sm:table-cell">
                  Categoría
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                  Estado
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground md:table-cell">
                  Solicitudes
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground md:table-cell">
                  Costo
                </th>
                <th className="w-10 px-4 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {mockTramites.map((tramite) => (
                <tr
                  key={tramite.id}
                  className="border-b last:border-b-0 transition-colors hover:bg-muted/50"
                >
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{tramite.name}</p>
                        <p className="text-xs text-muted-foreground sm:hidden">
                          {tramite.category}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground sm:table-cell">
                    {tramite.category}
                  </td>
                  <td className="px-4 py-2.5">
                    <Badge
                      variant={getStatusVariant(tramite.status)}
                      className="text-[10px]"
                    >
                      {getStatusLabel(tramite.status)}
                    </Badge>
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground md:table-cell">
                    {tramite.submissions}
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground md:table-cell">
                    ${tramite.cost.toLocaleString("es-MX")}
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
