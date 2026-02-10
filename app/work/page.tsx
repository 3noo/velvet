import Link from "next/link";

import { AutoCarousel } from "@/components/clarion/AutoCarousel";
import { SmartImage } from "@/components/SmartImage";
import { MEDIA } from "@/lib/site";

export const metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <>
      <section className="section section--cream">
        <div className="container split">
          <div className="split__content">
            <p className="kicker" data-reveal>
              Work
            </p>
            <h1 className="display" data-reveal data-reveal-delay="1">
              The work
            </h1>
            <p className="lede" data-reveal data-reveal-delay="2">
              Brand strategy and social content for founders who value clarity
              over trends, and a presence that feels like the business behind
              it.
            </p>

            <div className="section-actions" data-reveal data-reveal-delay="3">
              <Link className="btn btn--primary" href="/contact">
                Book a Call
              </Link>
              <Link className="btn btn--outline" href="/services">
                View services
              </Link>
            </div>
          </div>

          <div className="split__media" data-reveal data-reveal-delay="1">
            <div className="frame frame--tall">
              <AutoCarousel
                aria-label="Work samples"
                items={MEDIA.workSamples.slice(0, 8).map((src) => ({ src }))}
                intervalMs={3600}
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
              Recent samples
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              A quick gallery while we swap in real client work.
            </p>
          </div>

          <div className="work-grid work-grid--clarion" data-reveal data-reveal-delay="2">
            {MEDIA.workSamples.slice(0, 10).map((src, idx) => (
              <div className="work-tile" key={`${src}-${idx}`}>
                <SmartImage
                  src={src}
                  alt=""
                  sizes="(max-width: 719px) 50vw, (max-width: 979px) 33vw, 25vw"
                  maxWidth={1800}
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <h2 className="h2" data-reveal>
              Mini case studies
            </h2>
            <p className="muted" data-reveal data-reveal-delay="1">
              Short breakdowns of the problem, the clarity work, and the result.
            </p>
          </div>

          <div className="case-list">
            <details className="case" id="project-clarity" data-reveal>
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <SmartImage
                    src={MEDIA.workSamples[0]}
                    alt=""
                    sizes="(max-width: 860px) 100vw, 40vw"
                    maxWidth={1800}
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Brand clarity refresh</h3>
                  <div className="case__meta small">
                    <span className="pill">Positioning</span>
                    <span className="pill">Messaging</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> Strong product, unclear story.
                    Every post sounded like every competitor.
                  </p>
                  <p>
                    <strong>Solution:</strong> Clarified the point of view,
                    tightened the offer language, and built a simple messaging
                    map founders could repeat.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Result:</strong>
                  </p>
                  <ul>
                    <li>Clearer inquiries and faster sales calls</li>
                    <li>More confident content decisions</li>
                    <li>A message that stayed consistent across channels</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="case" id="project-social" data-reveal data-reveal-delay="1">
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <SmartImage
                    src={MEDIA.workSamples[3]}
                    alt=""
                    sizes="(max-width: 860px) 100vw, 40vw"
                    maxWidth={1800}
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Social strategy system</h3>
                  <div className="case__meta small">
                    <span className="pill">Pillars</span>
                    <span className="pill">Plan</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> Inconsistent posting and a feed
                    that felt scattered. Lots of effort, not much clarity.
                  </p>
                  <p>
                    <strong>Solution:</strong> Built repeatable formats, a
                    realistic cadence, and a 90-day plan tied to the actual
                    business goals.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Result:</strong>
                  </p>
                  <ul>
                    <li>Less guesswork and faster creation</li>
                    <li>Stronger alignment between posts and offers</li>
                    <li>Better engagement from the right audience</li>
                  </ul>
                </div>
              </div>
            </details>

            <details className="case" id="project-visibility" data-reveal data-reveal-delay="2">
              <summary>
                <div className="media-frame thumb" aria-hidden="true">
                  <SmartImage
                    src={MEDIA.workSamples[6]}
                    alt=""
                    sizes="(max-width: 860px) 100vw, 40vw"
                    maxWidth={1800}
                  />
                </div>
                <div className="case__title">
                  <h3 className="h3">Founder visibility support</h3>
                  <div className="case__meta small">
                    <span className="pill">On-camera</span>
                    <span className="pill">Story</span>
                  </div>
                </div>
              </summary>
              <div className="case__body">
                <div className="stack">
                  <p>
                    <strong>Challenge:</strong> The brand needed the founder&apos;s
                    voice, but showing up felt exposed and inconsistent.
                  </p>
                  <p>
                    <strong>Solution:</strong> Framed a grounded narrative,
                    scripted repeatable talking points, and created a simple
                    content flow that matched real energy.
                  </p>
                </div>
                <div className="stack">
                  <p>
                    <strong>Result:</strong>
                  </p>
                  <ul>
                    <li>More confident on-camera delivery</li>
                    <li>A clearer personal brand story</li>
                    <li>Consistency without burnout</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="cta cta--clarion">
        <div className="container cta__inner" data-reveal>
          <h2 className="h2 h2--light">Want to see what this could look like for you?</h2>
          <p className="lede lede--light">
            Send your link and what you&apos;re building. We&apos;ll start with clarity.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--light" href="/contact">
              Book a Call
            </Link>
            <Link className="btn btn--ghostlight" href="/services">
              Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

