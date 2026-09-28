import { cn } from "@/lib/utils";
import type { covers } from "@/lib/content";

type Cover = (typeof covers)[number];

export function CoverCard({
  cover,
  ink = "ivory",
}: {
  cover: Cover;
  ink?: "ivory" | "ink";
}) {
  const onDark = ink === "ivory";
  return (
    <figure>
      <div className="relative aspect-2/3 overflow-hidden rounded-xl">
        <img
          src={cover.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p
              className={cn(
                "text-xs font-medium uppercase tracking-[0.2em]",
                onDark ? "text-cover-ivory/80" : "text-cover-ink/70",
              )}
            >
              {cover.lane.split("·")[0]?.trim()}
            </p>
            <p
              className={cn(
                "mt-3 max-w-[12ch] font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl",
                onDark ? "text-cover-ivory" : "text-cover-ink",
              )}
            >
              {cover.title}
            </p>
          </div>
          <p
            className={cn(
              "text-xs tracking-wide",
              onDark ? "text-cover-ivory/75" : "text-cover-ink/70",
            )}
          >
            {cover.note}
          </p>
        </div>
      </div>
      <figcaption className="mt-4">
        <p className="font-display text-xl">{cover.title}</p>
        <p className="mt-1 text-sm text-muted">{cover.lane}</p>
      </figcaption>
    </figure>
  );
}
