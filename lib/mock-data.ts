// Mock data for development — realistic Mexican municipal government data

export const mockTenant = {
  id: "clx1234567890",
  name: "Municipio de Zapopan",
  slug: "zapopan",
  state: "Jalisco",
  isActive: true,
};

export type MockTramite = {
  id: string;
  name: string;
  category: string;
  description: string;
  estimatedDays: number;
  cost: number;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  submissions: number;
};

export const mockTramites: MockTramite[] = [
  {
    id: "t1",
    name: "Licencia de Construcción",
    category: "Obras Públicas",
    description:
      "Permiso para realizar obras de construcción, remodelación o ampliación en inmuebles.",
    estimatedDays: 15,
    cost: 2850.0,
    status: "PUBLISHED",
    submissions: 142,
  },
  {
    id: "t2",
    name: "Licencia de Uso de Suelo",
    category: "Desarrollo Urbano",
    description:
      "Autorización para destinar un predio a un uso específico conforme al plan de desarrollo urbano.",
    estimatedDays: 20,
    cost: 1500.0,
    status: "PUBLISHED",
    submissions: 89,
  },
  {
    id: "t3",
    name: "Constancia de No Adeudo Predial",
    category: "Tesorería",
    description:
      "Documento que acredita que un inmueble se encuentra al corriente en el pago del impuesto predial.",
    estimatedDays: 3,
    cost: 150.0,
    status: "PUBLISHED",
    submissions: 312,
  },
  {
    id: "t4",
    name: "Permiso de Apertura de Negocio",
    category: "Padrón y Licencias",
    description:
      "Autorización municipal para la apertura y funcionamiento de un establecimiento comercial.",
    estimatedDays: 10,
    cost: 3200.0,
    status: "PUBLISHED",
    submissions: 67,
  },
  {
    id: "t5",
    name: "Acta de Nacimiento (Copia Certificada)",
    category: "Registro Civil",
    description:
      "Expedición de copia certificada del acta de nacimiento para trámites oficiales.",
    estimatedDays: 1,
    cost: 120.0,
    status: "PUBLISHED",
    submissions: 523,
  },
  {
    id: "t6",
    name: "Permiso de Eventos Públicos",
    category: "Gobernación",
    description:
      "Autorización para realizar eventos masivos en espacios públicos o privados.",
    estimatedDays: 7,
    cost: 4500.0,
    status: "DRAFT",
    submissions: 0,
  },
  {
    id: "t7",
    name: "Constancia de Residencia",
    category: "Secretaría General",
    description:
      "Documento que acredita la residencia de una persona en el municipio.",
    estimatedDays: 5,
    cost: 80.0,
    status: "PUBLISHED",
    submissions: 198,
  },
  {
    id: "t8",
    name: "Permiso de Demolición",
    category: "Obras Públicas",
    description:
      "Autorización para la demolición total o parcial de una edificación.",
    estimatedDays: 12,
    cost: 1800.0,
    status: "ARCHIVED",
    submissions: 23,
  },
];

export type MockSubmission = {
  id: string;
  folio: string;
  tramiteName: string;
  citizenName: string;
  status:
    | "PENDING"
    | "IN_REVIEW"
    | "REQUIRES_CHANGES"
    | "APPROVED"
    | "REJECTED"
    | "COMPLETED";
  submittedAt: string;
  category: string;
};

export const mockSubmissions: MockSubmission[] = [
  {
    id: "s1",
    folio: "ZAP-2026-001542",
    tramiteName: "Licencia de Construcción",
    citizenName: "María Guadalupe Hernández López",
    status: "IN_REVIEW",
    submittedAt: "2026-03-28",
    category: "Obras Públicas",
  },
  {
    id: "s2",
    folio: "ZAP-2026-001541",
    tramiteName: "Constancia de No Adeudo Predial",
    citizenName: "José Roberto Martínez García",
    status: "COMPLETED",
    submittedAt: "2026-03-27",
    category: "Tesorería",
  },
  {
    id: "s3",
    folio: "ZAP-2026-001540",
    tramiteName: "Permiso de Apertura de Negocio",
    citizenName: "Ana Patricia Rodríguez Vega",
    status: "PENDING",
    submittedAt: "2026-03-27",
    category: "Padrón y Licencias",
  },
  {
    id: "s4",
    folio: "ZAP-2026-001539",
    tramiteName: "Licencia de Uso de Suelo",
    citizenName: "Carlos Eduardo Ramírez Soto",
    status: "REQUIRES_CHANGES",
    submittedAt: "2026-03-26",
    category: "Desarrollo Urbano",
  },
  {
    id: "s5",
    folio: "ZAP-2026-001538",
    tramiteName: "Acta de Nacimiento (Copia Certificada)",
    citizenName: "Laura Fernanda Torres Díaz",
    status: "APPROVED",
    submittedAt: "2026-03-26",
    category: "Registro Civil",
  },
  {
    id: "s6",
    folio: "ZAP-2026-001537",
    tramiteName: "Constancia de Residencia",
    citizenName: "Miguel Ángel Flores Navarro",
    status: "REJECTED",
    submittedAt: "2026-03-25",
    category: "Secretaría General",
  },
  {
    id: "s7",
    folio: "ZAP-2026-001536",
    tramiteName: "Licencia de Construcción",
    citizenName: "Sofía Valentina Morales Cruz",
    status: "IN_REVIEW",
    submittedAt: "2026-03-25",
    category: "Obras Públicas",
  },
  {
    id: "s8",
    folio: "ZAP-2026-001535",
    tramiteName: "Permiso de Apertura de Negocio",
    citizenName: "Fernando Alejandro Jiménez Ruiz",
    status: "COMPLETED",
    submittedAt: "2026-03-24",
    category: "Padrón y Licencias",
  },
];

export const mockDashboardStats = {
  totalSubmissions: 1342,
  pendingReview: 47,
  completedThisMonth: 312,
  averageResolutionDays: 6.2,
  submissionsTrend: +12.5,
  pendingTrend: -8.3,
  completedTrend: +23.1,
  resolutionTrend: -15.4,
};

export const mockUsers = [
  {
    id: "u1",
    name: "Lic. Roberto Méndez Castellanos",
    email: "roberto.mendez@zapopan.gob.mx",
    role: "ADMIN" as const,
    department: "Dirección General",
  },
  {
    id: "u2",
    name: "Arq. Carmen Salazar Ríos",
    email: "carmen.salazar@zapopan.gob.mx",
    role: "OFFICER" as const,
    department: "Obras Públicas",
  },
  {
    id: "u3",
    name: "C.P. Francisco Delgado Herrera",
    email: "francisco.delgado@zapopan.gob.mx",
    role: "OFFICER" as const,
    department: "Tesorería",
  },
  {
    id: "u4",
    name: "Lic. Adriana Vargas Peña",
    email: "adriana.vargas@zapopan.gob.mx",
    role: "OFFICER" as const,
    department: "Padrón y Licencias",
  },
];

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    PENDING: "Pendiente",
    IN_REVIEW: "En revisión",
    REQUIRES_CHANGES: "Requiere cambios",
    APPROVED: "Aprobado",
    REJECTED: "Rechazado",
    COMPLETED: "Completado",
    PUBLISHED: "Publicado",
    DRAFT: "Borrador",
    ARCHIVED: "Archivado",
  };
  return labels[status] || status;
}

export function getStatusVariant(
  status: string
): "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" {
  const variants: Record<string, "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info"> = {
    PENDING: "secondary",
    IN_REVIEW: "info",
    REQUIRES_CHANGES: "warning",
    APPROVED: "success",
    REJECTED: "destructive",
    COMPLETED: "success",
    PUBLISHED: "success",
    DRAFT: "secondary",
    ARCHIVED: "outline",
  };
  return variants[status] || "secondary";
}
