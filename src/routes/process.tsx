import { createFileRoute } from "@tanstack/react-router";
import { deliverables, processSteps, tools } from "@/lib/content";
import { SITE } from "@/lib/site";
import { PageIntro } from "@/components/site/page-intro";
import { ClosingCta } from "@/components/site/closing-cta";

export const Route = createFileRoute("/process")({ component: ProcessPage });

function ProcessPage() {
  return (
    <>
      <PageIntro
        kicker="Process"
        title="A brief, a sample, then the files in your hands."
        lede={`${SITE.revisions}. You remain the author and the publisher of record. We reply ${SITE.replyTime}.`}
      />
      <ol className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        {processSteps.map((step) => (
          <li
            key={step.n}
            className="grid gap-3 border-t border-border py-8 md:grid-cols-12 md:items-baseline"
          >
            <p className="font-display text-sm tabular-nums text-subtle md:col-span-2">{step.n}</p>
            <h2 className="font-display text-2xl font-medium md:col-span-3">{step.title}</h2>
            <p className="text-muted md:col-span-7">{step.body}</p>
          </li>
        ))}
      </ol>
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium">Tools</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium">Handoff</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-subtle">
              We send what you asked for — not a bundle of files you have to decode.
            </p>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
