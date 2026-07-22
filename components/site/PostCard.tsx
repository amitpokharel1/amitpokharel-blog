import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { formatDate, isoDate } from "@/lib/date";
import type { PostListItem } from "@/sanity/lib/queries";

/** Featured treatment — big image, oversized headline. */
export function FeaturedPost({ post }: { post: PostListItem }) {
  const cover = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").auto("format").url()
    : null;

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {cover ? (
          <div className="relative aspect-16/9 w-full overflow-hidden">
            <Image
              src={cover}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        ) : null}

        <div className="mt-6 md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="label text-signal-deep">
              <time dateTime={isoDate(post.publishedAt)}>
                {formatDate(post.publishedAt)}
              </time>
              {post.tags?.[0] ? ` — ${post.tags[0]}` : ""}
            </p>
            <h3 className="display mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
              {post.title}
            </h3>
          </div>
          {post.excerpt ? (
            <p className="mt-4 text-lg text-ink-2 md:col-span-4 md:mt-0 md:self-end">
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}

/** Index treatment — a ruled row, no image. */
export function PostRow({ post }: { post: PostListItem }) {
  return (
    <article className="group border-t border-rule">
      <Link
        href={`/posts/${post.slug}`}
        className="block py-6 transition-colors group-hover:bg-paper-2 md:grid md:grid-cols-12 md:gap-8 md:py-7"
      >
        <p className="label text-muted md:col-span-3">
          <time dateTime={isoDate(post.publishedAt)}>
            {formatDate(post.publishedAt)}
          </time>
        </p>
        <div className="md:col-span-9">
          <h3 className="display mt-2 text-2xl md:mt-0 md:text-3xl">
            {post.title}
          </h3>
          {post.excerpt ? (
            <p className="mt-2 max-w-2xl text-ink-2">{post.excerpt}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
