import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { families } from "@/lib/content";
import { PageIntro } from "@/components/site/page-intro";
import { ClosingCta } from "@/components/site/closing-cta";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="The studio"
        title="A small roster. A full pipeline."
        lede={`${SITE.name} is not a marketplace of strangers. Editors, designers, and formatters under one brief — ${SITE.years.toLowerCase()} walking books through KDP and print.`}
      />
      <article className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-7">
            <p className="text-fg">
              We started as production people: the ones who notice a bad gutter, a thumbnail that
              lies, a chapter that does not earn its place. The roster is still small on purpose.
              You are not handed off to a crowd.
            </p>
            <p>
              The studio holds formal training and production credentials, and the unromantic
              knowledge of Amazon's dashboard — categories, keywords, proof copies, files that
              actually upload. We work in {SITE.languages.join(", ")}.
            </p>
            <p>
              We do not list client titles here. Manuscripts are read under confidence. If you
              need a written NDA before pages leave your machine, say so in the brief.
            </p>
            <p>
              You remain the author. You remain the publisher of record. Our name does not need to
              be on the jacket.
            </p>
          </div>
          <aside className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] lg:col-span-5">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-subtle">Where</dt>
                <dd className="mt-1 text-fg">{SITE.location}</dd>
              </div>
              <div>
                <dt className="text-subtle">Reply</dt>
                <dd className="mt-1 text-fg">{SITE.replyTime}</dd>
              </div>
              <div>
                <dt className="text-subtle">Languages</dt>
                <dd className="mt-1 text-fg">{SITE.languages.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-subtle">Revisions</dt>
                <dd className="mt-1 text-fg">{SITE.revisions}</dd>
              </div>
              <div>
                <dt className="text-subtle">Write</dt>
                <dd className="mt-1">
                  <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {families.map((family) => (
            <li key={family.id}>
              <Link
                to="/services"
                search={{ family: family.id }}
                className="block min-h-11"
              >
                <p className="text-xs uppercase tracking-widest text-subtle">{family.kicker}</p>
                <p className="mt-2 font-display text-xl">{family.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <ClosingCta />
    </>
  );
}
