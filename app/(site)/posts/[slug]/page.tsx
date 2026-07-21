import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  POST_QUERY,
  SLUGS_QUERY,
  type Post,
} from "@/sanity/lib/queries";
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
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").auto("format").url()
    : null;

  return (
    <article>
      <Link
        href="/"
        className="meta transition-colors hover:text-signal-ink"
      >
        ← Back to writing
      </Link>

      <header className="mb-10 mt-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <time className="meta meta-signal" dateTime={isoDate(post.publishedAt)}>
            {formatDate(post.publishedAt)}
          </time>
          {post.tags?.map((tag) => (
            <span key={tag} className="meta text-signal-ink">
              / {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
          {post.title}
        </h1>
        {post.excerpt ? (
          <p className="mt-5 text-xl text-muted">{post.excerpt}</p>
        ) : null}
      </header>

      {cover ? (
        <Image
          src={cover}
          alt={
            (post.mainImage as { alt?: string })?.alt || post.title
          }
          width={1600}
          height={900}
          priority
          className="mb-12 h-auto w-full"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      ) : null}

      {post.body ? (
        <div className="article">
          <PortableText value={post.body} />
        </div>
      ) : null}
    </article>
  );
}
