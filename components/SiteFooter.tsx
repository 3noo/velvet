import Link from "next/link";

import { SmartImage } from "@/components/SmartImage";
import { SocialLinks } from "@/components/SocialLinks";
import { NAV, SITE } from "@/lib/site";
import { Year } from "@/components/Year";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: Brand (Left/Top) */}
        <div className="footer-col footer-col--brand">
          <Link className="footer-brand" href="/">
            <span className="footer-brand__logo">
              <SmartImage
                src={SITE.logoLight}
                alt={SITE.fullName}
                loading="lazy"
                sizes="180px"
              />
            </span>
          </Link>

          <p className="footer-statement">{SITE.footerStatement}</p>
          <SocialLinks className="footer-socials" />
        </div>

        {/* Col 2: Nav (Center/Middle) */}
        <nav className="footer-col footer-col--nav footer-nav" aria-label="Footer navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Col 3: Contact (Right/Bottom) */}
        <div className="footer-col footer-col--contact footer-contact">
          <span className="footer-contact__item">{SITE.location}</span>
          <a
            className="footer-contact__item"
            href={`mailto:${SITE.email}`}
            data-no-transition
          >
            {SITE.email}
          </a>
          <p className="footer-copy">
            © <Year /> {SITE.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
