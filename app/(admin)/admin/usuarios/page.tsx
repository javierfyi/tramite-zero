import { Plus, MoreHorizontal, Shield } from "lucide-react";
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
import { mockUsers } from "@/lib/mock-data";

const roleLabelMap: Record<string, string> = {
  ADMIN: "Administrador",
  OFFICER: "Funcionario",
  CITIZEN: "Ciudadano",
  SUPER_ADMIN: "Super Admin",
};

const roleVariantMap: Record<
  string,
  "default" | "secondary" | "info" | "warning"
> = {
  ADMIN: "default",
  OFFICER: "info",
  CITIZEN: "secondary",
  SUPER_ADMIN: "warning",
};

export default function AdminUsuariosPage() {
  return (
    <div className="animate-page-enter">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Usuarios</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Usuarios</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Gestiona usuarios y funcionarios del municipio.
          </p>
        </div>
        <Button size="sm">
          <Plus className="mr-1.5 h-4 w-4" />
          Invitar usuario
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
                  Email
                </th>
                <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                  Rol
                </th>
                <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground md:table-cell">
                  Departamento
                </th>
                <th className="w-10 px-4 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-b-0 transition-colors hover:bg-muted/50"
                >
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-medium shrink-0">
                        {user.name
                          .split(" ")
                          .filter(
                            (w) =>
                              !["Lic.", "Arq.", "C.P.", "Ing."].includes(w)
                          )
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground sm:hidden">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground sm:table-cell">
                    {user.email}
                  </td>
                  <td className="px-4 py-2.5">
                    <Badge
                      variant={roleVariantMap[user.role] || "secondary"}
                      className="text-[10px]"
                    >
                      <Shield className="mr-1 h-3 w-3" />
                      {roleLabelMap[user.role]}
                    </Badge>
                  </td>
                  <td className="hidden px-4 py-2.5 text-sm text-muted-foreground md:table-cell">
                    {user.department}
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
