import { menu } from "./menu";

export function Sidebar() {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[var(--shadow)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">
            Menu lateral
          </p>
          <h2 className="mt-2 text-xl font-semibold">Navegacion</h2>
        </div>
        <span className="rounded-full bg-[var(--brand-2)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-2)]">
          Nivel 2
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {menu.map((section) => (
          <details
            key={section.label}
            className="group rounded-2xl border border-black/5 bg-[var(--panel-muted)]/70 px-4 py-3 open:bg-white"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
              {section.label}
              <span className="text-xs font-medium text-black/50 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              {section.items?.map((item) => (
                <li key={item.label}>
                  <a
                    className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-black/70 transition hover:border-black/10 hover:bg-white"
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-semibold text-black/60">
                        {item.badge}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-black/10 bg-white px-4 py-4">
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">
          Estado
        </p>
        <p className="mt-2 text-sm font-semibold">Sprint 08 · Semana en curso</p>
        <p className="mt-1 text-xs text-black/60">
          3 entregables listos para QA.
        </p>
      </div>
    </div>
  );
}
