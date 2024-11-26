export function generateSlug(text: string) {
  const randomNumber = Math.floor(Math.random() * 10000).toString();
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");
  return `${slug}-${randomNumber}`;
}
