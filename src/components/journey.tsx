import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { families, journey, servicesForStage, type StageId } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function JourneyMap() {
  const [active, setActive] = useState<StageId>("draft");
  const stage = journey.find((s) => s.id === active)!;
  const related = servicesForStage(active).slice(0, 8);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          The author journey
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Six rooms. One studio. You enter where you are.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          New authors can walk the path. Returning authors can skip to the room that is stuck.
          Related services light with the stage.
        </p>

        <ol className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {journey.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex h-full min-h-24 w-full flex-col items-start rounded-lg px-3 py-3 text-left transition-[background-color,box-shadow] duration-150",
                    isActive
                      ? "bg-fg text-bg"
                      : "bg-bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-xs tabular-nums",
                      isActive ? "text-bg/70" : "text-subtle",
                    )}
                  >
                    {item.n}
                  </span>
                  <span className="mt-1 font-display text-lg font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-8">
          <p className="text-sm leading-relaxed text-muted">{stage.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stage.familyIds.map((id) => {
              const family = families.find((f) => f.id === id);
              return family ? (
                <Link
                  key={id}
                  to="/services"
                  search={{ family: id }}
                  className="inline-flex min-h-11 items-center"
                >
                  <Badge>{family.name}</Badge>
                </Link>
              ) : null;
            })}
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {related.map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  search={{ family: service.family, service: service.id }}
                  className="group flex min-h-11 items-baseline justify-between gap-3 border-b border-border py-2"
                >
                  <span className="text-sm text-fg group-hover:underline">{service.name}</span>
                  <span className="hidden text-xs text-subtle sm:inline">
                    {families.find((f) => f.id === service.family)?.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
