import Link from "next/link";

import { AutoCarousel } from "@/components/clarion/AutoCarousel";
import { InstagramGrid } from "@/components/clarion/InstagramGrid";
import { TestimonialsBento } from "@/components/clarion/TestimonialsBento";
import { SmartImage } from "@/components/SmartImage";
import { MEDIA, SITE } from "@/lib/site";

const SERVICES = [
  {
    title: "Brand Clarity",
    body: "We start by figuring out who you are, who you serve, and what makes you different. We focus on clarity first."
  },
  {
    title: "Social Strategy",
    body: "Once positioning is clear, we build content systems that feel authentic, and aligned with your vision."
  },
  {
    title: "Founder Visibility",
    body: "I help you get comfortable being the face of your brand. On camera, in writing, showing up as yourself."
  }
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Melisa understood exactly what we needed without me having to over-explain. She just got it.",
    by: "Client Name, Business Name"
  },
  {
    quote:
      "Working with her felt collaborative, not transactional. She genuinely cares about the outcome.",
    by: "Client Name, Business Name"
  },
  {
    quote:
      "Finally, someone who focuses on strategy instead of just posting for the sake of posting.",
    by: "Client Name, Business Name"
  }
] as const;

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="hero hero--clarion">
        <div className="hero__media" aria-hidden="true">
          <SmartImage src={MEDIA.heroPhoto} alt="" sizes="100vw" />
        </div>
        <div className="hero__shade" aria-hidden="true"></div>

        <div className="container hero__content hero__content--clarion">
          <h1 className="hero__headline" data-reveal>
            Brand Strategist | Social Media Strategist
          </h1>
          <p className="hero__sub" data-reveal data-reveal-delay="1">
            For founder-led brands where clarity matters
            <br />
            as much as what&apos;s being built.
          </p>
        </div>

        <div className="hero__watermark" aria-hidden="true">
          <div className="hero__wm-name">{SITE.name}</div>
          <div className="hero__wm-tag">{SITE.tagline}</div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE QUOTE */}
      <section className="section section--sand signature-quote">
        <div className="container signature-quote__inner">
          <p className="signature-quote__text" data-reveal>
            Stop trying to sound like everyone else.
          </p>
          <p className="signature-quote__sig" data-reveal data-reveal-delay="1">
            — M.
          </p>
        </div>
      </section>

      {/* SECTION 3: WORK PREVIEW */}
      <section className="section section--cream">
        <div className="container">
          <h2 className="h2 h2--center" data-reveal>
            Recent work
          </h2>

          <div className="work-preview" data-reveal data-reveal-delay="1">
            <div className="frame">
              <AutoCarousel
                aria-label="Recent work carousel one"
                items={MEDIA.workSamples.slice(0, 6).map((src) => ({ src }))}
                intervalMs={3800}
                sizes="(max-width: 979px) 100vw, 50vw"
                maxWidth={1800}
              />
            </div>
            <div className="frame">
              <AutoCarousel
                aria-label="Recent work carousel two"
                items={MEDIA.workSamples.slice(4, 10).map((src) => ({ src }))}
                intervalMs={3600}
                sizes="(max-width: 979px) 100vw, 50vw"
                maxWidth={1800}
              />
            </div>
          </div>

          <p className="hint" data-reveal data-reveal-delay="2">
            Swipe to explore →
          </p>
        </div>
      </section>

      {/* SECTION 4: SERVICES TEASER */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 className="h2" data-reveal>
              Studio offerings
            </h2>
          </div>

          <div className="service-cards">
            {SERVICES.map((s, idx) => (
              <article
                key={s.title}
                className="service-card"
                data-reveal
                data-reveal-delay={String(idx)}
              >
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__body">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="section-actions" data-reveal data-reveal-delay="3">
            <Link className="btn btn--primary" href="/services">
              Explore services →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: MY STORY */}
      <section className="section section--cream">
        <div className="container split">
          <div className="split__media" data-reveal>
            <div className="frame frame--tall" aria-hidden="true">
              <SmartImage
                src={MEDIA.storyPhoto}
                alt=""
                sizes="(max-width: 979px) 100vw, 45vw"
                maxWidth={1800}
              />
            </div>
          </div>

          <div className="split__content">
            <h2 className="h2" data-reveal>
              How I got here
            </h2>
            <div className="prose" data-reveal data-reveal-delay="1">
              <p>
                I didn&apos;t come into this work through a traditional path, but it
                gave me a clear perspective on what most brands actually need.
                Content rarely fails because of creativity. It fails when
                strategy and positioning are unclear.
              </p>
              <p>
                Clarion Studio is built on clarity before content. I work with
                founders to bring structure, direction, and intention to how
                their brand shows up online, so it reflects the substance of the
                business behind it.
              </p>
            </div>

            <p className="note" data-reveal data-reveal-delay="2">
              Based in Barcelona, working globally
            </p>

            <div className="section-actions" data-reveal data-reveal-delay="3">
              <Link className="btn btn--primary" href="/story">
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS CAROUSEL */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="kicker" data-reveal>
              Testimonials
            </p>
            <h2 className="h2" data-reveal data-reveal-delay="1">
              What clients say
            </h2>
          </div>

          <TestimonialsBento testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* SECTION 7: PORTFOLIO SHOWCASE */}
      <section className="portfolio">
        <div className="portfolio__video" aria-hidden="true">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            poster={MEDIA.portfolioVideoPoster}
            disablePictureInPicture
          >
            <source src={MEDIA.portfolioVideoMp4} type="video/mp4" />
          </video>
        </div>
        <div className="portfolio__shade" aria-hidden="true"></div>

        <div className="container portfolio__content">
          <h2 className="portfolio__title" data-reveal>
            The work
          </h2>
          <p className="portfolio__sub" data-reveal data-reveal-delay="1">
            Brand strategy and social content for founders who value clarity
            over viral trends, authenticity over performance.
          </p>

          <div className="portfolio__frames" data-reveal data-reveal-delay="2">
            <div className="frame frame--wide">
              <AutoCarousel
                aria-label="Portfolio carousel one"
                items={MEDIA.workSamples.slice(0, 7).map((src) => ({ src }))}
                intervalMs={3600}
                sizes="(max-width: 979px) 100vw, 55vw"
                maxWidth={1800}
              />
            </div>
            <div className="frame frame--wide">
              <AutoCarousel
                aria-label="Portfolio carousel two"
                items={MEDIA.workSamples.slice(3, 10).map((src) => ({ src }))}
                intervalMs={3900}
                sizes="(max-width: 979px) 100vw, 55vw"
                maxWidth={1800}
              />
            </div>
          </div>

          <div className="portfolio__actions" data-reveal data-reveal-delay="3">
            <Link className="btn btn--ghostlight" href="/work">
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW WE WORK TOGETHER */}
      <section className="section section--cream">
        <div className="container how">
          <div className="how__text">
            <h2 className="h2" data-reveal>
              How we work together
            </h2>
            <p className="muted lead" data-reveal data-reveal-delay="1">
              Working with me doesn&apos;t mean handing everything over and hoping
              for the best. It&apos;s collaborative. You stay involved, but you
              don&apos;t have to do the heavy lifting.
            </p>
            <p className="muted" data-reveal data-reveal-delay="2">
              Here&apos;s what it actually looks like:
            </p>

            <div className="roadmap">
              <div className="roadmap-step" data-reveal>
                <p className="roadmap-step__k">Step 1</p>
                <h3 className="roadmap-step__t">We talk</h3>
                <p className="roadmap-step__d">
                  A free 20-minute call where I ask questions about your
                  business, your audience, and what&apos;s not working. No pitch.
                  Just clarity on whether we&apos;re a fit.
                </p>
              </div>

              <div className="roadmap-step" data-reveal data-reveal-delay="1">
                <p className="roadmap-step__k">Step 2</p>
                <h3 className="roadmap-step__t">We define your foundation</h3>
                <p className="roadmap-step__d">
                  If we move forward, we start with positioning. Who you serve,
                  what transformation you offer, what makes you different. This
                  becomes the anchor for everything we create.
                </p>
              </div>

              <div className="roadmap-step" data-reveal data-reveal-delay="2">
                <p className="roadmap-step__k">Step 3</p>
                <h3 className="roadmap-step__t">We build the strategy</h3>
                <p className="roadmap-step__d">
                  Content pillars. Posting rhythm. Messaging frameworks. A
                  90-day plan that feels doable, not overwhelming.
                </p>
              </div>

              <div className="roadmap-step" data-reveal data-reveal-delay="3">
                <p className="roadmap-step__k">Step 4</p>
                <h3 className="roadmap-step__t">We execute (together or solo)</h3>
                <p className="roadmap-step__d">
                  Depending on what you need, I either create the content for
                  you, or teach you how to do it yourself with guidance. Either
                  way, you&apos;re never left wondering what&apos;s next.
                </p>
              </div>

              <div className="roadmap-step" data-reveal data-reveal-delay="4">
                <p className="roadmap-step__k">Step 5</p>
                <h3 className="roadmap-step__t">We refine</h3>
                <p className="roadmap-step__d">
                  We check in regularly, biweekly or monthly depending on the
                  package. We look at what&apos;s working, what&apos;s not, and adjust.
                  No rigid plans that ignore reality.
                </p>
              </div>
            </div>

            <p className="muted lead" data-reveal data-reveal-delay="5">
              It&apos;s simple. We talk, we plan, we create, we refine.
            </p>

            <p className="note note--tilt" data-reveal data-reveal-delay="6">
              No disappearing after the kickoff call. I&apos;m here throughout.
            </p>
          </div>

          <div className="how__media" data-reveal data-reveal-delay="2">
            <div className="frame frame--tall" aria-hidden="true">
              <SmartImage
                src={MEDIA.howWeWorkPhoto}
                alt=""
                sizes="(max-width: 979px) 100vw, 40vw"
                maxWidth={1800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: INSTAGRAM FEED */}
      <section className="section section--sand">
        <div className="container">
          <h2 className="h2 h2--center" data-reveal>
            Follow along
          </h2>

          <div data-reveal data-reveal-delay="1">
            <InstagramGrid
              images={MEDIA.instagramPlaceholders.slice(0, 9)}
              profileUrl={SITE.instagramUrl}
              handle={SITE.instagramHandle}
            />
          </div>
        </div>
      </section>
    </>
  );
}
