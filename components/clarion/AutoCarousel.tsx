"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { SmartImage } from "@/components/SmartImage";

type CarouselItem = {
  src: string;
  alt?: string;
};

export type AutoCarouselProps = {
  items: CarouselItem[];
  intervalMs?: number;
  autoplay?: boolean;
  sizes?: string;
  maxWidth?: number;
  "aria-label"?: string;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

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

function preloadSrcFor(
  src: string,
  maxWidth: number | undefined,
  targetW: number
) {
  const parsed = parseUnsplash(src);
  if (!parsed) return src;

  const cap = Math.max(1, Math.min(maxWidth ?? parsed.w, parsed.w));
  const widths = pickWidths(cap);
  const desired = Math.min(cap, Math.max(320, targetW));
  const chosen = widths.find((w) => w >= desired) ?? cap;
  return buildUnsplash(parsed.base, chosen, parsed.aspect, parsed.q);
}

export function AutoCarousel({
  items,
  intervalMs = 5600,
  autoplay = false,
  sizes,
  maxWidth,
  "aria-label": ariaLabel = "Carousel"
}: AutoCarouselProps) {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const ref = useRef<HTMLDivElement | null>(null);
  const preloaded = useRef<Set<string>>(new Set());
  const pendingProgrammaticScroll = useRef(false);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setActive(true), 0);
      return () => window.clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          setActive(true);
          io.disconnect();
          break;
        }
      },
      { root: null, rootMargin: "800px 0px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!active) return;
    if (items.length <= 1) return;

    let raf = 0;
    const onScroll = () => {
      pendingProgrammaticScroll.current = false;
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const w = el.clientWidth || 1;
        const next = Math.round(el.scrollLeft / w);
        const clamped = Math.max(0, Math.min(items.length - 1, next));
        setIndex((prev) => (prev === clamped ? prev : clamped));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [active, items.length]);

  useEffect(() => {
    if (!active) return;
    if (reduced) return;
    if (!autoplay) return;
    if (items.length <= 1) return;

    const t = window.setInterval(() => {
      pendingProgrammaticScroll.current = true;
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(t);
  }, [active, autoplay, items.length, intervalMs, reduced]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!active) return;
    if (!pendingProgrammaticScroll.current) return;
    pendingProgrammaticScroll.current = false;

    // Scroll to the next slide, but keep swipe/scroll available for the user.
    const w = el.clientWidth;
    el.scrollTo({ left: w * index, behavior: reduced ? "auto" : "smooth" });
  }, [active, index, reduced]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!active) return;
    if (items.length === 0) return;

    const w = el.clientWidth || 0;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const targetW = Math.round(w * dpr);

    const len = items.length;
    const want = [index, (index + 1) % len, (index + 2) % len];
    for (const idx of want) {
      const src = items[idx]?.src;
      if (!src) continue;

      const url = preloadSrcFor(src, maxWidth, targetW);
      if (preloaded.current.has(url)) continue;
      preloaded.current.add(url);

      const img = new Image();
      img.decoding = "async";
      img.src = url;
    }
  }, [active, index, items, maxWidth]);

  if (items.length === 0) return null;

  const len = items.length;
  const eager = active
    ? new Set([index % len, (index + 1) % len, (index + 2) % len])
    : null;

  return (
    <div className="carousel" ref={ref} aria-label={ariaLabel}>
      {items.map((item, idx) => (
        <div className="carousel__slide" key={`${item.src}-${idx}`}>
          <SmartImage
            src={item.src}
            alt={item.alt ?? ""}
            sizes={sizes}
            maxWidth={maxWidth}
            loading={eager ? (eager.has(idx) ? "eager" : "lazy") : "lazy"}
            fetchPriority={active && idx === index ? "high" : "low"}
          />
        </div>
      ))}
    </div>
  );
}
