import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  mockDashboardStats,
  mockSubmissions,
  getStatusLabel,
  getStatusVariant,
} from "@/lib/mock-data";

const stats = [
  {
    label: "Total solicitudes",
    value: mockDashboardStats.totalSubmissions.toLocaleString(),
    trend: mockDashboardStats.submissionsTrend,
    icon: ClipboardList,
  },
  {
    label: "Pendientes de revisión",
    value: mockDashboardStats.pendingReview.toString(),
    trend: mockDashboardStats.pendingTrend,
    icon: AlertCircle,
  },
  {
    label: "Completadas este mes",
    value: mockDashboardStats.completedThisMonth.toString(),
    trend: mockDashboardStats.completedTrend,
    icon: CheckCircle2,
  },
  {
    label: "Días promedio resolución",
    value: mockDashboardStats.averageResolutionDays.toString(),
    trend: mockDashboardStats.resolutionTrend,
    icon: Clock,
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Resumen general del municipio de Zapopan, Jalisco.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border bg-card p-4"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="h-4 w-4 text-muted-foreground" />
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                  stat.trend > 0 ? "text-emerald-500" : "text-red-500"
                }`}
              >
                {stat.trend > 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(stat.trend)}%
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent submissions */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Solicitudes recientes</h2>
          <Link
            href="/admin/solicitudes"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver todas
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="mt-3 rounded-lg border">
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
                  <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                    Estado
                  </th>
                  <th className="hidden px-4 py-2.5 text-xs font-medium text-muted-foreground md:table-cell">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockSubmissions.slice(0, 6).map((sub) => (
                  <tr
                    key={sub.id}
                    className="border-b last:border-b-0 transition-colors hover:bg-muted/50"
                  >
                    <td className="px-4 py-2.5">
                      <span className="font-mono text-xs">{sub.folio}</span>
                    </td>
                    <td className="px-4 py-2.5 text-sm">{sub.tramiteName}</td>
                    <td className="hidden px-4 py-2.5 text-sm text-muted-foreground sm:table-cell">
                      {sub.citizenName}
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
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
