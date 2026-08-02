import { Star, StarHalf } from "lucide-react";

export default function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: {
  quote: string;
  name: string;
  role: string;
  rating: number;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div
        className="flex gap-1 text-secondary"
        role="img"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) =>
          i < rating ? (
            <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
          ) : (
            <StarHalf
              key={i}
              className="h-4 w-4 fill-current opacity-40"
              aria-hidden="true"
            />
          ),
        )}
      </div>
      <blockquote className="mt-4 flex-1 text-ink/80">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-black/5 pt-4">
        <p className="font-heading text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs text-ink/60">{role}</p>
      </figcaption>
    </figure>
  );
}
