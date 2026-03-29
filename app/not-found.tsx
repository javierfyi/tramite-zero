import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-semibold tracking-tighter text-muted-foreground/30">
          404
        </p>
        <h1 className="mt-4 text-lg font-semibold">Página no encontrada</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
