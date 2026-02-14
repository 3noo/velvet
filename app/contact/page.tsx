import Link from "next/link";

import { ContactForm } from "@/app/contact/ContactForm";
import { ContactMosaic } from "@/app/contact/ContactMosaic";
import { SmartImage } from "@/components/SmartImage";
import { SocialLinks } from "@/components/SocialLinks";
import { MEDIA, SITE } from "@/lib/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--cream">
        <div className="container split split--lead">
          <div className="split__content">
            <p className="kicker" data-reveal>
              Contact
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              Start your project
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Share where your brand feels unclear and what you&apos;re building
              toward. I&apos;ll reply with the clearest next step.
            </p>

            <div className="divider" aria-hidden="true"></div>

            <div className="stack" data-reveal data-reveal-delay="3">
              <p className="kicker">Based</p>
              <p className="small muted">{SITE.location}</p>

              <p className="kicker mt-18">Email</p>
              <a
                className="link"
                href={`mailto:${SITE.email}`}
                data-no-transition
              >
                {SITE.email}
              </a>

              <p className="kicker mt-18">Instagram</p>
              <a
                className="link"
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                data-no-transition
              >
                {SITE.instagramHandle}
              </a>

              <p className="small muted mt-18">Typically within 1-2 business days.</p>

              <SocialLinks className="contact-socials mt-18" />
            </div>
          </div>

          <div className="split__media" data-reveal data-reveal-delay="1">
            <div className="frame frame--lead" aria-hidden="true">
              <SmartImage
                src={MEDIA.contactPhoto}
                alt=""
                sizes="(max-width: 979px) 100vw, 45vw"
                maxWidth={1800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div className="split__content">
            <h2 className="h2" data-reveal>
              Project details
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A few quick questions so I can reply with a scope and the right
              starting point.
            </p>
            <div className="divider" aria-hidden="true"></div>
            <ul className="ticks" data-reveal data-reveal-delay="2">
              <li>Which offering you&apos;re considering</li>
              <li>Timeline: ideal start date</li>
              <li>Budget range (just a range)</li>
            </ul>
          </div>

          <div className="card card--mosaic" data-reveal data-reveal-delay="1">
            <ContactMosaic />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="cta cta--clarion">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Prefer email?</h2>
          <p className="lede lede--light">
            Send a short note with your link and your goal. You&apos;ll get a clear
            reply, not a sales sequence.
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
              Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
