import Link from "next/link";

import { SmartImage } from "@/components/SmartImage";
import { MEDIA } from "@/lib/site";

export const metadata = {
  title: "Services"
};

const OFFERINGS = [
  {
    title: "Brand Clarity",
    body: "We define your positioning, messaging, and point of view so your brand feels unmistakable (and easier to market).",
    bullets: ["Positioning + audience", "Messaging + voice", "Brand direction you can actually use"]
  },
  {
    title: "Social Strategy",
    body: "A content system that fits your life and your business. Clear pillars, repeatable formats, and a 90-day plan.",
    bullets: ["Content pillars + themes", "Posting rhythm", "90-day strategy plan"]
  },
  {
    title: "Founder Visibility",
    body: "Support for showing up as the face of the brand in a way that feels grounded and natural, not performative.",
    bullets: ["On-camera guidance", "Story + personal brand framing", "Confidence through structure"]
  }
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="section section--cream">
        <div className="container split">
          <div className="split__content">
            <p className="kicker" data-reveal>
              Services
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              Studio offerings
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Clarity before content. We build the foundation first, then the
              systems that help you show up consistently without losing the
              point.
            </p>

            <div className="section-actions" data-reveal data-reveal-delay="3">
              <Link className="btn btn--primary" href="/contact">
                Book a Call
              </Link>
              <Link className="btn btn--outline" href="/work">
                View work
              </Link>
            </div>
          </div>

          <div className="split__media" data-reveal data-reveal-delay="1">
            <div className="frame frame--tall" aria-hidden="true">
              <SmartImage
                src={MEDIA.servicesPhoto}
                alt=""
                sizes="(max-width: 979px) 100vw, 45vw"
                maxWidth={1800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 className="h2" data-reveal>
              Choose your starting point
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              Most brands don&apos;t need more ideas. They need a clearer story and a
              system.
            </p>
          </div>

          <div className="service-cards">
            {OFFERINGS.map((o, idx) => (
              <article
                className="service-card service-card--detailed"
                key={o.title}
                data-reveal
                data-reveal-delay={String(idx)}
              >
                <h3 className="service-card__title">{o.title}</h3>
                <p className="service-card__body">{o.body}</p>
                <ul className="ticks">
                  {o.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="section-actions" data-reveal data-reveal-delay="3">
            <Link className="btn btn--primary" href="/contact">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <section className="cta cta--clarion">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Not sure which one fits?</h2>
          <p className="lede lede--light">
            Send your current site and your goal. I&apos;ll reply with the simplest
            next step.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Contact
            </Link>
            <Link className="btn btn--ghostlight" href="/story">
              Read the story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

