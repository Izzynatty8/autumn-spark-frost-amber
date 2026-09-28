import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/site/mark";
import { ModeToggle } from "@/components/site/mode-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Mark className="size-8 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold tracking-tight text-fg">
              {SITE.name}
            </span>
            <span className="hidden truncate text-xs text-muted sm:block">
              Manuscript to published book
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted transition-colors duration-150 hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/inquire">Inquire</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn("border-t border-border bg-bg lg:hidden", !open && "hidden")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-11 items-center text-base text-fg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/childrens"
            className="flex min-h-11 items-center text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Children's pathway
          </Link>
          <Link
            to="/inquire"
            className="flex min-h-11 items-center text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Inquire
          </Link>
          <div className="pt-3 sm:hidden">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
