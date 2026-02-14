"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  by: string;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function TestimonialsRail({
  testimonials,
  intervalMs = 6800,
  autoplay = false,
  "aria-label": ariaLabel = "Testimonials"
}: {
  testimonials: readonly Testimonial[];
  intervalMs?: number;
  autoplay?: boolean;
  "aria-label"?: string;
}) {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) return;
    if (!autoplay) return;
    if (testimonials.length <= 1) return;

    const tick = () => {
      const canScroll = el.scrollWidth > el.clientWidth + 4;
      if (!canScroll) return;
      setIndex((i) => (i + 1) % testimonials.length);
    };

    const t = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(t);
  }, [autoplay, intervalMs, reduced, testimonials.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (testimonials.length <= 1) return;

    const slides = Array.from(
      el.querySelectorAll<HTMLElement>("[data-testimonial-slide]")
    );
    const target = slides[index % slides.length];
    if (!target) return;

    const canScroll = el.scrollWidth > el.clientWidth + 4;
    if (!canScroll) return;

    // Keep user swipe/scroll available; just advance gently.
    el.scrollTo({
      left: target.offsetLeft,
      behavior: reduced ? "auto" : "smooth"
    });
  }, [index, reduced, testimonials.length]);

  return (
    <div className="testimonials" aria-label={ariaLabel}>
      <div className="testimonials-rail" ref={ref}>
        {testimonials.map((t, idx) => (
          <article
            className="testimonial-card"
            data-testimonial-slide
            data-reveal
            data-reveal-delay={String(idx)}
            key={`${t.by}-${idx}`}
          >
            <div className="testimonial-card__inner">
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="testimonial-card__by">— {t.by}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
