"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Bell,
  ClipboardList,
  Menu,
  Search,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const sidebarNav = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Trámites", href: "/admin/tramites", icon: FileText },
  {
    name: "Solicitudes",
    href: "/admin/solicitudes",
    icon: ClipboardList,
    badge: 47,
  },
  { name: "Usuarios", href: "/admin/usuarios", icon: Users },
  { name: "Notificaciones", href: "/admin/notificaciones", icon: Bell },
];

const bottomNav = [
  { name: "Configuración", href: "/admin/configuracion", icon: Settings },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-12 items-center px-4">
        <Link
          href="/admin"
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-xs font-bold">TZ</span>
          </div>
          <span className="text-sm font-semibold">Trámite Zero</span>
        </Link>
      </div>

      <Separator />

      {/* Search trigger */}
      <div className="px-3 py-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-muted-foreground"
          size="sm"
          onClick={onNavigate}
        >
          <Search className="h-4 w-4" />
          <span className="text-xs">Buscar...</span>
          <kbd className="ml-auto pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-0.5 px-3 py-1">
        {sidebarNav.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors duration-150",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
              {item.badge && (
                <Badge
                  variant="secondary"
                  className="ml-auto h-5 min-w-[20px] justify-center px-1.5 text-[10px]"
                >
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="space-y-0.5 px-3 py-1">
        {bottomNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors duration-150",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </div>

      <Separator />

      {/* User menu */}
      <div className="p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent transition-colors duration-150">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                RM
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium truncate">
                  Roberto Méndez
                </p>
                <p className="text-[10px] text-muted-foreground truncate">
                  Administrador
                </p>
              </div>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Mi perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Preferencias
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden w-56 shrink-0 border-r bg-sidebar lg:block">
        <SidebarContent />
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar — mobile only for hamburger, always for actions */}
        <header className="flex h-12 shrink-0 items-center gap-2 border-b bg-background px-4">
          {/* Mobile menu button */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-56 p-0">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <SidebarContent onNavigate={() => setSheetOpen(false)} />
            </SheetContent>
          </Sheet>

          <div className="flex-1" />

          <ThemeToggle />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
