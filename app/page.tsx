import Image from "next/image";
import { Check, Phone } from "lucide-react";
import Button, { ArrowIcon, TextLink } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import FaqList from "@/components/FaqList";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/SplitText";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseList from "@/components/WhyChooseList";
import { testimonials } from "@/lib/data";
import { featuredServices, generalFaqs, quoteLink } from "@/lib/services";
import { asset, site } from "@/lib/site";

// Only claims the business can stand behind belong here.
const trustPoints = [
  { value: "10+", label: "Years experience" },
  { value: "24/7", label: "Emergency support" },
  { value: "Free", label: "Quotations before work" },
  { value: "Nairobi", label: "& surrounding areas" },
];

export default function Home() {
  return (
    <>
      <section className="tone-dark overflow-hidden bg-ink text-paper">
        <div className="container-site grid gap-x-12 gap-y-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="type-label animate-fade-up flex items-center gap-3 text-secondary">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              Electrical • Security • Technology
            </p>
            <h1 className="type-display mt-6 max-w-[13ch]">
              <SplitText text="Power. Security. Technology." />
              <span className="text-secondary">
                <SplitText text="Done Right." offset={3} />
              </span>
            </h1>
            <div
              className="animate-fade-up"
              style={{ "--delay": "450ms" } as React.CSSProperties}
            >
              <p className="type-lead mt-7 max-w-xl text-paper/70">
                {site.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">
                  Get a free quote
                  <ArrowIcon />
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {site.phone}
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-clip-in lg:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-ink-soft sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={asset("/images/photos/distribution-board.webp")}
                alt="Electrician in a hard hat and safety glasses working on a distribution board"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_25%]"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-paper/12">
          <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, i) => (
              <div
                key={point.label}
                className={`flex flex-col-reverse gap-1 py-5 lg:py-6 ${
                  i % 2 === 1 ? "border-l border-paper/12 pl-5" : ""
                } ${i >= 2 ? "max-lg:border-t max-lg:border-paper/12" : ""} ${
                  i === 2 ? "lg:border-l lg:border-paper/12 lg:pl-5" : ""
                }`}
              >
                <dt className="text-[0.9375rem] text-paper/65">{point.label}</dt>
                <dd className="text-2xl font-semibold leading-none tracking-tight text-paper [font-stretch:108%]">
                  {point.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Three trades. One team."
              description="Electrical work, CCTV security and computer support from the same people — so one call covers the whole job."
            />
          </Reveal>

          <div className="mt-14 lg:mt-20">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug}>
                <article className="grid gap-x-10 gap-y-6 border-t border-ink/20 py-10 lg:grid-cols-12 lg:py-14">
                  <span className="type-label text-muted lg:col-span-1 lg:pt-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lg:col-span-5">
                    <h3 className="type-title text-ink">{service.title}</h3>
                    <p className="mt-4 max-w-md text-muted">{service.summary}</p>
                    <div className="mt-7 flex flex-col gap-x-6 gap-y-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <Button href={quoteLink(service.slug)} variant="dark">
                        {service.cta.label}
                        <ArrowIcon />
                      </Button>
                      <TextLink
                        href={`/services/${service.slug}`}
                        className="text-primary"
                      >
                        Service details
                      </TextLink>
                    </div>
                  </div>
                  {/* Phones show the first five; the service page has them all. */}
                  <ul className="grid content-start gap-x-8 sm:grid-cols-2 lg:col-span-6">
                    {service.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-line py-2.5 text-base text-ink max-sm:nth-[n+6]:hidden"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="border-t border-ink/20 pt-8">
            <TextLink href="/services" className="text-primary">
              View all services, including networking and data recovery
            </TextLink>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why Choose LEE"
                title="Reasons that hold up on the job"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <WhyChooseList />
          </div>
        </div>
      </section>

      <section className="tone-dark bg-ink text-paper">
        <div className="container-site grid gap-x-12 gap-y-8 py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <Reveal className="lg:col-span-8">
            <p className="type-label flex items-center gap-3 text-secondary">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-secondary"
              />
              24/7 emergency support
            </p>
            <h2 className="type-title mt-4">Need help now?</h2>
            <p className="type-lead mt-4 max-w-2xl text-paper/70">
              Electrical fault? Power problem? CCTV issue? Computer emergency?
              Call us and speak to a technician.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:justify-self-end">
            <Button href={site.phoneHref} className="w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phone}
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From first call to follow-up"
              description="You always know what happens next and what the work involves."
            />
          </Reveal>
          <div className="mt-14 lg:mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section id="about" className="section-y bg-surface">
        <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12 lg:items-center">
          <Reveal variant="clip" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={asset("/images/photos/fuse.webp")}
                alt="LEE electrician servicing a distribution board with an insulated screwdriver"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              eyebrow="About LEE"
              title="A local team for homes and businesses in Nairobi"
            />
            <p className="type-lead mt-7 max-w-xl text-muted">
              {site.name} provides electrical installations, CCTV security and
              computer support. Our goal is quality work with complete customer
              satisfaction — every time.
            </p>
            <dl className="mt-8 max-w-xl border-b border-line">
              <div className="grid gap-1 border-t border-line py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="type-label pt-1 text-muted">Areas we serve</dt>
                <dd className="text-base text-ink">
                  We provide electrical, CCTV and IT services across{" "}
                  {site.serviceArea}.
                </dd>
              </div>
              <div className="grid gap-1 border-t border-line py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="type-label pt-1 text-muted">Who we work for</dt>
                <dd className="text-base text-ink">
                  Homes, offices, shops, schools and other businesses.
                </dd>
              </div>
            </dl>
            <TextLink href="/about" className="mt-6 text-primary">
              More about us
            </TextLink>
          </Reveal>
        </div>
      </section>

      <section className="tone-dark section-y bg-ink text-paper">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Testimonials"
              title="What Our Customers Say"
            />
            <TextLink href="/testimonials" className="shrink-0 text-secondary">
              View all testimonials
            </TextLink>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-20">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.quote} delay={i * 100}>
                <TestimonialCard {...t} tone="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQs"
                title="Questions we hear most"
                description="Can’t see yours? Call or WhatsApp us and ask."
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <FaqList faqs={generalFaqs} />
          </Reveal>
        </div>
      </section>

      <CallToAction
        title="Tell us what needs doing."
        description="Get a free quote today. We respond quickly to homes, offices, schools and businesses across Nairobi."
      />
    </>
  );
}
