export function formatDate(value?: string): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function isoDate(value?: string): string {
  if (!value) return "";
  return new Date(value).toISOString().split("T")[0];
}
