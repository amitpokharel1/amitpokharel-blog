import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { Settings } from "@/sanity/lib/queries";

export function Hero({ settings }: { settings: Settings | null }) {
  const first = settings?.firstName || "Amit";
  const last = settings?.lastName || "Pokharel";
  const tagline =
    settings?.tagline || "Anchor, Presenter, IT Professional & Data Analyst";

  const portrait = settings?.heroImage
    ? urlFor(settings.heroImage).width(1000).height(1200).fit("crop").auto("format").url()
    : null;

  return (
    <section className="border-b border-line bg-surface-2">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-8 md:px-8 md:py-24">
        <div>
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="display mt-3 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-8xl">
            {first}
            <br />
            {last}
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-2">{tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link href="/#contact" className="btn btn-solid">
              Let&apos;s talk
            </Link>
            <Link href="/#work" className="btn btn-outline">
              My work
            </Link>
          </div>
        </div>

        {portrait ? (
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl bg-surface-3">
            <Image
              src={portrait}
              alt={settings?.heroImage?.alt || `${first} ${last}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex aspect-[5/6] w-full items-center justify-center rounded-2xl border border-dashed border-line bg-surface-3/60 p-8 text-center">
            <p className="max-w-[16rem] text-sm text-muted">
              Add a hero portrait in the Studio under{" "}
              <span className="text-ink">Site settings → Hero</span>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
