import Link from "next/link";
import type { Settings } from "@/sanity/lib/queries";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter({ settings }: { settings: Settings | null }) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-24 bg-footer text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Call to action */}
          <div>
            <h2 className="display text-4xl text-white md:text-5xl">
              Let&apos;s work
              <br />
              together
            </h2>
            <div className="mt-7">
              <SocialLinks socials={settings?.socials} variant="dark" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-white">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>
                <Link href="/#about" className="transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition-colors hover:text-accent">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-white">
              Get in touch
            </h3>
            <p className="mt-4 text-white/70">
              Have an idea, a question, or just want to say hi? Drop me a
              message.
            </p>
            <ul className="mt-5 space-y-2.5 text-white/70">
              {settings?.email ? (
                <li>
                  <a
                    href={`mailto:${settings.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {settings.email}
                  </a>
                </li>
              ) : null}
              {settings?.phone ? (
                <li>
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-accent"
                  >
                    {settings.phone}
                  </a>
                </li>
              ) : null}
              {settings?.location ? <li>{settings.location}</li> : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-7 text-sm text-white/50">
          © {year} Amit Pokharel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
