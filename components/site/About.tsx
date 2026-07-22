import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@/components/PortableText";
import { SocialLinks } from "./SocialLinks";
import type { Settings } from "@/sanity/lib/queries";

export function About({ settings }: { settings: Settings | null }) {
  const heading =
    settings?.aboutHeading || "Passionate. Smart-working. Creative.";
  const image = settings?.aboutImage
    ? urlFor(settings.aboutImage).width(1000).height(1200).fit("crop").auto("format").url()
    : null;
  const years = settings?.yearsOfExperience;

  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-14 md:px-8 md:py-28">
        {/* Image + stat card */}
        <div className="relative">
          {image ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-2">
              <Image
                src={image}
                alt={settings?.aboutImage?.alt || "Amit Pokharel"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-dashed border-line bg-surface-2 p-8 text-center">
              <p className="max-w-[16rem] text-sm text-muted">
                Add an about image in{" "}
                <span className="text-ink">Site settings → About</span>.
              </p>
            </div>
          )}

          {years ? (
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-surface px-8 py-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:right-6">
              <p className="display text-5xl text-accent">{years}</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-lg leading-tight">
                Years of
                <br />
                experience
              </p>
            </div>
          ) : null}
        </div>

        {/* Text */}
        <div className={years ? "mt-10 md:mt-0" : ""}>
          <p className="eyebrow">About me</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">{heading}</h2>

          <div className="mt-7">
            {settings?.aboutBody ? (
              <div className="article !text-base">
                <PortableText value={settings.aboutBody} />
              </div>
            ) : (
              <p className="text-ink-2">
                Add your bio in the Studio under{" "}
                <span className="text-ink">Site settings → About</span>. This is
                where you tell people who you are and what you do.
              </p>
            )}
          </div>

          <div className="mt-8">
            <SocialLinks socials={settings?.socials} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href="/#contact" className="btn btn-solid">
              Hire me
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
    </section>
  );
}
