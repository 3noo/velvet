import Link from "next/link";

import { Faq } from "@/app/services/Faq";
import { MEDIA } from "@/lib/site";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <p className="kicker" data-reveal>
              Services
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              Deliberate packages for small teams.
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Pick one track, keep it focused, and ship something you can grow
              from. No drama, no bloat, no 80-page decks.
            </p>
            <div className="hero__actions" data-reveal data-reveal-delay="3">
              <Link className="btn btn--primary" href="/contact">
                Book a Call
              </Link>
              <Link className="btn" href="/work">
                See Work
              </Link>
            </div>

            <div className="divider" aria-hidden="true"></div>

            <div className="case__meta small" data-reveal data-reveal-delay="4">
              <span className="pill">2-6 weeks</span>
              <span className="pill">Flat pricing</span>
              <span className="pill">Async-first</span>
            </div>
          </div>

          <div className="media-frame" data-reveal data-reveal-delay="1">
            <img src={MEDIA.services} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Packages
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              Choose a track based on what you need now. Add-ons are available
              once the foundation is tight.
            </p>
          </div>

          <div className="cards-3">
            <article className="card" id="identity" data-reveal>
              <h3 className="h3">Identity Sprint</h3>
              <p>
                For founders who need a clear position and a visual system that
                feels premium, not precious.
              </p>
              <ul className="ticks">
                <li>Positioning + offer clarity</li>
                <li>Name, tone, and messaging map</li>
                <li>Logo suite + type + palette</li>
              </ul>
              <p className="small muted mt-18">Typical timeline: 2-3 weeks</p>
            </article>

            <article className="card" id="web" data-reveal data-reveal-delay="1">
              <h3 className="h3">Website Build</h3>
              <p>
                For brands that need a site that loads fast, reads clean, and
                quietly guides a yes.
              </p>
              <ul className="ticks">
                <li>UX + sitemap + wireframes</li>
                <li>Design system + responsive build</li>
                <li>Performance + SEO basics</li>
              </ul>
              <p className="small muted mt-18">Typical timeline: 3-5 weeks</p>
            </article>

            <article
              className="card"
              id="campaign"
              data-reveal
              data-reveal-delay="2"
            >
              <h3 className="h3">Campaign Kit</h3>
              <p>
                For launches and offers that need a landing page, email, and
                content kit that matches your brand.
              </p>
              <ul className="ticks">
                <li>Offer framing + page structure</li>
                <li>Landing page + 5-email sequence</li>
                <li>Creative direction + assets list</li>
              </ul>
              <p className="small muted mt-18">Typical timeline: 2-4 weeks</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <h2 className="h2" data-reveal>
              Add-ons (only when the base is strong)
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              The fastest path to luxury is restraint: fewer pages, better
              hierarchy, stronger proof.
            </p>
            <ul className="ticks" data-reveal data-reveal-delay="2">
              <li>Copy polish + tone alignment</li>
              <li>Email flows (welcome, nurture, re-engagement)</li>
              <li>Paid ad creative templates</li>
              <li>Content direction: what to shoot, what to write</li>
            </ul>
          </div>

          <div
            className="media-frame"
            data-reveal
            data-reveal-delay="1"
            aria-hidden="true"
          >
            <img src={MEDIA.services2} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              FAQ
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A few practical answers before we talk.
            </p>
          </div>

          <Faq />
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Want a recommendation?</h2>
          <p>
            Tell me what you&apos;re selling and what&apos;s currently not working. I&apos;ll
            recommend a starting package and the simplest next step.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Book a call
            </Link>
            <Link className="btn btn--ghostlight" href="/work">
              Browse work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
