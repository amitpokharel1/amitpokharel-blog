import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY, type PostListItem } from "@/sanity/lib/queries";
import { formatDate, isoDate } from "@/lib/date";

export default async function HomePage() {
  const posts = (await sanityFetch<PostListItem[]>({ query: POSTS_QUERY })) ?? [];

  return (
    <div>
      {/* Intro */}
      <section className="mb-16 md:mb-24">
        <p className="meta meta-signal mb-5">Notes &amp; essays</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
          Writing about technology,
          <br />
          security, and building things.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          A running notebook of what I&apos;m learning and making. Occasional,
          unpolished, and honest.
        </p>
      </section>

      {/* Post list */}
      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="border-t border-line">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/posts/${post.slug}`}
                className="group block border-b border-line py-8 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <time className="meta" dateTime={isoDate(post.publishedAt)}>
                    {formatDate(post.publishedAt)}
                  </time>
                  {post.tags?.slice(0, 1).map((tag) => (
                    <span key={tag} className="meta text-signal-ink">
                      / {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink decoration-signal decoration-2 underline-offset-4 group-hover:underline md:text-3xl">
                  {post.title}
                </h2>
                {post.excerpt ? (
                  <p className="mt-2 max-w-2xl text-ink-soft">{post.excerpt}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="border-t border-line py-16">
      <p className="meta meta-signal mb-3">No posts yet</p>
      <p className="max-w-md text-ink-soft">
        Your writing dashboard is ready. Head to{" "}
        <Link
          href="/studio"
          className="text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal-ink"
        >
          /studio
        </Link>{" "}
        to write and publish your first post — it&apos;ll appear here right away.
      </p>
    </div>
  );
}
