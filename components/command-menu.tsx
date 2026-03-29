"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  LayoutDashboard,
  Search,
  Settings,
  Users,
  ClipboardList,
  Home,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const citizenRoutes = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Trámites disponibles", href: "/tramites", icon: FileText },
  { name: "Consultar folio", href: "/seguimiento", icon: Search },
];

const adminRoutes = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Gestionar trámites", href: "/admin/tramites", icon: FileText },
  {
    name: "Solicitudes recibidas",
    href: "/admin/solicitudes",
    icon: ClipboardList,
  },
  { name: "Usuarios", href: "/admin/usuarios", icon: Users },
  { name: "Configuración", href: "/admin/configuracion", icon: Settings },
];

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    []
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Buscar trámite, página o acción..." />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup heading="Ciudadano">
          {citizenRoutes.map((route) => (
            <CommandItem
              key={route.href}
              onSelect={() => runCommand(() => router.push(route.href))}
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Administración">
          {adminRoutes.map((route) => (
            <CommandItem
              key={route.href}
              onSelect={() => runCommand(() => router.push(route.href))}
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
