import Link from "next/link";

export default function CitizenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Trámite Zero</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/tramites"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Trámites
            </Link>
            <Link
              href="/seguimiento"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Seguimiento
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Iniciar sesión
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Trámite Zero. Plataforma de
          digitalización de trámites municipales.
        </div>
      </footer>
    </div>
  );
}
