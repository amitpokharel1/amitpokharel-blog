import {
  PortableText as BasePortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

type ImageValue = SanityImageSource & { alt?: string; caption?: string };

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      const url = urlFor(value).width(1400).fit("max").auto("format").url();
      return (
        <figure>
          <Image
            src={url}
            alt={value.alt || ""}
            width={1400}
            height={900}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {value.caption ? <figcaption>{value.caption}</figcaption> : null}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <BasePortableText value={value} components={components} />;
}
