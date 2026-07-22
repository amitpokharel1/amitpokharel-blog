import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@/components/PortableText";
import { SocialLinks } from "./SocialLinks";
import type { Settings } from "@/sanity/lib/queries";

export function About({ settings }: { settings: Settings | null }) {
  const heading = settings?.aboutHeading || "Passionate. Smart-working. Creative.";
  const image = settings?.aboutImage
    ? urlFor(settings.aboutImage).width(1100).height(1375).fit("crop").auto("format").url()
    : null;
  const years = settings?.yearsOfExperience;

  return (
    <section id="about" className="scroll-mt-4 border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="section-rule">
          <span className="label text-signal-deep">About</span>
          <h2 className="display mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)]">
            {heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-10">
          {/* Portrait column */}
          <div className="md:col-span-5">
            {image ? (
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={image}
                  alt={settings?.aboutImage?.alt || "Amit Pokharel"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            ) : (
              <div className="flex aspect-4/5 w-full items-center justify-center border-2 border-dashed border-rule bg-paper-2 p-8">
                <p className="label max-w-[15rem] text-center text-muted">
                  Add an about image — Site settings → About
                </p>
              </div>
            )}

            {years ? (
              <div className="mt-0 flex items-baseline gap-4 bg-signal px-6 py-5">
                <span className="masthead text-6xl">{years}</span>
                <span className="label leading-snug">
                  Years
                  <br />
                  in the field
                </span>
              </div>
            ) : null}
          </div>

          {/* Text column — magazine two-up */}
          <div className="md:col-span-7">
            {settings?.aboutBody ? (
              <div className="article cols-2 !text-[1.05rem]">
                <PortableText value={settings.aboutBody} />
              </div>
            ) : (
              <p className="text-lg text-ink-2">
                Add your bio in the Studio under Site settings → About. This is
                where you tell people who you are and what you do.
              </p>
            )}

            <div className="mt-10 border-t border-rule pt-6">
              <p className="label mb-4 text-muted">Elsewhere</p>
              <SocialLinks socials={settings?.socials} />
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-solid">
                Work with me
              </Link>
              {settings?.cvUrl ? (
                <a
                  href={settings.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Download CV
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
