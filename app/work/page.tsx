import Link from "next/link";

import { MEDIA } from "@/lib/site";

export const metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <>
      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <p className="kicker" data-reveal>
              Work
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              Selected builds with tight hierarchy.
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              The aesthetic stays quiet, but the structure is intentional: offers
              read clearly, CTAs feel natural, and pages load fast.
            </p>
            <div className="hero__actions" data-reveal data-reveal-delay="3">
              <Link className="btn btn--primary" href="/contact">
                Start a project
              </Link>
              <Link className="btn" href="/services">
                View packages
              </Link>
            </div>
          </div>

          <div className="media-frame" data-reveal data-reveal-delay="1">
            <img src={MEDIA.workHero} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <p className="kicker" data-reveal>
              Showreel
            </p>
            <h2 className="h2" data-reveal data-reveal-delay="1">
              Motion that stays out of the way.
            </h2>
            <p className="muted" data-reveal data-reveal-delay="2">
              A quick reel to show pacing, typography, and transitions. No heavy
              effects, just clean direction.
            </p>
            <ul className="ticks" data-reveal data-reveal-delay="3">
              <li>Fast loads, fast reads</li>
              <li>Subtle reveals, not slow fades</li>
              <li>Mobile-first layouts</li>
            </ul>
          </div>

          <div className="media-frame media-frame--video" data-reveal data-reveal-delay="1">
            <video controls playsInline preload="none" poster={MEDIA.workHero}>
              <source src={MEDIA.workReelWebm} type="video/webm" />
              <source src={MEDIA.workReelMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Case studies
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              Open any project for a quick breakdown. Names and details are
              condensed for clarity.
            </p>
          </div>

          <div className="case-list">
            <details className="case" id="maison-hart" data-reveal>
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <img
                    src={MEDIA.gallery[0]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Maison Hart</h3>
                  <div className="case__meta small">
                    <span className="pill">Web</span>
                    <span className="pill">Email</span>
                    <span className="sep" aria-hidden="true"></span>
                    <span className="muted">Home goods</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> Beautiful product, unclear
                    messaging, and a site that buried the best sellers behind too
                    many clicks.
                  </p>
                  <p>
                    <strong>Solution:</strong> Rewrote the offer into three clear
                    collections, redesigned the homepage as a guided story, and
                    added an email capture that matched the tone.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Results:</strong>
                  </p>
                  <ul>
                    <li>+38% qualified inquiries in 60 days</li>
                    <li>-18% bounce rate on the homepage</li>
                    <li>Welcome flow averaging 42% open rate</li>
                  </ul>
                </div>
              </div>
            </details>

            <details
              className="case"
              id="verve-botanica"
              data-reveal
              data-reveal-delay="1"
            >
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <img
                    src={MEDIA.gallery[1]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Verve Botanica</h3>
                  <div className="case__meta small">
                    <span className="pill">Identity</span>
                    <span className="pill">Launch</span>
                    <span className="sep" aria-hidden="true"></span>
                    <span className="muted">Wellness</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> A product that looked premium in
                    person, but online it blended into a sea of identical
                    natural brands.
                  </p>
                  <p>
                    <strong>Solution:</strong> Defined a sharper point of view,
                    built a restrained identity system, and created a launch kit
                    for email + social that stayed consistent.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Results:</strong>
                  </p>
                  <ul>
                    <li>2.4x conversion on a new offer page</li>
                    <li>+31% average order value after the relaunch</li>
                    <li>Brand assets reused across 20+ touchpoints</li>
                  </ul>
                </div>
              </div>
            </details>

            <details
              className="case"
              id="liora-atelier"
              data-reveal
              data-reveal-delay="2"
            >
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <img
                    src={MEDIA.gallery[2]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Liora Atelier</h3>
                  <div className="case__meta small">
                    <span className="pill">Campaign</span>
                    <span className="pill">Landing</span>
                    <span className="sep" aria-hidden="true"></span>
                    <span className="muted">Studio services</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> Paid traffic was sending people
                    to a generic services page with no clear next step.
                  </p>
                  <p>
                    <strong>Solution:</strong> Built a dedicated landing page per
                    audience, tightened the proof, and simplified the booking
                    flow to one decisive CTA.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Results:</strong>
                  </p>
                  <ul>
                    <li>-22% cost per lead in 3 weeks</li>
                    <li>+19% form completion rate</li>
                    <li>More qualified calls, fewer price-shopping leads</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="case" id="northfield-counsel" data-reveal>
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <img
                    src={MEDIA.gallery[3]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Northfield Counsel</h3>
                  <div className="case__meta small">
                    <span className="pill">Web</span>
                    <span className="pill">SEO</span>
                    <span className="sep" aria-hidden="true"></span>
                    <span className="muted">Professional services</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> The website felt generic and
                    didn&apos;t explain what made the firm different. Leads were
                    unqualified and inconsistent.
                  </p>
                  <p>
                    <strong>Solution:</strong> Rebuilt the page hierarchy around
                    outcomes, added proof and clear service pages, and created a
                    simple inbound funnel.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Results:</strong>
                  </p>
                  <ul>
                    <li>+46% organic traffic over 90 days</li>
                    <li>Fewer pages, stronger time-on-page</li>
                    <li>More inbound leads matching the ideal client</li>
                  </ul>
                </div>
              </div>
            </details>

            <details
              className="case"
              id="studio-ravel"
              data-reveal
              data-reveal-delay="1"
            >
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <img
                    src={MEDIA.gallery[4]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Studio Ravel</h3>
                  <div className="case__meta small">
                    <span className="pill">Identity</span>
                    <span className="pill">Web</span>
                    <span className="sep" aria-hidden="true"></span>
                    <span className="muted">Creative studio</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> Great portfolio, weak narrative.
                    Visitors couldn&apos;t tell what the studio specialized in.
                  </p>
                  <p>
                    <strong>Solution:</strong> Crafted a signature positioning
                    line, reorganized work into three clear categories, and built
                    a case study format that sells without feeling salesy.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Results:</strong>
                  </p>
                  <ul>
                    <li>Inquiries increased within 2 weeks of launch</li>
                    <li>More referrals because the niche is obvious</li>
                    <li>Reusable template for future projects</li>
                  </ul>
                </div>
              </div>
            </details>

            <details
              className="case"
              id="ember-salon"
              data-reveal
              data-reveal-delay="2"
            >
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <img
                    src={MEDIA.gallery[5]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Ember Salon</h3>
                  <div className="case__meta small">
                    <span className="pill">Campaign</span>
                    <span className="pill">Email</span>
                    <span className="sep" aria-hidden="true"></span>
                    <span className="muted">Local services</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> Bookings were strong seasonally
                    but unpredictable. Promotions felt off brand, so they were
                    rarely used.
                  </p>
                  <p>
                    <strong>Solution:</strong> Created a seasonal-edit campaign
                    system with a consistent layout, a simple offer structure,
                    and pre-written email templates.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Results:</strong>
                  </p>
                  <ul>
                    <li>Consistent monthly promotions without brand drift</li>
                    <li>Higher rebooking rate from better email cadence</li>
                    <li>Less admin time for the team</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Want work like this?</h2>
          <p>
            Tell me your offer and your current bottleneck. I&apos;ll reply with a
            simple plan and a timeline.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Start here
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
