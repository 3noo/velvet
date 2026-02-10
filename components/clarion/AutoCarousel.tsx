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

export function AutoCarousel({
  items,
  intervalMs = 3600,
  sizes,
  maxWidth,
  "aria-label": ariaLabel = "Carousel"
}: AutoCarouselProps) {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (items.length <= 1) return;

    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(t);
  }, [items.length, intervalMs, reduced]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Scroll to the next slide, but keep swipe/scroll available for the user.
    const w = el.clientWidth;
    el.scrollTo({ left: w * index, behavior: reduced ? "auto" : "smooth" });
  }, [index, reduced]);

  if (items.length === 0) return null;

  return (
    <div className="carousel" ref={ref} aria-label={ariaLabel}>
      {items.map((item, idx) => (
        <div className="carousel__slide" key={`${item.src}-${idx}`}>
          <SmartImage
            src={item.src}
            alt={item.alt ?? ""}
            sizes={sizes}
            maxWidth={maxWidth}
            loading={idx < 1 ? "eager" : "lazy"}
            fetchPriority={idx < 1 ? "high" : "low"}
          />
        </div>
      ))}
    </div>
  );
}

