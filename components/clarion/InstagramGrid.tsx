import { SmartImage } from "@/components/SmartImage";

export function InstagramGrid({
  images,
  profileUrl,
  handle
}: {
  images: string[];
  profileUrl: string;
  handle: string;
}) {
  return (
    <div className="instagram" aria-label="Instagram feed">
      <div className="instagram__grid">
        {images.map((src, idx) => (
          <a
            key={`${src}-${idx}`}
            className="instagram__tile"
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            data-no-transition
            aria-label={`Open Instagram profile ${handle}`}
          >
            <SmartImage
              src={src}
              alt=""
              sizes="(max-width: 719px) 50vw, 20vw"
              maxWidth={1200}
              loading={idx < 3 ? "eager" : "lazy"}
            />
          </a>
        ))}
      </div>

      <div className="instagram__meta">
        <p className="instagram__handle">{handle}</p>
        <a
          className="btn btn--outline"
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          data-no-transition
        >
          View on Instagram
        </a>
      </div>
    </div>
  );
}

