import Link from "next/link";

import { MEDIA } from "@/lib/site";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <p className="kicker" data-reveal>
              About
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              Small studio. Strict taste. Fast execution.
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Velvet is built for teams who want marketing that reads like
              craft, not noise. We focus on hierarchy, typography, and
              performance that makes the work feel premium.
            </p>

            <div className="divider" aria-hidden="true"></div>

            <div className="stack" data-reveal data-reveal-delay="3">
              <p className="small muted">
                The easiest way to make a site feel expensive is to cut
                everything that doesn&apos;t matter, then perfect what&apos;s left: type
                scale, spacing, motion, and proof.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--primary" href="/services">
                  How we help
                </Link>
                <Link className="btn" href="/contact">
                  Start a project
                </Link>
              </div>
            </div>
          </div>

          <div className="media-frame" data-reveal data-reveal-delay="1">
            <img src={MEDIA.aboutHero} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Principles
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A simple standard for every build.
            </p>
          </div>

          <div className="cards-3">
            <article className="card" data-reveal>
              <h3 className="h3">Clarity beats clever</h3>
              <p>
                We write and design so a first-time visitor can understand the
                offer in seconds.
              </p>
              <ul className="ticks">
                <li>One primary CTA per section</li>
                <li>Proof close to the claim</li>
                <li>Fewer words, better words</li>
              </ul>
            </article>

            <article className="card" data-reveal data-reveal-delay="1">
              <h3 className="h3">Type is the brand</h3>
              <p>
                Typography and spacing do the heavy lifting. Images support,
                they don&apos;t rescue.
              </p>
              <ul className="ticks">
                <li>Consistent scale + rhythm</li>
                <li>Editorial hierarchy</li>
                <li>Subtle, purposeful motion</li>
              </ul>
            </article>

            <article className="card" data-reveal data-reveal-delay="2">
              <h3 className="h3">Performance is a feature</h3>
              <p>
                Fast feels premium. We keep the codebase small and the
                interactions snappy.
              </p>
              <ul className="ticks">
                <li>Lazy loading by default</li>
                <li>Accessible interactions</li>
                <li>Clean static delivery</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Studio snapshots
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              Simple frames that support the copy, not distract from it.
            </p>
          </div>

          <div className="gallery gallery--tight" data-reveal data-reveal-delay="2">
            {MEDIA.gallery.slice(0, 4).map((src, idx) => (
              <div key={`${src}-${idx}`} className="gallery__item">
                <img src={src} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__media" aria-hidden="true">
          <img src={MEDIA.aboutBand} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="band__shade" aria-hidden="true"></div>

        <div className="container band__content">
          <p className="kicker" data-reveal>
            ON PURPOSE
          </p>
          <h2 className="h2 h2--light" data-reveal data-reveal-delay="1">
            Quiet brands still need sharp structure.
          </h2>
          <p className="lede lede--light" data-reveal data-reveal-delay="2">
            We keep the visuals restrained so the message can land. When the
            hierarchy is clean, people feel guided instead of pushed.
          </p>
          <div className="hero__actions" data-reveal data-reveal-delay="3">
            <Link className="btn btn--light" href="/work">
              See examples
            </Link>
            <Link className="btn btn--ghostlight" href="/contact">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <h2 className="h2" data-reveal>
              What you get
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A tidy system you can maintain: components, spacing rules, and
              copy patterns that scale.
            </p>

            <div className="divider" aria-hidden="true"></div>

            <div className="stack" data-reveal data-reveal-delay="2">
              <p className="small">
                <strong>Deliverables vary by package</strong>, but every project
                ships with a simple handoff: what was built, why it works, and
                what to measure next.
              </p>
              <ul className="ticks">
                <li>Copy structure: headline, proof, CTA</li>
                <li>Design tokens: type, color, spacing</li>
                <li>Templates for repeating sections</li>
              </ul>
            </div>
          </div>

          <div
            className="media-frame"
            data-reveal
            data-reveal-delay="1"
            aria-hidden="true"
          >
            <img src={MEDIA.about2} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">If this feels like your taste</h2>
          <p>
            Send your current site and your goals. I&apos;ll reply with a tight scope
            and a clear next step.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Contact
            </Link>
            <Link className="btn btn--ghostlight" href="/services">
              Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
