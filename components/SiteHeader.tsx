"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { SmartImage } from "@/components/SmartImage";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const leftNav = NAV.slice(0, 2);
  const rightNav = NAV.slice(2);
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
      <div className="announcement-bar" aria-label="Studio announcement">
        <div className="announcement-bar__track" aria-hidden="true">
          <span>{SITE.announcementText}</span>
          <span>{SITE.announcementText}</span>
          <span>{SITE.announcementText}</span>
        </div>
      </div>

      <div className="container nav">
        <nav className="nav__desktop nav__desktop--left" aria-label="Primary left">
          {leftNav.map((item) => (
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
        </nav>

        <Link
          className="brand"
          href="/"
          aria-label={`${SITE.fullName} home`}
          onClick={close}
        >
          <span className="brand__logo">
            <SmartImage
              src={SITE.logoDark}
              alt={SITE.fullName}
              loading="eager"
              decoding="sync"
              sizes="132px"
            />
          </span>
        </Link>

        <nav className="nav__desktop nav__desktop--right" aria-label="Primary right">
          {rightNav.map((item) => (
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
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__line"></span>
          <span className="nav-toggle__line"></span>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
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
        </nav>
      </div>
    </header>
  );
}
