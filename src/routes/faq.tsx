import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/content";
import { PageIntro } from "@/components/site/page-intro";
import { ClosingCta } from "@/components/site/closing-cta";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  return (
    <>
      <PageIntro
        kicker="FAQ"
        title="The questions that arrive before the brief."
        lede="If yours is not here, put it in the note. Naming the work is part of the work."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <div key={item.q} className="py-8">
              <dt className="font-display text-xl font-medium">{item.q}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <ClosingCta />
    </>
  );
}
