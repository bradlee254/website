import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read what customers say about ${site.name} electrical and computer services.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 text-white sm:py-20">
        <div className="container-site">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Testimonials
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              What our customers say about the quality of our work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 100}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
