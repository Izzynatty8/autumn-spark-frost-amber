import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useMode } from "@/lib/mode";
import { packages } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/site/closing-cta";

export const Route = createFileRoute("/childrens")({ component: ChildrensPage });

function ChildrensPage() {
  const setMode = useMode((s) => s.setMode);

  useEffect(() => {
    setMode("childrens");
  }, [setMode]);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Children's pathway
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Picture books, chapter books, middle grade — still a press, not a playroom.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Page-turns are structure. Type size is a kindness. The jacket and the interior have to
            tell the same story to the child and to the adult who pays. This pathway keeps the
            studio's standards and warms the room.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/inquire" search={{ intent: "quote", family: "design" }}>
                Inquire about a children's book
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/work">Cover directions</Link>
            </Button>
          </div>
        </div>
        <figure className="lg:col-span-6">
          <img
            src="/images/cover-hare.jpg"
            alt="Studio picture-book cover direction: a hare with a lantern under a baobab."
            className="aspect-3/4 w-full rounded-xl object-cover sm:aspect-square lg:aspect-3/4"
          />
        </figure>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-medium">What changes on this pathway</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Story",
                b: "Alpha and developmental notes read for spread, refrain, and age — not only for plot.",
              },
              {
                t: "Jacket & interior",
                b: "Covers designed with the dummy. Interiors paced for the turn, with type a child can actually read.",
              },
              {
                t: "Store",
                b: "KDP categories and keywords that reach parents and teachers, plus print files that survive bleed.",
              },
            ].map((item) => (
              <li key={item.t} className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]">
                <h3 className="font-display text-xl">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-medium">The same packages, in this room</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {packages.map((pkg) => (
              <li key={pkg.id} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                <p className="font-display md:col-span-4">{pkg.name}</p>
                <p className="text-sm text-muted md:col-span-8">{pkg.childrensNote}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ClosingCta
        title="Send the dummy, the manuscript, or both."
        lede="A free first thousand words still applies — or the first few spreads, if that is the book."
      />
    </>
  );
}
