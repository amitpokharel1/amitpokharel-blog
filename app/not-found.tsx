import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[75vh] w-full max-w-[1400px] flex-col justify-center px-5 py-20 md:px-10">
      <span className="label text-signal-deep">Error 404</span>
      <h1 className="masthead mt-6 text-[clamp(3rem,12vw,9rem)]">
        Page not
        <br />
        found
      </h1>
      <p className="mt-8 max-w-md text-xl text-ink-2">
        This page doesn&apos;t exist, or it moved somewhere else.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn btn-solid">
          Back to home
        </Link>
      </div>
    </main>
  );
}
