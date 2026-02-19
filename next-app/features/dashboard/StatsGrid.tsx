const stats = [
  { label: "Crecimiento mensual", value: "18.6%", note: "Meta superada" },
  { label: "Nuevos clientes", value: "142", note: "+24 esta semana" },
  { label: "Tiempo de ciclo", value: "3.2d", note: "Mejora del 12%" },
  { label: "Satisfaccion", value: "4.8/5", note: "Feedback destacado" },
];

export function StatsGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-black/40">
            {stat.label}
          </p>
          <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
          <p className="mt-2 text-xs text-black/60">{stat.note}</p>
        </div>
      ))}
    </section>
  );
}
