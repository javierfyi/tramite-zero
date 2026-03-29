import { Bell, CheckCheck, FileText, AlertCircle, MessageSquare } from "lucide-react";
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

const mockNotifications = [
  {
    id: "n1",
    title: "Nueva solicitud recibida",
    message: "María Guadalupe Hernández López envió una solicitud de Licencia de Construcción.",
    type: "NEW_SUBMISSION" as const,
    isRead: false,
    createdAt: "2026-03-28T14:30:00",
  },
  {
    id: "n2",
    title: "Solicitud requiere revisión",
    message: "La solicitud ZAP-2026-001540 de Permiso de Apertura de Negocio necesita ser revisada.",
    type: "APPROVAL_REQUIRED" as const,
    isRead: false,
    createdAt: "2026-03-27T10:15:00",
  },
  {
    id: "n3",
    title: "Comentario en solicitud",
    message: "Arq. Carmen Salazar dejó un comentario en la solicitud ZAP-2026-001542.",
    type: "COMMENT" as const,
    isRead: true,
    createdAt: "2026-03-27T09:00:00",
  },
  {
    id: "n4",
    title: "Trámite completado",
    message: "La solicitud ZAP-2026-001535 de Permiso de Apertura ha sido completada.",
    type: "STATUS_CHANGE" as const,
    isRead: true,
    createdAt: "2026-03-26T16:45:00",
  },
  {
    id: "n5",
    title: "Solicitud rechazada",
    message: "La solicitud ZAP-2026-001537 de Constancia de Residencia fue rechazada por documentación incompleta.",
    type: "STATUS_CHANGE" as const,
    isRead: true,
    createdAt: "2026-03-25T11:30:00",
  },
];

const typeIcons: Record<string, typeof Bell> = {
  NEW_SUBMISSION: FileText,
  APPROVAL_REQUIRED: AlertCircle,
  COMMENT: MessageSquare,
  STATUS_CHANGE: Bell,
};

export default function AdminNotificacionesPage() {
  const unreadCount = mockNotifications.filter((n) => !n.isRead).length;

  return (
    <div className="animate-page-enter">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Notificaciones</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight">
            Notificaciones
          </h1>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="text-[10px]">
              {unreadCount} sin leer
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          <CheckCheck className="mr-1.5 h-3.5 w-3.5" />
          Marcar todas como leídas
        </Button>
      </div>

      <div className="rounded-lg border divide-y">
        {mockNotifications.map((notification) => {
          const Icon = typeIcons[notification.type] || Bell;
          return (
            <div
              key={notification.id}
              className={`flex gap-3 p-4 transition-colors hover:bg-muted/50 cursor-pointer ${
                !notification.isRead ? "bg-accent/30" : ""
              }`}
            >
              <div className="mt-0.5">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm ${!notification.isRead ? "font-medium" : ""}`}>
                    {notification.title}
                  </p>
                  {!notification.isRead && (
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  )}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                  {notification.message}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground/70">
                  {new Date(notification.createdAt).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
