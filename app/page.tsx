import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle, Phone } from "lucide-react";
import Button, { ArrowIcon, TextLink } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import FaqList from "@/components/FaqList";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/SplitText";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseList from "@/components/WhyChooseList";
import { galleryItems, testimonials } from "@/lib/data";
import { featuredServices, generalFaqs, quoteLink } from "@/lib/services";
import { asset, site, whatsappLink } from "@/lib/site";

// Only claims the business can stand behind belong here.
const trustPoints = [
  { value: "10+", label: "Years experience" },
  { value: "24/7", label: "Emergency support" },
  { value: "Free", label: "Quotations before work" },
  { value: "Nairobi", label: "& surrounding areas" },
];

// Home-page images and short labels for the three headline services.
const servicePanels: Record<
  string,
  { label: string; src: string; alt: string }
> = {
  electrical: {
    label: "Electrical",
    src: asset("/images/photos/socket-installation.webp"),
    alt: "Technician fitting a wall socket with an insulated screwdriver",
  },
  cctv: {
    label: "CCTV",
    src: asset("/images/photos/cctv-installation.webp"),
    alt: "Technician on a stepladder mounting a dome CCTV camera to an office ceiling",
  },
  computer: {
    label: "Computer & IT",
    src: asset("/images/photos/data-recovery.webp"),
    alt: "Technician placing a hard drive into a drive dock beside a laptop",
  },
};

const workPreview = galleryItems.slice(1, 5);

export default function Home() {
  return (
    <>
      <section className="tone-dark overflow-hidden bg-ink text-paper">
        <div className="container-site grid gap-x-12 gap-y-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="type-label animate-fade-up flex items-center gap-3 text-secondary">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-current" />
              {site.name}
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
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contact">
                  Get a free quote
                  <ArrowIcon />
                </Button>
                <Button
                  href={whatsappLink("Hello LEE, I need help with ")}
                  variant="outline"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp us
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-1">
                {featuredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex min-h-11 items-center gap-2.5 text-[0.9375rem] font-medium text-paper/80 transition-colors hover:text-paper"
                      >
                        <Icon
                          className="h-4 w-4 text-secondary"
                          aria-hidden="true"
                        />
                        <span className="link-underline pb-0.5">
                          {servicePanels[service.slug]?.label ?? service.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
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
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our Services"
              title="Three trades. One team."
              description="Electrical work, CCTV security and computer support from the same people — so one call covers the whole job."
            />
            <TextLink href="/services" className="shrink-0 text-primary">
              All services
            </TextLink>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 lg:mt-16 lg:grid-cols-3">
            {featuredServices.map((service, i) => {
              const panel = servicePanels[service.slug];
              return (
                <Reveal key={service.slug} delay={i * 100}>
                  <article className="group flex h-full flex-col">
                    {/* The heading below is the real link; this one is for pointer users. */}
                    <Link
                      href={`/services/${service.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="relative block aspect-[4/3] overflow-hidden rounded-sm bg-ink"
                    >
                      {panel && (
                        <Image
                          src={panel.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 30vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                        />
                      )}
                    </Link>
                    <p className="type-label mt-6 text-primary">
                      {String(i + 1).padStart(2, "0")} — {service.tagline}
                    </p>
                    <h3 className="type-title mt-3 text-ink">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-muted">{service.summary}</p>
                    <ul className="mt-6 flex-1 border-t border-line">
                      {service.highlights?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 border-b border-line py-2.5 text-base text-ink"
                        >
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-7 text-[0.9375rem] font-semibold text-ink">
                      {service.cta.heading}
                    </p>
                    <Button
                      href={quoteLink(service.slug)}
                      variant="dark"
                      className="mt-3 self-start max-sm:w-full"
                    >
                      Get a free quote
                      <ArrowIcon />
                    </Button>
                  </article>
                </Reveal>
              );
            })}
          </div>
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

      <section className="section-y">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our Work"
              title="A look at the work we do"
              description="Electrical, CCTV, networking and computer jobs for homes and businesses."
            />
            <TextLink href="/gallery" className="shrink-0 text-primary">
              See more of our work
            </TextLink>
          </Reveal>
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-4">
            {workPreview.map((item, i) => (
              <li key={item.id}>
                <Reveal delay={i * 80}>
                  <Link
                    href={`/gallery?cat=${encodeURIComponent(item.category)}`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-ink"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/25 via-45% to-transparent" />
                    <span className="absolute inset-x-4 bottom-4">
                      <span className="type-label block text-secondary">
                        {item.category}
                      </span>
                      <span className="mt-1.5 block text-base font-semibold leading-tight tracking-tight text-paper sm:text-lg">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From first call to handover"
              description="You always know what happens next and what the work involves."
            />
          </Reveal>
          <div className="mt-14 lg:mt-16">
            <ProcessSteps />
          </div>
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

      <section id="faqs" className="section-y">
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

      <section className="tone-dark border-b border-paper/10 bg-ink text-paper">
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

      <CallToAction
        title="Tell us what needs doing."
        description="Get a free quote today. We respond quickly to homes, offices, schools and businesses across Nairobi."
      />
    </>
  );
}
