import { defineQuery } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

/* ---------------- Posts ---------------- */

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, publishedAt, tags, mainImage
  }
`);

export const RECENT_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id, title, "slug": slug.current, excerpt, publishedAt, tags, mainImage
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, excerpt, publishedAt, tags, mainImage, body
  }
`);

export const SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`);

/* ---------------- Projects ---------------- */

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id, title, category, image, description, url
  }
`);

/* ---------------- Testimonials ---------------- */

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id, quote, name, role, avatar
  }
`);

/* ---------------- Settings ---------------- */

export const SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    firstName, lastName, tagline, heroImage, cvUrl,
    aboutHeading, aboutBody, aboutImage, yearsOfExperience,
    email, phone, location, socials
  }
`);

/* ---------------- Types ---------------- */

type SanityImage = SanityImageSource & { alt?: string };

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  tags?: string[];
  mainImage?: SanityImage;
};

export type Post = PostListItem & {
  body?: PortableTextBlock[];
};

export type Project = {
  _id: string;
  title: string;
  category?: string;
  image: SanityImage;
  description?: string;
  url?: string;
};

export type Testimonial = {
  _id: string;
  quote: string;
  name: string;
  role?: string;
  avatar?: SanityImage;
};

export type Social = { platform?: string; url?: string };

export type Settings = {
  firstName?: string;
  lastName?: string;
  tagline?: string;
  heroImage?: SanityImage;
  cvUrl?: string;
  aboutHeading?: string;
  aboutBody?: PortableTextBlock[];
  aboutImage?: SanityImage;
  yearsOfExperience?: number;
  email?: string;
  phone?: string;
  location?: string;
  socials?: Social[];
};
