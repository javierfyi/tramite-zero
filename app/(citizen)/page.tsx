import Link from "next/link";
import {
  FileText,
  Search,
  Shield,
  Zap,
  Clock,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "100% digital",
    description:
      "Realiza tus trámites desde cualquier dispositivo, sin necesidad de ir a ventanilla.",
  },
  {
    icon: Clock,
    title: "Seguimiento en tiempo real",
    description:
      "Consulta el estado de tu trámite en cualquier momento con tu número de folio.",
  },
  {
    icon: Shield,
    title: "Seguro y confiable",
    description:
      "Tus datos están protegidos con los más altos estándares de seguridad.",
  },
];

const stats = [
  { value: "1,342", label: "Trámites realizados" },
  { value: "6.2", label: "Días promedio de resolución" },
  { value: "98%", label: "Satisfacción ciudadana" },
];

export default function HomePage() {
  return (
    <div className="animate-page-enter">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Trámites municipales, sin filas
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Plataforma digital para realizar y dar seguimiento a tus trámites
            gubernamentales del municipio. Rápido, transparente y sin papeleo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tramites"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FileText className="h-4 w-4" />
              Ver trámites disponibles
            </Link>
            <Link
              href="/seguimiento"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Search className="h-4 w-4" />
              Consultar folio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="stagger-children grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-5 transition-colors hover:bg-accent/30"
            >
              <feature.icon className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-3 text-sm font-semibold">{feature.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            Empieza tu trámite ahora
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sin cuenta requerida para consultar. Regístrate para iniciar un
            trámite nuevo.
          </p>
          <div className="mt-6">
            <Link
              href="/tramites"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Comenzar
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
