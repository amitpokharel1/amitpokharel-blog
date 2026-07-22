import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col justify-center px-5 py-20 md:px-8">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-3 text-5xl">This page wandered off.</h1>
      <p className="mt-4 text-ink-2">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <div className="mt-9">
        <Link href="/" className="btn btn-solid">
          Back to home
        </Link>
      </div>
    </main>
  );
}
