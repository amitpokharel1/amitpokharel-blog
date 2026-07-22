import Link from "next/link";
import type { Settings } from "@/sanity/lib/queries";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter({ settings }: { settings: Settings | null }) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-4 bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <span className="label text-signal">Contact</span>

        <h2 className="masthead mt-6 text-[clamp(3rem,12vw,9rem)]">
          Let&apos;s work
          <br />
          together
        </h2>

        <div className="mt-14 grid gap-10 border-t-2 border-white/25 pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xl leading-snug text-white/80">
              Have an idea, a question, or just want to say hi? Drop me a
              message.
            </p>
            <div className="mt-7">
              <SocialLinks socials={settings?.socials} variant="dark" />
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="label mb-4 text-white/50">Details</p>
            <ul className="space-y-2.5 text-lg text-white/80">
              {settings?.email ? (
                <li>
                  <a
                    href={`mailto:${settings.email}`}
                    className="transition-colors hover:text-signal"
                  >
                    {settings.email}
                  </a>
                </li>
              ) : null}
              {settings?.phone ? (
                <li>
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-signal"
                  >
                    {settings.phone}
                  </a>
                </li>
              ) : null}
              {settings?.location ? <li>{settings.location}</li> : null}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4 text-white/50">Sections</p>
            <ul className="space-y-2.5 text-lg text-white/80">
              <li>
                <Link href="/#about" className="transition-colors hover:text-signal">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition-colors hover:text-signal">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-signal">
                  Writing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="label mt-14 border-t border-white/20 pt-6 text-white/40">
          © {year} Amit Pokharel
        </p>
      </div>
    </footer>
  );
}
