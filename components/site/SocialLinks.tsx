import type { Social } from "@/sanity/lib/queries";

// Simple label pills — no icon library needed, and they stay readable
// whatever platform you add later.
export function SocialLinks({
  socials,
  variant = "light",
}: {
  socials?: Social[];
  variant?: "light" | "dark";
}) {
  const items = (socials ?? []).filter((s) => s.url && s.platform);
  if (items.length === 0) return null;

  const base =
    "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-[family-name:var(--font-display)] transition-colors";
  const styles =
    variant === "dark"
      ? "border-white/25 text-white/85 hover:border-accent hover:text-accent"
      : "border-line text-ink-2 hover:border-accent hover:text-accent-text";

  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((s) => (
        <li key={`${s.platform}-${s.url}`}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} ${styles}`}
          >
            {s.platform}
          </a>
        </li>
      ))}
    </ul>
  );
}
