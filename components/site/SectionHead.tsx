// Section header: mono label sitting on a heavy rule, with an
// oversized display title beneath. Used across the homepage.
export function SectionHead({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-rule">
      <div className="flex items-baseline justify-between gap-4">
        <span className="label text-signal-deep">{label}</span>
      </div>
      <div className="mt-5 md:grid md:grid-cols-12 md:gap-8">
        <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] md:col-span-7">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-md text-lg text-ink-2 md:col-span-5 md:mt-2 md:self-end">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
