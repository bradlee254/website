import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, Eye, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
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

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 text-white sm:py-20">
        <div className="container-site">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Who we are, what we believe in, and why customers trust us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Who We Are" title="Your Trusted Electrical & Computer Partner" />
            <div className="mt-5 space-y-4 leading-relaxed text-ink/70">
              <p>
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
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <Image
              src={asset("/images/about-team.svg")}
              alt="LEE Electrical and Computer Services team"
              width={640}
              height={520}
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Mission, Vision & Core Values"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Deliver quality and reliable electrical and computer
                  solutions that keep homes and businesses running safely and
                  efficiently.
                </p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Become the most trusted service provider in the region for
                  electrical and computer services.
                </p>
              </article>
            </Reveal>
            <Reveal delay={240}>
              <article className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HeartHandshake className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  Core Values
                </h3>
                <ul className="mt-2 space-y-2">
                  {coreValues.map((value) => (
                    <li key={value} className="flex items-center gap-2 text-sm text-ink/70">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                      {value}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
