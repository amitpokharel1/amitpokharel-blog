import type { Testimonial } from "@/sanity/lib/queries";

export function Testimonials({ items }: { items: Testimonial[] }) {
  // Renders nothing when empty — better a missing section than a fake one.
  if (items.length === 0) return null;

  return (
    <section className="border-b-2 border-ink bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <span className="label text-signal">In their words</span>

        <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
          {items.map((t) => (
            <li key={t._id} className="border-t-2 border-signal pt-7">
              <blockquote className="display text-[clamp(1.5rem,2.6vw,2.2rem)] text-white">
                {t.quote}
              </blockquote>
              <p className="label mt-7 text-white/60">
                {t.name}
                {t.role ? ` — ${t.role}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
