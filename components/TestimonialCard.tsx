import { Star } from "lucide-react";

export default function TestimonialCard({
  quote,
  name,
  detail,
  service,
  rating,
  tone = "light",
}: {
  quote: string;
  name?: string;
  detail?: string;
  service: string;
  rating: number;
  /** "dark" when the card sits on an ink background. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure
      className={`flex h-full flex-col border-t pt-6 ${
        dark ? "border-paper/20" : "border-line"
      }`}
    >
      <div
        className={`flex gap-1 ${dark ? "text-secondary" : "text-primary"}`}
        role="img"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-30"}`}
          />
        ))}
      </div>
      <blockquote
        className={`mt-6 flex-1 text-[clamp(1.25rem,1.9vw,1.625rem)] font-medium leading-snug tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        “{quote}”
      </blockquote>
      <figcaption className="mt-8">
        {name && (
          <p
            className={`mb-1.5 text-[0.9375rem] font-semibold ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {name}
            {detail && (
              <span
                className={`font-normal ${dark ? "text-paper/65" : "text-muted"}`}
              >
                {" "}
                — {detail}
              </span>
            )}
          </p>
        )}
        <p className={`type-label ${dark ? "text-paper/55" : "text-muted"}`}>
          {service}
        </p>
      </figcaption>
    </figure>
  );
}
