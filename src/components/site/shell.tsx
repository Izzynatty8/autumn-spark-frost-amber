import { useEffect } from "react";
import { hydrateMode, useMode } from "@/lib/mode";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const mode = useMode((s) => s.mode);

  useEffect(() => {
    hydrateMode();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
