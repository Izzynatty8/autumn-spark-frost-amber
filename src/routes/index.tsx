import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { packages, tools } from "@/lib/content";
import { useMode } from "@/lib/mode";
import { Button } from "@/components/ui/button";
import { JourneyMap } from "@/components/journey";
import { ClosingCta } from "@/components/site/closing-cta";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const mode = useMode((s) => s.mode);
  const childrens = mode === "childrens";

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:pb-24">
        <div className="stagger-in lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {childrens
              ? "Picture books · chapter books · middle grade"
              : "Fiction · nonfiction · children's"}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl">
            You write the story.
            <span className="mt-2 block italic text-muted">We make it ready for readers.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {SITE.belief} A small roster. {SITE.years} of KDP production. One brief from first
            draft to the store page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/inquire" search={{ intent: "quote" }}>
                Request a quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/inquire" search={{ intent: "sample" }}>
                Free 1,000-word sample
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-subtle">
            Replies {SITE.replyTime}. No public rate card — we quote the book in front of us.
          </p>
        </div>
        <figure className="lg:col-span-5">
          <img
            key={childrens ? "childrens" : "literary"}
            src={childrens ? "/images/childrens-studio.jpg" : "/images/hero-desk.jpg"}
            alt={
              childrens
                ? "A children's-book design table with watercolors, dummy book, and daylight."
                : "A night editorial desk with cream paper, metal type, and a fountain pen."
            }
            className="aspect-4/3 w-full rounded-xl object-cover sm:aspect-3/2"
          />
          <figcaption className="mt-3 text-xs text-subtle">
            {childrens
              ? "Children's interiors and jackets, designed as one object."
              : "Letterpress, manuscript, files. The work happens in that order."}
          </figcaption>
        </figure>
      </section>

      <JourneyMap />

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Named pathways
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                Packages, not a menu of fifty ticks.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
            >
              Or browse the constellation
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {packages.map((pkg) => (
              <li key={pkg.id} className="grid gap-4 py-6 md:grid-cols-12 md:items-baseline">
                <p className="font-display text-sm tabular-nums text-subtle md:col-span-1">
                  {pkg.n}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-medium">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-muted">{pkg.forWho}</p>
                </div>
                <ul className="space-y-1 text-sm text-muted md:col-span-5">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {childrens ? (
                    <li className="text-fg">{pkg.childrensNote}</li>
                  ) : null}
                </ul>
                <div className="md:col-span-2 md:text-right">
                  <Link
                    to="/inquire"
                    search={{ package: pkg.id, intent: "quote" }}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline"
                  >
                    Inquire
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/interior-spread.jpg"
            alt="An open hardcover interior on a dark table, type softly out of focus."
            className="aspect-3/2 w-full rounded-xl object-cover"
          />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              How files leave the studio
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
              Edited pages. Print-ready PDFs. Covers that survive a thumbnail.
            </h2>
            <p className="mt-4 text-muted">
              Two rounds of revision included. Tools we actually use, not a stack we namedrop.
            </p>
            <ul className="mt-6 columns-2 gap-8 text-sm text-fg">
              {tools.map((tool) => (
                <li key={tool} className="break-inside-avoid py-1">
                  {tool}
                </li>
              ))}
            </ul>
            <Link
              to="/process"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
            >
              The process
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
