import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Amit Pokharel";
const SITE_DESCRIPTION =
  "Writing on technology, security, and building things — by Amit Pokharel.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amitpokharel.com"),
  title: {
    default: `${SITE_NAME} — Writing`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Writing`,
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
