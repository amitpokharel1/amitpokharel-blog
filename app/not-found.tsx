import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-6 py-20">
      <p className="meta meta-signal mb-3">Error 404</p>
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink">
        This page wandered off.
      </h1>
      <p className="mt-4 text-ink-soft">
        The post you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="meta mt-8 inline-block text-ink transition-colors hover:text-signal-ink"
      >
        ← Back to writing
      </Link>
    </main>
  );
}
