import Link from "next/link";

import { SmartImage } from "@/components/SmartImage";
import { MEDIA } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            poster={MEDIA.hero}
            disablePictureInPicture
          >
            <source src={MEDIA.heroVideoMp4} type="video/mp4" />
          </video>
        </div>
        <div className="hero__shade" aria-hidden="true"></div>

        <div className="container hero__content">
          <p className="kicker" data-reveal>
            VELVET STUDIO
          </p>
          <h1 className="display" data-reveal data-reveal-delay="1">
            Modern marketing, cut sharp.
          </h1>
          <p className="lede" data-reveal data-reveal-delay="2">
            Brand, web, and campaigns for teams that move fast and still want
            the work to look timeless.
          </p>
          <div className="hero__actions" data-reveal data-reveal-delay="3">
            <Link className="btn btn--light" href="/work">
              See Case Studies
            </Link>
            <Link className="btn btn--ghostlight" href="/services">
              Explore Services
            </Link>
          </div>

          <div className="hero__fineprint small" data-reveal data-reveal-delay="4">
            <span className="pill">Brand</span>
            <span className="pill">Web</span>
            <span className="pill">Campaign</span>
            <span className="sep" aria-hidden="true"></span>
            <span>Booking March 2026</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Studio offerings
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              Three ways to work together. Fast, focused, and quietly obsessive.
            </p>
          </div>

          <div className="cards-3">
            <article className="card" data-reveal>
              <h3 className="h3">Identity</h3>
              <p>Strategy, naming, and a visual system that stays sharp under growth.</p>
              <ul className="ticks">
                <li>Positioning + voice</li>
                <li>Logo + type + palette</li>
                <li>Brand kit + guidelines</li>
              </ul>
              <Link className="link" href="/services#identity">
                View details
              </Link>
            </article>

            <article className="card" data-reveal data-reveal-delay="1">
              <h3 className="h3">Web</h3>
              <p>Elegant websites that load fast and convert without feeling salesy.</p>
              <ul className="ticks">
                <li>UX + design system</li>
                <li>Build + performance pass</li>
                <li>SEO + launch support</li>
              </ul>
              <Link className="link" href="/services#web">
                View details
              </Link>
            </article>

            <article className="card" data-reveal data-reveal-delay="2">
              <h3 className="h3">Campaign</h3>
              <p>
                Launch pages, email, and content kits that make your next release
                feel inevitable.
              </p>
              <ul className="ticks">
                <li>Offer + funnel structure</li>
                <li>Landing + email sequence</li>
                <li>Creative direction</li>
              </ul>
              <Link className="link" href="/services#campaign">
                View details
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Gallery
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A quick visual moodboard: crisp product frames, clean light, and
              intentional negative space.
            </p>
          </div>

          <div className="gallery" data-reveal data-reveal-delay="2">
            {MEDIA.gallery.map((src, idx) => (
              <div key={`${src}-${idx}`} className="gallery__item">
                <SmartImage
                  src={src}
                  alt=""
                  sizes="(max-width: 719px) 50vw, (max-width: 979px) 33vw, 16vw"
                  maxWidth={1200}
                  loading={idx < 2 ? "eager" : "lazy"}
                  fetchPriority={idx < 2 ? "high" : "low"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__media" aria-hidden="true">
          <SmartImage src={MEDIA.band} alt="" sizes="100vw" />
        </div>
        <div className="band__shade" aria-hidden="true"></div>

        <div className="container band__content">
          <p className="kicker" data-reveal>
            THE ARC METHOD
          </p>
          <h2 className="h2 h2--light" data-reveal data-reveal-delay="1">
            A clean process. No bloated decks.
          </h2>

          <div className="steps" data-reveal data-reveal-delay="2">
            <div className="step">
              <span className="step__n">01</span>
              <span className="step__t">Audit</span>
              <span className="step__d">
                Clarify the offer, the audience, and what to remove.
              </span>
            </div>
            <div className="step">
              <span className="step__n">02</span>
              <span className="step__t">Design</span>
              <span className="step__d">
                A system with strict typography and flexible layouts.
              </span>
            </div>
            <div className="step">
              <span className="step__n">03</span>
              <span className="step__t">Build</span>
              <span className="step__d">
                Performance-first pages with clean, accessible motion.
              </span>
            </div>
            <div className="step">
              <span className="step__n">04</span>
              <span className="step__t">Launch</span>
              <span className="step__d">
                Measure, refine, and ship the next iteration quickly.
              </span>
            </div>
          </div>

          <div className="hero__actions mt-18" data-reveal data-reveal-delay="3">
            <Link className="btn btn--light" href="/about">
              How we work
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Featured work
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A few recent builds. Tight hierarchy, clear proof, and pages that
              load fast.
            </p>
          </div>

          <div className="work-grid">
            <Link className="work-card" href="/work#maison-hart" data-reveal>
              <div className="work-card__media">
                <SmartImage
                  src={MEDIA.gallery[0]}
                  alt=""
                  sizes="(max-width: 719px) 100vw, (max-width: 979px) 50vw, 33vw"
                  maxWidth={1600}
                />
              </div>
              <div className="work-card__body">
                <h3 className="h3">Maison Hart</h3>
                <p className="small muted">Web + email flows</p>
                <p className="result">+38% qualified inquiries in 60 days</p>
              </div>
            </Link>

            <Link
              className="work-card"
              href="/work#verve-botanica"
              data-reveal
              data-reveal-delay="1"
            >
              <div className="work-card__media">
                <SmartImage
                  src={MEDIA.gallery[1]}
                  alt=""
                  sizes="(max-width: 719px) 100vw, (max-width: 979px) 50vw, 33vw"
                  maxWidth={1600}
                />
              </div>
              <div className="work-card__body">
                <h3 className="h3">Verve Botanica</h3>
                <p className="small muted">Identity + launch kit</p>
                <p className="result">2.4x conversion on a new offer</p>
              </div>
            </Link>

            <Link
              className="work-card"
              href="/work#liora-atelier"
              data-reveal
              data-reveal-delay="2"
            >
              <div className="work-card__media">
                <SmartImage
                  src={MEDIA.gallery[2]}
                  alt=""
                  sizes="(max-width: 719px) 100vw, (max-width: 979px) 50vw, 33vw"
                  maxWidth={1600}
                />
              </div>
              <div className="work-card__body">
                <h3 className="h3">Liora Atelier</h3>
                <p className="small muted">Campaign + landing</p>
                <p className="result">-22% cost per lead in 3 weeks</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote" data-reveal>
            <p className="quote__text">
              They translated our messy ideas into a brand that feels inevitable.
              The site loads fast, reads clean, and converts without feeling pushy.
            </p>
            <p className="quote__by">Founder, Verve Botanica</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Ready for a calmer kind of growth?</h2>
          <p>
            If you&apos;re building something crafted, let&apos;s make the marketing
            match. Tell me what you&apos;re shipping next.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Start a project
            </Link>
            <Link className="btn btn--ghostlight" href="/services">
              View packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
