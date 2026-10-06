import Image from "next/image";
import { Check, Phone } from "lucide-react";
import Button, { ArrowIcon, TextLink } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/SplitText";
import TestimonialCard from "@/components/TestimonialCard";
import { featuredServices, testimonials, whyChooseUs } from "@/lib/data";
import { asset, site } from "@/lib/site";

const stats = [
  ["10+", "Years Experience"],
  ["24/7", "Emergency Support"],
  ["2-in-1", "Electrical & IT Expertise"],
  ["100%", "Customer Satisfaction Focus"],
];

const heroServices = [
  "Electrical Installation",
  "CCTV Installation",
  "Computer Repairs",
  "Data Recovery",
  "24/7 Support",
];

export default function Home() {
  return (
    <>
      <section className="tone-dark overflow-hidden bg-ink text-paper">
        <div className="container-site grid gap-x-12 gap-y-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="type-label animate-fade-up flex items-center gap-3 text-secondary">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              Trusted Electrical & Computer Experts
            </p>
            <h1 className="type-display mt-6 max-w-[15ch]">
              <SplitText text="Electrical and computer support for homes and businesses." />
            </h1>
            <div
              className="animate-fade-up"
              style={{ "--delay": "500ms" } as React.CSSProperties}
            >
              <p className="type-lead mt-7 max-w-xl text-paper/70">
                {site.tagline}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">
                  Get a free quote
                  <ArrowIcon />
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-clip-in lg:col-span-5">
            <Parallax className="aspect-[5/4] rounded-sm bg-ink-soft sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={asset("/images/photos/panel.png")}
                alt="LEE technician in uniform working on an electrical distribution board"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_22%]"
              />
            </Parallax>
          </div>
        </div>

        <div className="border-t border-paper/12">
          <ul className="container-site flex flex-wrap gap-x-8 gap-y-2 py-5 text-[0.9375rem] text-paper/75">
            {heroServices.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-secondary"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="section-y">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow="About Our Company"
                title="Quality Work, Delivered with Customer Satisfaction"
              />
              <p className="type-lead mt-7 max-w-xl text-muted">
                {site.name} provides professional electrical installations,
                computer repairs, software support, and maintenance services.
                Our goal is delivering quality work with complete customer
                satisfaction — every time.
              </p>
              <ul className="mt-9 grid max-w-xl gap-x-8 sm:grid-cols-2">
                {[
                  "Licensed, experienced technicians",
                  "Fast response and reliable service",
                  "Affordable, transparent pricing",
                  "Safe, industry-standard workmanship",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-line py-4 text-base text-ink"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <TextLink href="/about" className="mt-6 text-primary">
                Learn more about us
              </TextLink>
            </Reveal>

            <Reveal variant="clip" delay={120} className="lg:col-span-5">
              <Parallax className="aspect-[4/5] rounded-sm bg-surface sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image
                  src={asset("/images/photos/fuse.png")}
                  alt="LEE electrician servicing a distribution board with an insulated screwdriver"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
              </Parallax>
            </Reveal>
          </div>

          <dl className="mt-16 grid grid-cols-2 border-t border-line lg:mt-24 lg:grid-cols-4">
            {stats.map(([value, label], i) => (
              <Reveal
                key={label}
                delay={i * 80}
                className="border-b border-line py-7 pr-4 lg:border-b-0 lg:pb-0"
              >
                <div className="flex flex-col-reverse gap-2">
                  <dt className="text-[0.9375rem] text-muted">{label}</dt>
                  <dd className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-none tracking-tight text-ink [font-stretch:108%]">
                    {value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="What We Do"
              description="Professional solutions for every electrical and computer need — from wiring your home to recovering lost data."
            />
          </Reveal>

          <div className="mt-14 lg:mt-20">
            {featuredServices.map((service, i) => (
              <Reveal key={service.title}>
                <article className="group grid gap-x-10 gap-y-6 border-t border-ink/20 py-10 lg:grid-cols-12 lg:py-14">
                  <span className="type-label text-muted lg:col-span-1 lg:pt-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lg:col-span-4">
                    <h3 className="type-title text-ink">{service.title}</h3>
                    <p className="mt-4 max-w-sm text-muted">
                      {service.description}
                    </p>
                    <TextLink href={service.href} className="mt-5 text-primary">
                      View {service.title.toLowerCase()}
                    </TextLink>
                  </div>
                  <ul className="self-start lg:col-span-3 lg:pt-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 py-1.5 text-base text-ink"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ink lg:col-span-4 lg:aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={`${service.title} in progress`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover object-[50%_25%] transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="The LEE Difference"
                description="We combine technical expertise with genuine care for every client."
              />
            </div>
          </Reveal>
          <ol className="lg:col-span-7">
            {whyChooseUs.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <li key={feature.title}>
                  <Reveal
                    delay={i * 100}
                    className="grid grid-cols-[2.75rem_1fr] gap-x-5 border-t border-line py-8 sm:grid-cols-[3.5rem_1fr] sm:py-10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="type-heading text-ink">{feature.title}</h3>
                      <p className="mt-2 max-w-md text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="tone-dark section-y bg-ink text-paper">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Testimonials"
              title="What Our Clients Say"
              description="Real reviews from satisfied customers."
            />
            <TextLink href="/testimonials" className="shrink-0 text-secondary">
              View all testimonials
            </TextLink>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-20">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delay={i * 100}>
                <TestimonialCard {...t} tone="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Need an Electrician or Computer Expert?"
        description="Get a free quote today. We respond quickly to homes, offices, schools and businesses."
      />
    </>
  );
}
