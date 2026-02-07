"use client";

import { useEffect, useRef } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function ContactSpectacle() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const card = root.closest<HTMLElement>(".card--seal");
    if (!card) return;

    const reduced = prefersReducedMotion();
    let raf = 0;
    let active = false;
    let activeUntil = 0;
    let burstTimer: number | undefined;

    const setVars = (x: number, y: number) => {
      const cx = clamp01(x);
      const cy = clamp01(y);
      const dx = cx - 0.5;
      const dy = cy - 0.5;

      card.style.setProperty("--seal-x", cx.toFixed(4));
      card.style.setProperty("--seal-y", cy.toFixed(4));
      card.style.setProperty("--seal-dx", dx.toFixed(4));
      card.style.setProperty("--seal-dy", dy.toFixed(4));
    };

    // Default to center so the first paint is stable.
    setVars(0.5, 0.5);

    const setFromClient = (clientX: number, clientY: number) => {
      const r = card.getBoundingClientRect();
      const x = (clientX - r.left) / Math.max(1, r.width);
      const y = (clientY - r.top) / Math.max(1, r.height);
      setVars(x, y);
    };

    const burst = () => {
      card.dataset.sealBurst = "true";
      window.clearTimeout(burstTimer);
      burstTimer = window.setTimeout(() => {
        delete card.dataset.sealBurst;
      }, 720);
    };

    const onEnter = () => {
      active = true;
      card.dataset.sealActive = "true";
    };

    const onLeave = () => {
      active = false;
      delete card.dataset.sealActive;
      activeUntil = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (reduced) return;
      activeUntil = performance.now() + 900;
      setFromClient(e.clientX, e.clientY);
    };

    const onDown = () => {
      if (reduced) return;
      burst();
    };

    const onFocusIn = () => {
      if (reduced) return;
      burst();
    };

    card.addEventListener("pointerenter", onEnter);
    card.addEventListener("pointerleave", onLeave);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerdown", onDown);
    card.addEventListener("focusin", onFocusIn);

    if (!reduced) {
      const loop = (t: number) => {
        // Autopilot motion unless the user is actively moving a pointer.
        if (!active || t > activeUntil) {
          const x = 0.5 + Math.sin(t / 1400) * 0.22;
          const y = 0.5 + Math.cos(t / 1700) * 0.18;
          setVars(x, y);
        }
        raf = window.requestAnimationFrame(loop);
      };
      raf = window.requestAnimationFrame(loop);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(burstTimer);
      card.removeEventListener("pointerenter", onEnter);
      card.removeEventListener("pointerleave", onLeave);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  return (
    <div ref={ref} className="contact-seal" aria-hidden="true">
      <div className="contact-seal__tilt">
        <div className="contact-seal__holo" />
        <div className="contact-seal__marks" />
        <div className="contact-seal__grain" />
        <svg
          className="contact-seal__stroke"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          focusable="false"
          aria-hidden="true"
        >
          <rect
            className="contact-seal__border"
            x="1"
            y="1"
            width="98"
            height="98"
            rx="6"
            ry="6"
            pathLength="100"
          />
          <rect
            className="contact-seal__trace"
            x="1"
            y="1"
            width="98"
            height="98"
            rx="6"
            ry="6"
            pathLength="100"
          />
        </svg>
      </div>
    </div>
  );
}

