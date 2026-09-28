import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/$")({ component: NotFound });

function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-3 font-display text-4xl font-medium">This page is not in the signature.</h1>
      <p className="mt-4 max-w-md text-muted">
        The sheet you asked for is not bound into this site. The journey, the constellation, and
        the brief still are.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/inquire">Inquire</Link>
        </Button>
      </div>
    </div>
  );
}
