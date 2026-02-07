import Link from "next/link";

import { ContactForm } from "@/app/contact/ContactForm";
import { ContactSpectacle } from "@/app/contact/ContactSpectacle";
import { MEDIA, SITE } from "@/lib/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <p className="kicker" data-reveal>
              Contact
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              Let&apos;s build something precise.
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Send the basics: what you sell, what&apos;s not working, and what a win
              looks like. I&apos;ll reply with a tight scope and a timeline.
            </p>

            <div className="divider" aria-hidden="true"></div>

            <div className="stack" data-reveal data-reveal-delay="3">
              <p className="kicker">Email</p>
              <a
                className="link"
                href={`mailto:${SITE.email}`}
                data-no-transition
              >
                {SITE.email}
              </a>
              <p className="small muted">Barcelona HQ · CET/CEST</p>
              <p className="kicker mt-18">Availability</p>
              <p className="small muted">{SITE.bookingNote}</p>
            </div>
          </div>

          <div className="media-frame" data-reveal data-reveal-delay="1">
            <img src={MEDIA.contactHero} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container two-col">
          <div className="stack">
            <h2 className="h2" data-reveal>
              Project details
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A few quick questions so we can reply with a scope, timeline, and
              the right package.
            </p>
            <div className="divider" aria-hidden="true"></div>
            <ul className="ticks" data-reveal data-reveal-delay="2">
              <li>Preferred package: identity, web, campaign</li>
              <li>Timeline: ideal launch date</li>
              <li>Budget range: helps keep scope honest</li>
            </ul>
          </div>

          <div className="card card--seal" data-reveal data-reveal-delay="1">
            <ContactSpectacle />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Prefer email?</h2>
          <p>
            Send a short note with your link and your goal. You&apos;ll get a
            structured reply, not a sales sequence.
          </p>
          <div className="cta__actions">
            <a
              className="btn btn--light"
              href={`mailto:${SITE.email}`}
              data-no-transition
            >
              Email
            </a>
            <Link className="btn btn--ghostlight" href="/services">
              Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
