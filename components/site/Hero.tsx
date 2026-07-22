import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { Settings } from "@/sanity/lib/queries";

export function Hero({ settings }: { settings: Settings | null }) {
  const first = settings?.firstName || "Amit";
  const last = settings?.lastName || "Pokharel";
  const tagline =
    settings?.tagline || "Anchor, Presenter, IT Professional & Data Analyst";
  const location = settings?.location || "Kathmandu, Nepal";

  const portrait = settings?.heroImage
    ? urlFor(settings.heroImage).width(1100).height(1375).fit("crop").auto("format").url()
    : null;

  return (
    <section className="border-b-2 border-ink">
      {/* Dateline band */}
      <div className="border-b border-rule">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 md:px-10">
          <span className="label text-muted">{location}</span>
          <span className="label text-signal-deep">Portfolio &amp; Writing</span>
          <span className="label hidden text-muted sm:inline">Issue One</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative pb-10 pt-10 md:pb-20 md:pt-16">
          {/* Flat orange field — sits behind the masthead */}
          <div
            aria-hidden
            className="absolute bottom-[16%] left-0 -z-0 hidden h-[42%] w-[64%] bg-signal md:block"
          />

          <div className="md:grid md:grid-cols-12 md:items-end">
            {/* Portrait */}
            <div className="relative z-10 md:col-span-6 md:col-start-7">
              {portrait ? (
                <div className="relative aspect-4/5 w-full">
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
                <div className="flex aspect-4/5 w-full items-center justify-center border-2 border-dashed border-rule bg-paper-2 p-8">
                  <p className="label max-w-[15rem] text-center text-muted">
                    Add a hero portrait — Site settings → Hero
                  </p>
                </div>
              )}
            </div>

            {/* Masthead — overlaps the orange field and kisses the portrait */}
            <div className="relative z-20 mt-8 md:absolute md:bottom-[20%] md:left-0 md:mt-0 md:w-[72%]">
              <h1 className="masthead text-[clamp(3.5rem,15vw,11rem)]">
                <span className="block">{first}</span>
                <span className="block">{last}</span>
              </h1>
            </div>
          </div>

          {/* Tagline + actions */}
          <div className="mt-10 grid gap-8 border-t-2 border-ink pt-7 md:mt-16 md:grid-cols-12">
            <p className="font-[family-name:var(--font-body)] text-2xl leading-tight md:col-span-7 md:text-[2rem]">
              {tagline}
            </p>
            <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
              <Link href="/#contact" className="btn btn-solid">
                Get in touch
              </Link>
              <Link href="/#work" className="btn btn-outline">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
