import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POST_QUERY, SLUGS_QUERY, type Post } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@/components/PortableText";
import { formatDate, isoDate } from "@/lib/date";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs =
    (await sanityFetch<{ slug: string }[]>({ query: SLUGS_QUERY })) ?? [];
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Post>({ query: POST_QUERY, params: { slug } });
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await sanityFetch<Post>({ query: POST_QUERY, params: { slug } });

  if (!post) notFound();

  const cover = post.mainImage
    ? urlFor(post.mainImage).width(1800).height(1000).fit("crop").auto("format").url()
    : null;

  return (
    <article>
      {/* Headline block */}
      <div className="mx-auto max-w-[1400px] px-5 pt-12 md:px-10 md:pt-16">
        <Link href="/blog" className="label text-muted hover:text-signal-deep">
          ← All writing
        </Link>

        <div className="section-rule mt-8">
          <p className="label text-signal-deep">
            <time dateTime={isoDate(post.publishedAt)}>
              {formatDate(post.publishedAt)}
            </time>
            {post.tags?.length ? ` — ${post.tags.join(", ")}` : ""}
          </p>
          <h1 className="display mt-5 max-w-5xl text-[clamp(2.5rem,8vw,6rem)]">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-7 max-w-2xl text-2xl leading-snug text-ink-2">
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </div>

      {/* Full-bleed cover */}
      {cover ? (
        <div className="relative mt-12 aspect-16/9 w-full md:aspect-21/9">
          <Image
            src={cover}
            alt={post.mainImage?.alt || post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ) : null}

      {/* Body — narrow measure for reading */}
      {post.body ? (
        <div className="mx-auto max-w-[46rem] px-5 py-16 md:px-0 md:py-24">
          <div className="article article--lead">
            <PortableText value={post.body} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
