"use client";

import * as React from "react";
import { Search, FileText, Clock, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockSubmissions, getStatusLabel, getStatusVariant } from "@/lib/mock-data";

export default function SeguimientoPage() {
  const [folio, setFolio] = React.useState("");
  const [result, setResult] = React.useState<
    (typeof mockSubmissions)[0] | null | "not_found"
  >(null);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const found = mockSubmissions.find(
      (s) => s.folio.toLowerCase() === folio.trim().toLowerCase()
    );
    setResult(found || "not_found");
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 animate-page-enter">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Seguimiento de trámite
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Ingresa tu número de folio para consultar el estado de tu trámite.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          placeholder="Ej: ZAP-2026-001542"
          value={folio}
          onChange={(e) => setFolio(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="default">
          <Search className="mr-1.5 h-4 w-4" />
          Buscar
        </Button>
      </form>

      {result === "not_found" && (
        <div className="mt-8 rounded-lg border p-6 text-center">
          <Search className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-medium">No se encontró el folio</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Verifica que el número de folio sea correcto e intenta de nuevo.
          </p>
        </div>
      )}

      {result && result !== "not_found" && (
        <div className="mt-6 rounded-lg border bg-card">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Folio</p>
                <p className="font-mono text-sm font-medium">{result.folio}</p>
              </div>
              <Badge variant={getStatusVariant(result.status)}>
                {getStatusLabel(result.status)}
              </Badge>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <FileText className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Trámite</p>
                <p className="text-sm">{result.tramiteName}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Solicitante</p>
                <p className="text-sm">{result.citizenName}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">
                  Fecha de solicitud
                </p>
                <p className="text-sm">
                  {new Date(result.submittedAt).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Categoría</p>
                <p className="text-sm">{result.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Example folios */}
      <div className="mt-8">
        <p className="text-xs text-muted-foreground">
          Folios de ejemplo para probar:
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {mockSubmissions.slice(0, 4).map((s) => (
            <button
              key={s.folio}
              onClick={() => {
                setFolio(s.folio);
                const found = mockSubmissions.find((sub) => sub.folio === s.folio);
                setResult(found || "not_found");
              }}
              className="rounded border px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
              {s.folio}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
