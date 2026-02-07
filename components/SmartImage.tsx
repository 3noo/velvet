import type { ImgHTMLAttributes } from "react";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  sizes?: string;
  /**
   * Caps the generated `srcset` so small images (like gallery thumbs) don't
   * offer huge widths that will never be displayed.
   */
  maxWidth?: number;
};

function toNum(v: string | null) {
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function parseUnsplash(src: string) {
  try {
    const url = new URL(src);
    if (url.hostname !== "images.unsplash.com") return null;

    const w = toNum(url.searchParams.get("w"));
    if (!w || w <= 0) return null;

    const h = toNum(url.searchParams.get("h"));
    const q = toNum(url.searchParams.get("q")) ?? 80;

    const aspect = h && h > 0 ? h / w : null;
    const base = `${url.origin}${url.pathname}`;

    return { base, w, aspect, q: Math.max(45, Math.min(90, q)) };
  } catch {
    return null;
  }
}

function buildUnsplash(base: string, w: number, aspect: number | null, q: number) {
  const h = aspect ? Math.max(1, Math.round(w * aspect)) : null;
  return `${base}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=${q}`;
}

function pickWidths(max: number) {
  const candidates = [320, 480, 640, 768, 960, 1200, 1600, 1920, 2400];
  const widths = candidates.filter((n) => n < max);
  widths.push(max);
  return Array.from(new Set(widths)).sort((a, b) => a - b);
}

export function SmartImage({
  src,
  sizes,
  maxWidth,
  loading,
  decoding,
  ...rest
}: SmartImageProps) {
  const parsed = parseUnsplash(src);
  const finalLoading = loading ?? "lazy";
  const finalDecoding = decoding ?? "async";

  if (!parsed) {
    return (
      <img
        {...rest}
        src={src}
        sizes={sizes}
        loading={finalLoading}
        decoding={finalDecoding}
      />
    );
  }

  const cap = Math.max(1, Math.min(maxWidth ?? parsed.w, parsed.w));
  const widths = pickWidths(cap);

  // Pick a reasonable fallback `src` (middle-ish) so we don't default to the largest file.
  const fallbackW = widths[Math.min(widths.length - 1, Math.floor(widths.length / 2))];
  const fallbackSrc = buildUnsplash(parsed.base, fallbackW, parsed.aspect, parsed.q);

  const srcSet = widths
    .map((w) => `${buildUnsplash(parsed.base, w, parsed.aspect, parsed.q)} ${w}w`)
    .join(", ");

  return (
    <img
      {...rest}
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes ?? "100vw"}
      loading={finalLoading}
      decoding={finalDecoding}
    />
  );
}

