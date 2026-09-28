import { Link } from "@tanstack/react-router";
import { SITE, NAV } from "@/lib/site";
import { Mark } from "@/components/site/mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <Mark className="size-7" />
            <p className="font-display text-lg font-semibold">{SITE.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-subtle">
            {SITE.location}. Replies {SITE.replyTime}.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-widest text-subtle">Visit</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/childrens" className="text-sm text-muted hover:text-fg">
                Children's pathway
              </Link>
            </li>
            <li>
              <Link to="/inquire" className="text-sm text-muted hover:text-fg">
                Inquire
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-widest text-subtle">Write</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 block text-sm text-fg underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.telegram}
            className="mt-2 block text-sm text-muted hover:text-fg"
          >
            Telegram {SITE.telegramHandle}
          </a>
          <p className="mt-4 text-sm text-muted">
            {SITE.languages.join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Client titles stay off this site.</p>
          <p>Two revision rounds included. You remain the author.</p>
        </div>
      </div>
    </footer>
  );
}
