import { createFileRoute } from "@tanstack/react-router";
import { InquireForm } from "@/components/inquire-form";
import { PageIntro } from "@/components/site/page-intro";
import { SITE } from "@/lib/site";
import { packageById, type FamilyId } from "@/lib/content";

type Intent = "quote" | "sample" | "both";

type Search = {
  intent?: Intent;
  package?: string;
  family?: string;
};

function isIntent(value: unknown): value is Intent {
  return value === "quote" || value === "sample" || value === "both";
}

export const Route = createFileRoute("/inquire")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    intent: isIntent(raw.intent) ? raw.intent : undefined,
    package: typeof raw.package === "string" ? raw.package : undefined,
    family: typeof raw.family === "string" ? raw.family : undefined,
  }),
  component: InquirePage,
});

function InquirePage() {
  const search = Route.useSearch();
  const pkg = search.package ? packageById(search.package) : undefined;
  const family = search.family as FamilyId | undefined;

  return (
    <>
      <PageIntro
        kicker="Inquire"
        title={
          search.intent === "sample"
            ? "A free first thousand words."
            : pkg
              ? `A brief for ${pkg.name}.`
              : "Tell us where the manuscript is."
        }
        lede={`No public prices. We quote the book in front of us, usually the same day. We reply ${SITE.replyTime} from West Africa Time.`}
      />
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <InquireForm
          initialIntent={search.intent}
          initialPackage={search.package}
          initialFamily={family}
        />
        <p className="mt-10 text-sm text-subtle">
          Prefer Telegram?{" "}
          <a className="text-fg underline-offset-4 hover:underline" href={SITE.telegram}>
            {SITE.telegramHandle}
          </a>
          . Manuscripts are confidential.
        </p>
      </div>
    </>
  );
}
