import type { Metadata } from "next";
import Image from "next/image";
import { TextLink } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — our mission, vision and core values.`,
};

const coreValues = [
  "Integrity",
  "Professionalism",
  "Reliability",
  "Safety",
  "Customer Satisfaction",
];

const purpose = [
  {
    title: "Our Mission",
    text: "Deliver quality and reliable electrical and computer solutions that keep homes and businesses running safely and efficiently.",
  },
  {
    title: "Our Vision",
    text: "Become the most trusted service provider in the region for electrical and computer services.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Your trusted electrical & computer partner."
        description="Who we are, what we believe in, and why customers trust us."
      />

      <section className="section-y">
        <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12 lg:items-center">
          <Reveal variant="clip" className="lg:col-span-5">
            <Parallax className="aspect-[4/5] rounded-sm bg-surface sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={asset("/images/photos/panel.png")}
                alt="LEE technician in uniform working on an electrical distribution board"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              eyebrow="Who We Are"
              title="Electrical and computer services, under one roof"
            />
            <div className="mt-7 max-w-xl space-y-5 text-muted">
              <p className="type-lead text-ink">
                {site.name} is a professional service provider specializing in
                electrical installations, maintenance, and computer support
                services for homes, businesses, offices, schools and
                institutions.
              </p>
              <p>
                Our mission is to provide reliable, safe, and affordable
                services while ensuring complete customer satisfaction. Every
                job — from a simple outlet replacement to a full wiring
                installation or data recovery — is handled with the same
                commitment to quality.
              </p>
            </div>
            <TextLink href="/services" className="mt-7 text-primary">
              Explore our services
            </TextLink>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Mission, Vision & Core Values"
            />
          </Reveal>

          <div className="mt-14 grid gap-x-12 lg:mt-20 lg:grid-cols-2">
            {purpose.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="h-full border-t border-ink/20 py-8 lg:py-10">
                  <h3 className="type-label text-primary">{item.title}</h3>
                  <p className="mt-5 max-w-lg text-[clamp(1.375rem,2.2vw,1.875rem)] font-medium leading-snug tracking-tight text-ink">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="border-t border-ink/20 pt-8 lg:pt-10">
              <h3 className="type-label text-primary">Core Values</h3>
              <ol className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
                {coreValues.map((value, i) => (
                  <li
                    key={value}
                    className="flex items-baseline gap-4 border-b border-line py-4 lg:flex-col lg:gap-3 lg:border-b-0 lg:py-0"
                  >
                    <span className="type-label text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="type-heading text-ink">{value}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <CallToAction
        title="Have a job in mind?"
        description="Tell us what you need and we will get back to you with a free quote."
      />
    </>
  );
}
