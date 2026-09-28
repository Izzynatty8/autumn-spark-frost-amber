import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-fg", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 6.5c-2.4 1.5-5.4 2.3-8.6 2.3v15c3.2 0 6.2-.8 8.6-2.3 2.4 1.5 5.4 2.3 8.6 2.3v-15c-3.2 0-6.2-.8-8.6-2.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 6.5v15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
