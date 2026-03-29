"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, FileText, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Trámites", href: "/tramites", icon: FileText },
  { name: "Seguimiento", href: "/seguimiento", icon: Search },
];

export default function CitizenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xs font-bold">TZ</span>
              </div>
              <span className="text-sm font-semibold">Trámite Zero</span>
            </Link>
            <nav className="hidden items-center gap-1 sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="hidden text-xs text-muted-foreground sm:inline-flex"
              onClick={() => {
                document.dispatchEvent(
                  new KeyboardEvent("keydown", {
                    key: "k",
                    metaKey: true,
                  })
                );
              }}
            >
              <Search className="mr-1.5 h-3.5 w-3.5" />
              Buscar
              <kbd className="ml-2 rounded border bg-muted px-1 font-mono text-[10px]">
                ⌘K
              </kbd>
            </Button>
            <ThemeToggle />
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-xs">
                Iniciar sesión
              </Button>
            </Link>
            {/* Mobile menu */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex flex-col gap-1 p-4 pt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50"
                      )}
                    >
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/login"
                    onClick={() => setSheetOpen(false)}
                    className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Trámite Zero. Digitalización de
            trámites municipales.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacidad"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
