export type NavItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string; badge?: string }[];
};

export const menu: NavItem[] = [
  {
    label: "Overview",
    items: [
      { label: "Resumen ejecutivo", href: "#resumen" },
      { label: "Mapa de impacto", href: "#impacto" },
    ],
  },
  {
    label: "Producto",
    items: [
      { label: "Catálogo activo", href: "#catalogo", badge: "12" },
      { label: "Inventario", href: "#inventario" },
    ],
  },
  {
    label: "Operaciones",
    items: [
      { label: "Pedidos vivos", href: "#pedidos", badge: "4" },
      { label: "Logística", href: "#logistica" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Analítica", href: "#analitica" },
      { label: "Reportes", href: "#reportes" },
    ],
  },
  {
    label: "Equipo",
    items: [
      { label: "Talent pool", href: "#talento" },
      { label: "Capacitaciones", href: "#capacitaciones" },
    ],
  },
];
