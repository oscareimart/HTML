import type { ReactNode } from "react";
import { Sidebar } from "../../features/navigation/Sidebar";

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-10 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-3)]">
              Template Reutilizable
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Orbit Ops Workspace
            </h1>
            <p className="mt-2 max-w-xl text-sm text-black/70">
              Estructura por funcionalidades, lista para crecer en nuevas
              verticales sin perder claridad.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-black/20">
              Generar reporte
            </button>
            <button className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">
              Nuevo sprint
            </button>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <main className="space-y-8">{children}</main>
          <aside className="lg:sticky lg:top-10">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
