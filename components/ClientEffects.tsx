"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = prefersReducedMotion();

    // Scroll reveals: mark anything with data-reveal as visible when it enters viewport.
    const revealables = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    revealables.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.setProperty("--reveal-delay", delay);
    });

    let io: IntersectionObserver | null = null;
    let raf = 0;
    const parallaxEls = reduced
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    if (reduced || revealables.length === 0) {
      revealables.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((ent) => {
            if (!ent.isIntersecting) return;
            const el = ent.target as HTMLElement;
            el.classList.add("is-visible");
            io?.unobserve(ent.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
      );
      revealables.forEach((el) => io?.observe(el));
    }

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const shift = Math.min(80, window.scrollY * 0.08);
        parallaxEls.forEach((el) => {
          el.style.setProperty("--hero-shift", `${shift}px`);
        });
      });
    };

    if (parallaxEls.length) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      io?.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
      if (parallaxEls.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, [pathname]);

  return null;
}
