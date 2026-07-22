"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader({ cvUrl }: { cvUrl?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 md:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="masthead text-xl md:text-2xl"
        >
          Amit Pokharel
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label text-ink-2 transition-colors hover:text-signal-deep"
            >
              {link.label}
            </Link>
          ))}
          {cvUrl ? (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label bg-ink px-4 py-2.5 text-white transition-colors hover:bg-signal hover:text-ink"
            >
              CV
            </a>
          ) : null}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="label md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="border-t-2 border-ink bg-paper px-5 pb-6 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display block border-b border-rule py-4 text-3xl"
            >
              {link.label}
            </Link>
          ))}
          {cvUrl ? (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-6 w-full"
            >
              Download CV
            </a>
          ) : null}
        </nav>
      ) : null}
    </header>
  );
}
