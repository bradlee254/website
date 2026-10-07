import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MessageCircle } from "lucide-react";
import Button, { ArrowIcon, TextLink } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseList from "@/components/WhyChooseList";
import { getService, quoteLink, services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Only the services in lib/services.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((other) => other.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow={`Services / ${service.name}`}
        title={`${service.title}.`}
        description={service.intro}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={quoteLink(service.slug)}>
            {service.cta.label}
            <ArrowIcon />
          </Button>
          <Button
            href={whatsappLink(
              `Hello LEE, I need help with ${service.name.toLowerCase()}: `,
            )}
            variant="outline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp us
          </Button>
        </div>
      </PageHeader>

      <section className="section-y">
        <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Problems We Solve"
              title="When to call us"
            />
            <ul className="mt-9 border-b border-line">
              {service.problems.map((problem, i) => (
                <li
                  key={problem}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-t border-line py-4 text-base text-ink sm:text-[1.0625rem]"
                >
                  <span className="type-label text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            {service.image && (
              <Reveal variant="clip">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ink lg:aspect-[4/3]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={`object-cover ${service.image.position}`}
                  />
                </div>
              </Reveal>
            )}
            <Reveal delay={100} className={service.image ? "mt-10" : ""}>
              <h2 className="type-label text-primary">Who it’s for</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.audience.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line px-3.5 py-2 text-[0.9375rem] font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base text-muted">
                Serving {site.serviceArea}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="What’s Included"
                title="What we can do for you"
              />
              <Button
                href={quoteLink(service.slug)}
                variant="dark"
                className="mt-8"
              >
                {service.cta.label}
                <ArrowIcon />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <ul className="grid gap-x-10 border-t border-ink/20 sm:grid-cols-2">
              {service.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-ink/15 py-4 text-[1.0625rem] font-medium text-ink"
                >
                  <Check
                    className="mt-1.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            {service.detailImage && (
              <figure className="mt-10">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-ink">
                  <Image
                    src={service.detailImage.src}
                    alt={service.detailImage.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[0.9375rem] text-muted">
                  {service.detailImage.caption}
                </figcaption>
              </figure>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title={`How a ${service.name.toLowerCase().replace("cctv", "CCTV")} job runs`}
              description="You always know what happens next and what the work involves."
            />
          </Reveal>
          <div className="mt-14 lg:mt-16">
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Why Choose LEE" title="Why customers pick us" />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <WhyChooseList />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQs"
                title={`${service.name} questions`}
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <FaqList faqs={service.faqs} />
          </Reveal>
        </div>

        <div className="container-site mt-20 lg:mt-28">
          <h2 className="type-label text-primary">Other services</h2>
          <ul className="mt-5 grid border-b border-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
            {others.map((other) => (
              <li key={other.slug} className="border-t border-line">
                <Link
                  href={`/services/${other.slug}`}
                  className="group/btn flex min-h-16 items-center justify-between gap-4 py-4 text-[1.0625rem] font-semibold tracking-tight text-ink transition-colors hover:text-primary"
                >
                  {other.name}
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
          <TextLink href="/services" className="mt-6 text-primary">
            All services
          </TextLink>
        </div>
      </section>

      <CallToAction
        title={service.cta.heading}
        description="Tell us about the job and we will get back to you with a free quotation."
        actionLabel={service.cta.label}
        actionHref={quoteLink(service.slug)}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.seo.description,
          serviceType: service.name,
          url: `${site.url}/services/${service.slug}`,
          areaServed: { "@type": "City", name: "Nairobi" },
          provider: { "@id": `${site.url}/#business` },
        }}
      />
    </>
  );
}
