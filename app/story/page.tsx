import Link from "next/link";

import { SmartImage } from "@/components/SmartImage";
import { MEDIA } from "@/lib/site";

export const metadata = {
  title: "Story"
};

export default function StoryPage() {
  return (
    <>
      <section className="section section--cream">
        <div className="container split split--lead">
          <div className="split__content">
            <p className="kicker" data-reveal>
              Story
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              How I got here
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Clarion Studio is built on one belief: clarity comes before
              content.
            </p>

            <div className="prose" data-reveal data-reveal-delay="3">
              <p>
                I didn&apos;t come into this work through a traditional path, but it
                gave me a clear perspective on what most brands actually need.
                Content rarely fails because of creativity. It fails when
                strategy and positioning are unclear.
              </p>
              <p>
                When the foundation is solid, marketing gets simpler. Your
                message lands. Your content feels consistent. Your audience
                understands what you do and why it matters.
              </p>
              <p>
                My work with founders is focused on structure: defining your
                point of view, shaping messaging that sounds like you, and
                building a social strategy you can sustain.
              </p>
            </div>

            <p className="note" data-reveal data-reveal-delay="4">
              Based in Barcelona, working globally
            </p>

            <div className="section-actions" data-reveal data-reveal-delay="5">
              <Link className="btn btn--primary" href="/services">
                View services
              </Link>
              <Link className="btn btn--outline" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="split__media" data-reveal data-reveal-delay="1">
            <div className="frame frame--lead" aria-hidden="true">
              <SmartImage
                src={MEDIA.storyPhoto}
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
          <div className="section-head">
            <h2 className="h2" data-reveal>
              What we build together
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A calmer kind of growth comes from having a message you trust.
            </p>
          </div>

          <div className="cards-3">
            <article className="card" data-reveal>
              <h3 className="h3">Clarity</h3>
              <p>
                Your positioning, your point of view, and the message you repeat
                everywhere.
              </p>
            </article>

            <article className="card" data-reveal data-reveal-delay="1">
              <h3 className="h3">Structure</h3>
              <p>
                A strategy that removes guesswork: pillars, formats, cadence,
                and proof.
              </p>
            </article>

            <article className="card" data-reveal data-reveal-delay="2">
              <h3 className="h3">Consistency</h3>
              <p>
                Systems that help you show up as yourself, without burning out
                or copying trends.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta cta--clarion">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">If you&apos;re ready for a clearer brand</h2>
          <p className="lede lede--light">
            Start with a short message. You&apos;ll get clarity on the next step.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Contact
            </Link>
            <Link className="btn btn--ghostlight" href="/work">
              View work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
