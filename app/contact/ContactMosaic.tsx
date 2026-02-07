const TOP = [
  "Project details",
  "Scope",
  "Timeline",
  "Budget",
  "Package",
  "Barcelona HQ",
  "Velvet Studio",
  "Launch",
  "Offer",
  "Proof",
  "CTA",
  "Signal"
] as const;

const BOTTOM = [
  "Identity / Web / Campaign",
  "What you sell",
  "What's not working",
  "What a win looks like",
  "Ideal launch date",
  "Range only, no guessing",
  "Fast reads",
  "Clean direction",
  "Mobile-first",
  "Clear hierarchy",
  "Less noise",
  "More intent"
] as const;

export function ContactMosaic() {
  // Deterministic render (no randomness) to keep SSR stable.
  const tiles = Array.from({ length: 18 }, (_, i) => ({
    top: TOP[i % TOP.length],
    bottom: BOTTOM[(i * 3) % BOTTOM.length]
  }));

  return (
    <div className="contact-mosaic" aria-hidden="true">
      <div className="contact-mosaic__track">
        {tiles.map((t, i) => (
          <div className="contact-mosaic__tile" key={i}>
            <span className="contact-mosaic__top">{t.top}</span>
            <span className="contact-mosaic__bottom">{t.bottom}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
