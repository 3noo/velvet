type Testimonial = {
  quote: string;
  by: string;
};

export function TestimonialsBento({
  testimonials,
  "aria-label": ariaLabel = "Testimonials"
}: {
  testimonials: readonly Testimonial[];
  "aria-label"?: string;
}) {
  if (testimonials.length === 0) return null;

  const t0 = testimonials[0];
  const t1 = testimonials[1];
  const t2 = testimonials[2];
  const rest = testimonials.slice(3);

  return (
    <div className="testimonials" aria-label={ariaLabel}>
      <div className="testimonials__grid">
        {t0 ? (
          <article
            className="testimonial-card testimonial-card--featured"
            data-reveal
          >
            <div className="testimonial-card__inner">
              <p className="testimonial-card__quote">
                &ldquo;{t0.quote}&rdquo;
              </p>
              <p className="testimonial-card__by">— {t0.by}</p>
            </div>
          </article>
        ) : null}

        {t1 ? (
          <article
            className="testimonial-card testimonial-card--side-a"
            data-reveal
            data-reveal-delay="1"
          >
            <div className="testimonial-card__inner">
              <p className="testimonial-card__quote">
                &ldquo;{t1.quote}&rdquo;
              </p>
              <p className="testimonial-card__by">— {t1.by}</p>
            </div>
          </article>
        ) : null}

        {t2 ? (
          <article
            className="testimonial-card testimonial-card--side-b"
            data-reveal
            data-reveal-delay="2"
          >
            <div className="testimonial-card__inner">
              <p className="testimonial-card__quote">
                &ldquo;{t2.quote}&rdquo;
              </p>
              <p className="testimonial-card__by">— {t2.by}</p>
            </div>
          </article>
        ) : null}

        {rest.map((t, idx) => (
          <article
            className="testimonial-card testimonial-card--extra"
            data-reveal
            data-reveal-delay={String(3 + idx)}
            key={`${t.by}-${idx}`}
          >
            <div className="testimonial-card__inner">
              <p className="testimonial-card__quote">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="testimonial-card__by">— {t.by}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

