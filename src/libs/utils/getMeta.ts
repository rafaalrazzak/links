import { validateURL } from "../helpers";

export async function getMeta(url: string) {
  const { isValid } = validateURL(url);
  if (isValid) {
    const res = await fetch(
      `https://oge.now.sh/api?url=${decodeURIComponent(url)}`,
    );
    return await res.json();
  }

  return {};
}
