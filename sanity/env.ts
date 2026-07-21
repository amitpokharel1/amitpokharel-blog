// Reads your Sanity project settings from environment variables.
// These are set for you in Vercel (and in .env.local for local runs).
// Falls back to safe placeholders so the site can still build before
// you've connected your project — it just won't show content yet.

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
