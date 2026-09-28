import { createFileRoute } from "@tanstack/react-router";
import { covers, testimonials } from "@/lib/content";
import { useMode } from "@/lib/mode";
import { PageIntro } from "@/components/site/page-intro";
import { ClosingCta } from "@/components/site/closing-cta";
import { CoverCard } from "@/components/cover-card";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  const mode = useMode((s) => s.mode);

  return (
    <>
      <PageIntro
        kicker="Work"
        title="Covers we can show. Titles we cannot."
        lede="Client books leave this site unnamed. The directions below are studio samples — the kind of jacket we make — so you can see the hand without reading someone else's spine."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <CoverCard cover={covers[0]} ink="ivory" />
          <CoverCard cover={covers[1]} ink="ink" />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-tight">From the roster's desk</h2>
          <p className="mt-3 max-w-xl text-muted">
            Names shortened. Book titles withheld under confidence.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => {
              const dim =
                mode === "childrens"
                  ? item.lane !== "Children's"
                  : item.lane === "Children's";
              return (
                <li
                  key={item.name}
                  className={cn(
                    "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8",
                    dim && "opacity-70",
                  )}
                >
                  <p className="font-display text-xl leading-snug text-fg">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-sm text-muted">
                    {item.name} · {item.role}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-subtle">{item.lane}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
