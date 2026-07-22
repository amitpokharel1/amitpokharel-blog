import { sanityFetch } from "@/sanity/lib/fetch";
import {
  SETTINGS_QUERY,
  PROJECTS_QUERY,
  TESTIMONIALS_QUERY,
  RECENT_POSTS_QUERY,
  type Settings,
  type Project,
  type Testimonial,
  type PostListItem,
} from "@/sanity/lib/queries";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { BlogPreview } from "@/components/site/BlogPreview";

export default async function HomePage() {
  // Fetched together so one slow query doesn't hold up the others
  const [settings, projects, testimonials, posts] = await Promise.all([
    sanityFetch<Settings>({ query: SETTINGS_QUERY }),
    sanityFetch<Project[]>({ query: PROJECTS_QUERY }),
    sanityFetch<Testimonial[]>({ query: TESTIMONIALS_QUERY }),
    sanityFetch<PostListItem[]>({ query: RECENT_POSTS_QUERY }),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <About settings={settings} />
      <Portfolio projects={projects ?? []} />
      <Testimonials items={testimonials ?? []} />
      <BlogPreview posts={posts ?? []} />
    </>
  );
}
