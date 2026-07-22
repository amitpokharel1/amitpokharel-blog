import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Testimonial } from "@/sanity/lib/queries";

export function Testimonials({ items }: { items: Testimonial[] }) {
  // Deliberately renders nothing when empty — an empty testimonials
  // section is better than a placeholder one.
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">
            What people
            <br />
            say
          </h2>
        </div>

        <ul className="grid gap-6 md:col-span-2 md:grid-cols-2">
          {items.map((t) => (
            <li
              key={t._id}
              className="rounded-2xl border border-line bg-surface p-7"
            >
              <blockquote className="text-ink-2">“{t.quote}”</blockquote>
              <div className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <Image
                    src={urlFor(t.avatar)
                      .width(96)
                      .height(96)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : null}
                <div>
                  <p className="font-[family-name:var(--font-display)] font-medium">
                    {t.name}
                  </p>
                  {t.role ? (
                    <p className="text-sm text-muted">{t.role}</p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
