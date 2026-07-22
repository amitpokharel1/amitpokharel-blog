import type { Social } from "@/sanity/lib/queries";

export function SocialLinks({
  socials,
  variant = "light",
}: {
  socials?: Social[];
  variant?: "light" | "dark";
}) {
  const items = (socials ?? []).filter((s) => s.url && s.platform);
  if (items.length === 0) return null;

  const styles =
    variant === "dark"
      ? "border-white/30 text-white hover:bg-signal hover:border-signal hover:text-ink"
      : "border-ink text-ink hover:bg-signal hover:border-signal";

  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((s) => (
        <li key={`${s.platform}-${s.url}`}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`label inline-block border-2 px-4 py-2 transition-colors ${styles}`}
          >
            {s.platform}
          </a>
        </li>
      ))}
    </ul>
  );
}
