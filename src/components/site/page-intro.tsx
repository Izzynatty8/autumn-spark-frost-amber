export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{kicker}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
    </header>
  );
}
