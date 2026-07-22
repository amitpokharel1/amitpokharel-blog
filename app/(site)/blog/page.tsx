import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY, type PostListItem } from "@/sanity/lib/queries";
import { PostCard } from "@/components/site/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on media, technology, and security by Amit Pokharel.",
};

export default async function BlogPage() {
  const posts = (await sanityFetch<PostListItem[]>({ query: POSTS_QUERY })) ?? [];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Blog</p>
      <h1 className="display mt-3 text-5xl sm:text-6xl">All writing</h1>
      <p className="mt-5 max-w-xl text-lg text-ink-2">
        Notes on media, technology, and whatever I&apos;m learning at the
        moment.
      </p>

      {posts.length === 0 ? (
        <p className="mt-14 max-w-md rounded-2xl border border-dashed border-line bg-surface-2 p-8 text-sm text-muted">
          No posts yet. Head to{" "}
          <Link href="/studio" className="text-accent-text underline">
            /studio
          </Link>{" "}
          to write your first one.
        </p>
      ) : (
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
