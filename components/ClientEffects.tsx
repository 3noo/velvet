"use client";

import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const body = document.body;
    body.classList.remove("is-leaving");

    const onPageShow = () => body.classList.remove("is-leaving");
    window.addEventListener("pageshow", onPageShow);

    // Scroll reveals: mark anything with data-reveal as visible when it enters viewport.
    const revealables = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    revealables.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.setProperty("--reveal-delay", delay);
    });

    let io: IntersectionObserver | null = null;
    if (reduced || revealables.length === 0) {
      revealables.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((ent) => {
            if (!ent.isIntersecting) return;
            (ent.target as HTMLElement).classList.add("is-visible");
            io?.unobserve(ent.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );
      revealables.forEach((el) => io?.observe(el));
    }

    // Page transitions: fade-out then client-side navigate.
    const onClickCapture = (e: MouseEvent) => {
      if (reduced) return;
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const a = target?.closest("a");
      if (!a) return;
      if (a.hasAttribute("data-no-transition")) return;

      const href = a.getAttribute("href");
      if (!href) return;
      if (a.hasAttribute("download")) return;
      if (a.getAttribute("target") === "_blank") return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      e.preventDefault();
      body.classList.add("is-leaving");
      window.setTimeout(() => {
        router.push(url.pathname + url.search + url.hash);
      }, 140);
    };

    document.addEventListener("click", onClickCapture, true);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("click", onClickCapture, true);
      io?.disconnect();
    };
  }, [pathname, router]);

  return null;
}

