type Testimonial = {
  quote: string;
  by: string;
};

export function TestimonialMarquee({
  testimonials,
  "aria-label": ariaLabel = "Testimonials"
}: {
  testimonials: readonly Testimonial[];
  "aria-label"?: string;
}) {
  const items = [
    ...testimonials.map((t) => ({ ...t, copy: "a" as const })),
    ...testimonials.map((t) => ({ ...t, copy: "b" as const }))
  ];

  return (
    <div className="marquee" aria-label={ariaLabel}>
      <div className="marquee__track">
        {items.map((t, idx) => (
          <article
            className="testimonial-card"
            data-copy={t.copy}
            key={`${t.by}-${t.copy}-${idx}`}
          >
            <p className="testimonial-card__quote">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="testimonial-card__by">— {t.by}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
