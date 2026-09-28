import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function ClosingCta({
  title = SITE.tagline,
  lede = `Tell us where the manuscript is. We reply ${SITE.replyTime} with a quote or a sample.`,
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-muted">{lede}</p>
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
      </div>
    </section>
  );
}
