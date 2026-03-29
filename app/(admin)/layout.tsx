import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Bell,
  ClipboardList,
} from "lucide-react";

const sidebarNav = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Trámites", href: "/admin/tramites", icon: FileText },
  { name: "Solicitudes", href: "/admin/solicitudes", icon: ClipboardList },
  { name: "Usuarios", href: "/admin/usuarios", icon: Users },
  { name: "Notificaciones", href: "/admin/notificaciones", icon: Bell },
  { name: "Configuración", href: "/admin/configuracion", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-sidebar lg:flex">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-lg font-bold text-sidebar-foreground">
              Trámite Zero
            </span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <h2 className="text-lg font-semibold">Panel de administración</h2>
          <div className="flex items-center gap-4">
            <button className="relative rounded-md p-2 hover:bg-accent">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
