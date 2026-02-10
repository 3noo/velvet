import Link from "next/link";

import { NAV, SITE } from "@/lib/site";
import { Year } from "@/components/Year";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-center">
        <Link className="footer-brand" href="/">
          <span className="footer-brand__name">{SITE.fullName}</span>
          <span className="footer-brand__tag">{SITE.footerTagline}</span>
        </Link>

        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact" aria-label="Contact">
          <span className="footer-contact__item">{SITE.location}</span>
          <a
            className="footer-contact__item"
            href={`mailto:${SITE.email}`}
            data-no-transition
          >
            {SITE.email}
          </a>
          {SITE.whatsappUrl ? (
            <a
              className="footer-contact__item"
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-no-transition
            >
              WhatsApp
            </a>
          ) : (
            <span className="footer-contact__item">WhatsApp</span>
          )}
          {SITE.linkedinUrl ? (
            <a
              className="footer-contact__item"
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              data-no-transition
            >
              LinkedIn
            </a>
          ) : (
            <span className="footer-contact__item">LinkedIn</span>
          )}
        </div>

        <p className="footer-copy">
          © <Year /> {SITE.fullName}
        </p>
      </div>
    </footer>
  );
}
