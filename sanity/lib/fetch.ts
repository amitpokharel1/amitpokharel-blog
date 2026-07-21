import { client } from "./client";

type FetchOptions = {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number; // seconds before re-checking Sanity for new content
};

// Wraps client.fetch so a network/config hiccup returns null (empty state)
// instead of taking the whole page down. Returns null on any failure.
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
}: FetchOptions): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch (error) {
    console.error("[sanity] fetch failed:", error);
    return null;
  }
}
