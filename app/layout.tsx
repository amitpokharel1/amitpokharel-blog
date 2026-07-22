import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Amit Pokharel";
const SITE_DESCRIPTION =
  "Amit Pokharel — news anchor, presenter, and IT professional based in Kathmandu. Writing on media, technology, and security.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amitpokharel.com"),
  title: {
    default: `${SITE_NAME} — Anchor, Presenter & IT Professional`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Anchor, Presenter & IT Professional`,
    description: SITE_DESCRIPTION,
    url: "https://amitpokharel.com",
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
