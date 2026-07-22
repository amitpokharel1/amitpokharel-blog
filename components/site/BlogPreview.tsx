import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { FeaturedPost, PostRow } from "./PostCard";
import type { PostListItem } from "@/sanity/lib/queries";

export function BlogPreview({ posts }: { posts: PostListItem[] }) {
  const [lead, ...rest] = posts;

  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionHead
          label="Writing"
          title="Notes & essays"
          intro="On media, technology, and whatever I'm learning at the moment."
        />

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
              <div className="mt-14">
                {rest.map((post) => (
                  <PostRow key={post._id} post={post} />
                ))}
              </div>
            ) : null}

            <div className="mt-12 border-t-2 border-ink pt-8">
              <Link href="/blog" className="btn btn-solid">
                All writing
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
