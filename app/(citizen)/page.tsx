export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Tus trámites municipales, sin filas
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Realiza tus trámites gubernamentales de forma digital, desde cualquier
          lugar y en cualquier momento. Sin filas, sin papeleo innecesario.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/tramites"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Ver trámites disponibles
          </a>
          <a
            href="/seguimiento"
            className="rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            Consultar folio
          </a>
        </div>
      </div>
    </div>
  );
}
