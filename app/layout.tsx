import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trámite Zero — Trámites municipales digitales",
  description:
    "Plataforma para digitalizar trámites gubernamentales municipales en México. Sin filas, sin papeleo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
