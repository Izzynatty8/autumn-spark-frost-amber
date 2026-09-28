import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { families, serviceById, type FamilyId } from "@/lib/content";
import { Constellation, FamilyPanel } from "@/components/constellation";
import { PageIntro } from "@/components/site/page-intro";
import { ClosingCta } from "@/components/site/closing-cta";

type Search = {
  family?: FamilyId;
  service?: string;
};

function isFamily(value: unknown): value is FamilyId {
  return (
    value === "manuscript" ||
    value === "writing" ||
    value === "formatting" ||
    value === "design" ||
    value === "publishing"
  );
}

export const Route = createFileRoute("/services")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    family: isFamily(raw.family) ? raw.family : undefined,
    service: typeof raw.service === "string" ? raw.service : undefined,
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const search = Route.useSearch();
  const fromService = search.service ? serviceById(search.service) : undefined;
  const initial = search.family ?? fromService?.family ?? "manuscript";
  const [active, setActive] = useState<FamilyId>(initial);

  useEffect(() => {
    setActive(search.family ?? fromService?.family ?? "manuscript");
  }, [search.family, fromService?.family]);

  useEffect(() => {
    if (!search.service) return;
    const el = document.getElementById(search.service);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [search.service, active]);

  return (
    <>
      <PageIntro
        kicker="The constellation"
        title="Five families of work. They are not a list — they are a pipeline."
        lede="Click a node. The work that sits beside it lights up. New authors can follow the line; returning authors can enter in the middle."
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Constellation active={active} onSelect={setActive} />
        <div className="mt-10">
          <FamilyPanel familyId={active} />
        </div>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Service families">
          {families.map((family) => (
            <button
              key={family.id}
              type="button"
              onClick={() => setActive(family.id)}
              className="min-h-11 rounded-md px-3 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg"
            >
              {family.name}
            </button>
          ))}
        </nav>
      </div>
      <ClosingCta title="Not sure which node you are on?" lede="Send the brief. Naming the work is part of what we do." />
    </>
  );
}
