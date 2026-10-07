import type { Metadata } from "next";
import { TextLink } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read what customers say about ${site.name} electrical, CCTV and computer services.`,
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What our customers say."
        description="What our customers say about the quality of our work."
      />

      <section className="section-y">
        <div className="container-site">
          {testimonials.length === 0 ? (
            <div className="border-t border-line py-16">
              <p className="type-heading text-ink">No reviews published yet.</p>
              <p className="mt-2 text-muted">
                Worked with us recently? We would love to hear how it went.
              </p>
            </div>
          ) : (
            <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.quote} delay={(i % 2) * 100}>
                  <TestimonialCard {...t} />
                </Reveal>
              ))}
            </div>
          )}
          {site.googleReviewsUrl && (
            <TextLink href={site.googleReviewsUrl} className="mt-14 text-primary">
              View all Google reviews
            </TextLink>
          )}
        </div>
      </section>

      <CallToAction
        title="Ready to be our next happy customer?"
        description="Get a free quote today. We respond quickly to homes, offices, schools and businesses."
      />
    </>
  );
}
