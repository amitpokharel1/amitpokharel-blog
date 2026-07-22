import Link from "next/link";
import { PostCard } from "./PostCard";
import type { PostListItem } from "@/sanity/lib/queries";

export function BlogPreview({ posts }: { posts: PostListItem[] }) {
  return (
    <section className="bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Blog</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl md:text-6xl">
            Latest writing
          </h2>
        </div>

        {posts.length === 0 ? (
          <p className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-line bg-surface p-8 text-center text-sm text-muted">
            No posts yet. Head to{" "}
            <Link href="/studio" className="text-accent-text underline">
              /studio
            </Link>{" "}
            to write your first one.
          </p>
        ) : (
          <>
            <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <div className="mt-14 text-center">
              <Link href="/blog" className="btn btn-solid">
                Read all posts
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
