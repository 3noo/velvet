const TOP = [
  "Project details",
  "Scope",
  "Timeline",
  "Budget",
  "Package",
  "Barcelona HQ",
  "Clarion Studio",
  "Launch",
  "Offer",
  "Proof",
  "CTA",
  "Signal"
] as const;

const BOTTOM = [
  "Brand / Social / Visibility",
  "What you sell",
  "What's not working",
  "What a win looks like",
  "Ideal launch date",
  "Range only, no guessing",
  "Clarity first",
  "Structure next",
  "Mobile-first",
  "Clear hierarchy",
  "Less noise",
  "More intent"
] as const;

export function ContactMosaic() {
  const row1 = Array.from({ length: 4 }, () => TOP).flat();
  const row2 = Array.from({ length: 2 }, () => BOTTOM).flat();
  const row3 = Array.from({ length: 4 }, () => TOP).flat().reverse();

  return (
    <div className="contact-mosaic" aria-hidden="true">
      <div className="contact-mosaic__track">
        <div className="mosaic-row mosaic-row--left">
          {row1.map((txt, i) => (
            <Tile key={`${i}-1`} text={txt} />
          ))}
        </div>
        <div className="mosaic-row mosaic-row--right">
          {row2.map((txt, i) => (
            <Tile key={`${i}-2`} text={txt} />
          ))}
        </div>
        <div className="mosaic-row mosaic-row--left">
          {row3.map((txt, i) => (
            <Tile key={`${i}-3`} text={txt} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tile({ text }: { text: string }) {
  return (
    <div className="contact-mosaic__tile">
      <span className="contact-mosaic__top">{text}</span>
    </div>
  );
}
