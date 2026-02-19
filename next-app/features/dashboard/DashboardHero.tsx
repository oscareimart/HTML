export function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      <div className="absolute bottom-0 left-12 h-40 w-40 rounded-full bg-[var(--brand-2)]/20 blur-3xl" />
      <p className="text-xs uppercase tracking-[0.35em] text-black/50">
        Panel ejecutivo
      </p>
      <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
        Diseñado para equipos que ejecutan rapido y necesitan claridad.
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-black/70">
        Usa este layout para orquestar dashboards, portales internos o hubs de
        clientes. Cada seccion es un modulo reutilizable por feature.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-full bg-[var(--brand-3)] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">
          Ver roadmap
        </button>
        <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5">
          Exportar data
        </button>
      </div>
    </section>
  );
}
