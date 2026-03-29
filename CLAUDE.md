# Trámite Zero — Convenciones del Proyecto

## Stack

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: Tailwind CSS + shadcn/ui
- **ORM**: Prisma con PostgreSQL
- **Autenticación**: NextAuth.js
- **Formularios**: React Hook Form + Zod
- **Package Manager**: pnpm (NUNCA usar npm ni yarn)

## Estructura del Proyecto

- Sin carpeta `src/` — todo en la raíz
- `app/(citizen)/` — Interfaz pública para ciudadanos
- `app/(admin)/` — Panel de administración para funcionarios
- `app/api/` — API routes para integraciones externas
- `components/ui/` — Componentes shadcn/ui
- `components/forms/` — Componentes de formularios reutilizables
- `lib/prisma/` — Cliente Prisma (singleton)
- `lib/validations/` — Esquemas de validación Zod
- `prisma/` — Schema y migraciones de Prisma
- `types/` — Tipos TypeScript compartidos

## Arquitectura

- **Multi-tenancy por schema**: cada municipio = un tenant
- **Server Actions** para mutaciones de datos
- **API Routes** solo para integraciones externas (webhooks, APIs de terceros)
- Formularios SIEMPRE con React Hook Form + Zod para validación

## Idioma

- **UI**: Español (textos, labels, mensajes al usuario)
- **Código**: Inglés (variables, funciones, nombres de archivo, commits)

## Comandos

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm lint         # Linter
pnpm prisma studio # Explorar base de datos
pnpm prisma migrate dev # Ejecutar migraciones
```

## Reglas

- NUNCA usar `npm` ni `yarn` — solo `pnpm`
- Importar con alias `@/*` (e.g., `@/lib/utils`)
- Usar `cn()` de `@/lib/utils` para clases condicionales
- Componentes de shadcn/ui van en `components/ui/`
- Cada trámite tiene campos dinámicos definidos en `FormField`
- Los folios de seguimiento son únicos y públicos
