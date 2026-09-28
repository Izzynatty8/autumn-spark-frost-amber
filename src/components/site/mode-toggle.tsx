import { useMode } from "@/lib/mode";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const mode = useMode((s) => s.mode);
  const setMode = useMode((s) => s.setMode);

  return (
    <div
      role="group"
      aria-label="Studio pathway"
      className="flex rounded-md p-0.5 shadow-[var(--shadow-border)]"
    >
      <button
        type="button"
        onClick={() => setMode("literary")}
        aria-pressed={mode === "literary"}
        className={cn(
          "h-9 rounded-sm px-3 text-xs font-medium tracking-wide transition-[background-color,color] duration-150",
          mode === "literary" ? "bg-fg text-bg" : "text-muted hover:text-fg",
        )}
      >
        Literary
      </button>
      <button
        type="button"
        onClick={() => setMode("childrens")}
        aria-pressed={mode === "childrens"}
        className={cn(
          "h-9 rounded-sm px-3 text-xs font-medium tracking-wide transition-[background-color,color] duration-150",
          mode === "childrens" ? "bg-fg text-bg" : "text-muted hover:text-fg",
        )}
      >
        Children's
      </button>
    </div>
  );
}
