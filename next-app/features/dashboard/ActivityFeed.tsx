const activity = [
  {
    title: "Pipeline de onboarding",
    detail: "Se integro el nuevo flujo con un 32% menos de pasos.",
    time: "Hace 2 horas",
  },
  {
    title: "Lanzamiento de coleccion",
    detail: "Fashion Drops listo para QA y revisiones de copy.",
    time: "Hace 6 horas",
  },
  {
    title: "Sprint discovery",
    detail: "Nuevo research pack para retail LATAM.",
    time: "Ayer",
  },
];

export function ActivityFeed() {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-[var(--shadow)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Pulso del equipo
          </p>
          <h3 className="mt-2 text-xl font-semibold">Actividad reciente</h3>
        </div>
        <button className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-black/60">
          Ver todo
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {activity.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/5 bg-[var(--panel-muted)]/60 p-4"
          >
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-black/60">{item.detail}</p>
            <p className="mt-3 text-xs text-black/40">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
