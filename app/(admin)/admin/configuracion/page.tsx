import { Building2, Globe, Palette, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AdminConfiguracionPage() {
  return (
    <div>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Configuración</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Configuración</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Configura los datos generales del municipio y preferencias del sistema.
        </p>
      </div>

      <div className="space-y-6">
        {/* General */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center gap-2 p-4">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold">Datos del municipio</h2>
          </div>
          <Separator />
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Nombre del municipio
              </label>
              <Input defaultValue="Zapopan" className="mt-1" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Estado
              </label>
              <Input defaultValue="Jalisco" className="mt-1" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Email de contacto
              </label>
              <Input
                defaultValue="tramites@zapopan.gob.mx"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Teléfono
              </label>
              <Input defaultValue="(33) 3818-2200" className="mt-1" />
            </div>
          </div>
          <Separator />
          <div className="flex justify-end p-4">
            <Button size="sm">Guardar cambios</Button>
          </div>
        </div>

        {/* Domain */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center gap-2 p-4">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold">Dominio personalizado</h2>
          </div>
          <Separator />
          <div className="p-4">
            <div className="max-w-sm">
              <label className="text-xs font-medium text-muted-foreground">
                Subdominio
              </label>
              <div className="mt-1 flex items-center gap-1">
                <Input defaultValue="zapopan" className="flex-1" />
                <span className="text-sm text-muted-foreground">
                  .tramitezero.mx
                </span>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex justify-end p-4">
            <Button size="sm">Guardar</Button>
          </div>
        </div>

        {/* Appearance */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center gap-2 p-4">
            <Palette className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold">Apariencia</h2>
          </div>
          <Separator />
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Personaliza el logo y colores del portal ciudadano. Próximamente.
            </p>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center gap-2 p-4">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold">Notificaciones</h2>
          </div>
          <Separator />
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Configura las notificaciones por email para ciudadanos y
              funcionarios. Próximamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
