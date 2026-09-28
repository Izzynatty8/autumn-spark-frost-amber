import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  LayoutTemplate,
  Palette,
  PenLine,
  Upload,
} from "lucide-react";
import {
  families,
  familyLinks,
  serviceById,
  servicesForFamily,
  type FamilyId,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS = {
  manuscript: BookOpen,
  writing: PenLine,
  formatting: LayoutTemplate,
  design: Palette,
  publishing: Upload,
} as const;

const NODES: { id: FamilyId; x: number; y: number }[] = [
  { id: "writing", x: 400, y: 72 },
  { id: "manuscript", x: 150, y: 200 },
  { id: "design", x: 650, y: 200 },
  { id: "formatting", x: 250, y: 390 },
  { id: "publishing", x: 550, y: 390 },
];

function uniqueEdges() {
  const seen = new Set<string>();
  const out: { key: string; a: (typeof NODES)[number]; b: (typeof NODES)[number] }[] = [];
  for (const node of NODES) {
    for (const other of familyLinks[node.id]) {
      const key = [node.id, other].sort().join("-");
      if (seen.has(key)) continue;
      seen.add(key);
      const b = NODES.find((n) => n.id === other);
      if (!b) continue;
      out.push({ key, a: node, b });
    }
  }
  return out;
}

const EDGES = uniqueEdges();

export function Constellation({
  active,
  onSelect,
}: {
  active: FamilyId | null;
  onSelect: (id: FamilyId) => void;
}) {
  const lit = new Set<FamilyId>(active ? [active, ...familyLinks[active]] : []);

  return (
    <div>
      <div className="md:hidden">
        <ul className="grid gap-2">
          {families.map((family) => {
            const Icon = ICONS[family.id];
            const isActive = active === family.id;
            return (
              <li key={family.id}>
                <button
                  type="button"
                  onClick={() => onSelect(family.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg px-4 py-4 text-left transition-[background-color,box-shadow] duration-150",
                    isActive
                      ? "bg-fg text-bg"
                      : "bg-bg-elevated shadow-[var(--shadow-border)]",
                  )}
                >
                  <Icon className="mt-0.5 size-5 shrink-0" />
                  <span>
                    <span className="block font-display text-lg">{family.name}</span>
                    <span
                      className={cn(
                        "mt-1 block text-sm",
                        isActive ? "text-bg/70" : "text-muted",
                      )}
                    >
                      {family.kicker}
                      {active === family.id
                        ? ` · connects to ${familyLinks[family.id].map((id) => families.find((f) => f.id === id)?.name).join(", ")}`
                        : ""}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden md:block">
        <svg
          viewBox="0 0 800 480"
          role="img"
          aria-label="Service constellation. Five studio families connected by the publishing pipeline."
          className="h-auto w-full"
        >
          {EDGES.map(({ key, a, b }) => {
              const on =
                active != null &&
                (a.id === active || b.id === active) &&
                lit.has(a.id) &&
                lit.has(b.id);
              return (
                <line
                  key={key}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={on ? "var(--fg)" : "var(--border-strong)"}
                  strokeWidth={on ? 1.75 : 1}
                  className="transition-[stroke] duration-200"
                />
              );
            })}
          {NODES.map((node) => {
            const family = families.find((f) => f.id === node.id)!;
            const isActive = active === node.id;
            const isLit = active == null || lit.has(node.id);
            return (
              <g
              key={node.id}
              onClick={() => onSelect(node.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect(node.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={family.name}
              className="cursor-pointer"
            >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isActive ? 38 : 32}
                  fill={isActive ? "var(--fg)" : "var(--bg-elevated)"}
                  stroke={isLit ? "var(--fg)" : "var(--border-strong)"}
                  strokeWidth="1.25"
                  className="cursor-pointer transition-[fill,r] duration-200"
                  onClick={() => onSelect(node.id)}
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                  fill={isActive ? "var(--bg)" : "var(--fg)"}
                  fontFamily="var(--font-display)"
                  fontSize="13"
                  fontWeight={500}
                  opacity={isLit ? 1 : 0.45}
                >
                  {family.name}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-2 text-center text-xs text-subtle">
          Click a family. Connected work lights with it.
        </p>
      </div>
    </div>
  );
}

export function FamilyPanel({ familyId }: { familyId: FamilyId }) {
  const family = families.find((f) => f.id === familyId)!;
  const list = servicesForFamily(familyId);
  const Icon = ICONS[familyId];

  return (
    <div className="rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-8">
      <div className="flex items-start gap-3">
        <Icon className="mt-1 size-5 text-muted" />
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">{family.kicker}</p>
          <h2 className="mt-1 font-display text-2xl font-medium">{family.headline}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{family.blurb}</p>
        </div>
      </div>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((service) => (
          <li key={service.id} id={service.id} className="scroll-mt-28">
            <h3 className="font-display text-lg font-medium">{service.name}</h3>
            <p className="mt-1 text-sm text-muted">{service.summary}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg/90">{service.body}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.related.slice(0, 3).map((rid) => (
                <Link
                  key={rid}
                  to="/services"
                  search={{ family: serviceById(rid)?.family, service: rid }}
                  className="text-xs text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  {serviceById(rid)?.name ?? "Related"}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          to="/inquire"
          search={{ family: familyId, intent: "quote" }}
          className="text-sm font-medium text-fg underline-offset-4 hover:underline"
        >
          Inquire about {family.name.toLowerCase()} services
        </Link>
      </div>
    </div>
  );
}
