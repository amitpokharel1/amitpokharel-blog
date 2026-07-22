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
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").auto("format").url()
    : null;

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-accent-text"
      >
        ← All posts
      </Link>

      <header className="mb-10 mt-7">
        <div className="flex flex-wrap items-center gap-3">
          <time className="text-sm text-muted" dateTime={isoDate(post.publishedAt)}>
            {formatDate(post.publishedAt)}
          </time>
          {post.tags?.map((tag) => (
            <span key={tag} className="text-sm text-accent-text">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="display mt-4 text-4xl sm:text-5xl">{post.title}</h1>
        {post.excerpt ? (
          <p className="mt-5 text-xl text-muted">{post.excerpt}</p>
        ) : null}
      </header>

      {cover ? (
        <Image
          src={cover}
          alt={post.mainImage?.alt || post.title}
          width={1600}
          height={900}
          priority
          className="mb-12 h-auto w-full rounded-2xl"
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
