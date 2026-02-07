import Link from "next/link";

import { NAV, SITE } from "@/lib/site";
import { Year } from "@/components/Year";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="stack">
          <Link className="brand" href="/">
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
          <p className="small muted">
            Sharp hierarchy, fast pages, clean motion. Built for marketing teams
            who ship.
          </p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="stack">
          <p className="kicker">Get in touch</p>
          <a
            className="link"
            href={`mailto:${SITE.email}`}
            data-no-transition
          >
            {SITE.email}
          </a>
          <p className="small muted">Headquartered in Barcelona. Working worldwide.</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="small muted">
          © <Year /> {SITE.fullName}.
        </p>
        <p className="small muted">Barcelona HQ · CET/CEST</p>
      </div>
    </footer>
  );
}
