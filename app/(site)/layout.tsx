import Link from "next/link";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-baseline justify-between px-6 py-6">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink"
          >
            Amit Pokharel
          </Link>
          <nav className="meta flex gap-6">
            <Link href="/" className="transition-colors hover:text-signal-ink">
              Writing
            </Link>
            <a
              href="https://github.com/amitpokharel"
              className="transition-colors hover:text-signal-ink"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14 md:py-20">
        {children}
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-8">
          <p className="meta meta-signal">
            © {new Date().getFullYear()} Amit Pokharel
          </p>
          <p className="meta" style={{ textTransform: "none" }}>
            Built with Next.js &amp; Sanity.
          </p>
        </div>
      </footer>
    </>
  );
}
