import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { formatDate, isoDate } from "@/lib/date";
import type { PostListItem } from "@/sanity/lib/queries";

export function PostCard({ post }: { post: PostListItem }) {
  const cover = post.mainImage
    ? urlFor(post.mainImage).width(900).height(650).fit("crop").auto("format").url()
    : null;

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {cover ? (
          <div className="relative aspect-[9/6.5] w-full overflow-hidden rounded-2xl bg-surface-2">
            <Image
              src={cover}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[9/6.5] w-full rounded-2xl bg-surface-2" />
        )}

        <time
          className="mt-5 block text-sm text-muted"
          dateTime={isoDate(post.publishedAt)}
        >
          {formatDate(post.publishedAt)}
        </time>

        <h3 className="display mt-1.5 text-2xl decoration-accent decoration-2 underline-offset-4 group-hover:underline">
          {post.title}
        </h3>

        {post.excerpt ? (
          <p className="mt-2 text-ink-2">{post.excerpt}</p>
        ) : null}
      </Link>
    </article>
  );
}
