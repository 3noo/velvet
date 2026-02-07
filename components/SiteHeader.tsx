"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const close = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link
          className="brand"
          href="/"
          aria-label={`${SITE.fullName} home`}
          onClick={close}
        >
          <img
            className="brand__mark"
            src="/img/mark.svg"
            alt=""
            aria-hidden="true"
          />
          <span className="brand__word">
            <span className="brand__name">{SITE.name}</span>
            <span className="brand__tag">{SITE.tagline}</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav
          className="nav__panel"
          id={panelId}
          data-nav-panel
          data-open={open ? "true" : "false"}
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-nav
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn btn--primary" href="/contact" onClick={close}>
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
