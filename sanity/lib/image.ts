import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

// Turn a Sanity image reference into a real URL, e.g. urlFor(img).width(1200).url()
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
