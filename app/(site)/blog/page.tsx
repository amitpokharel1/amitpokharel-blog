import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY, type PostListItem } from "@/sanity/lib/queries";
import { FeaturedPost, PostRow } from "@/components/site/PostCard";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes and essays on media, technology, and security.",
};

export default async function BlogPage() {
  const posts = (await sanityFetch<PostListItem[]>({ query: POSTS_QUERY })) ?? [];
  const [lead, ...rest] = posts;

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
      <div className="section-rule">
        <span className="label text-signal-deep">Writing</span>
        <h1 className="display mt-5 text-[clamp(3rem,10vw,7rem)]">
          Notes &amp; essays
        </h1>
      </div>

      {posts.length === 0 ? (
        <p className="label mt-12 border-2 border-dashed border-rule bg-paper-2 p-8 text-center text-muted">
          No posts yet — write your first at /studio
        </p>
      ) : (
        <>
          <div className="mt-14">
            <FeaturedPost post={lead} />
          </div>
          {rest.length > 0 ? (
            <div className="mt-16">
              {rest.map((post) => (
                <PostRow key={post._id} post={post} />
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
