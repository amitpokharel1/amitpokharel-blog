import { sanityFetch } from "@/sanity/lib/fetch";
import { SETTINGS_QUERY, type Settings } from "@/sanity/lib/queries";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await sanityFetch<Settings>({ query: SETTINGS_QUERY });

  return (
    <>
      <SiteHeader cvUrl={settings?.cvUrl} />
      <div className="flex-1">{children}</div>
      <SiteFooter settings={settings} />
    </>
  );
}
