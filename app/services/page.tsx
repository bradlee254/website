import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Button, { ArrowIcon } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { quoteLink, services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrical, CCTV & Computer Services in Nairobi",
  description: `All services from ${site.name}: electrical installation and repairs, CCTV and security systems, computer repair, networking and data recovery in Nairobi.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Electrical, CCTV and computer services."
        description="Pick the service you need to see what is included, or go straight to a free quote."
      >
        <ul className="mt-7 space-y-2.5 text-[0.9375rem] text-paper/85">
          {["Free, no-obligation quotes", "Fast, reliable response"].map(
            (item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-secondary" aria-hidden="true" />
                {item}
              </li>
            ),
          )}
        </ul>
      </PageHeader>

      <section className="section-y">
        <div className="container-site">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug}>
                <article className="grid gap-x-10 gap-y-6 border-t border-ink/20 py-10 lg:grid-cols-12 lg:py-12">
                  <div className="flex items-center gap-4 lg:col-span-1 lg:flex-col lg:items-start lg:gap-5">
                    <span className="type-label text-muted lg:pt-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="type-title text-ink">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-md text-muted">{service.summary}</p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button href={quoteLink(service.slug)} variant="dark">
                        {service.cta.label}
                        <ArrowIcon />
                      </Button>
                      <Button
                        href={`/services/${service.slug}`}
                        variant="outline"
                      >
                        Service details
                      </Button>
                    </div>
                  </div>
                  <ul className="grid content-start gap-x-8 sm:grid-cols-2 lg:col-span-6">
                    {service.included.map((item) => (
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
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From first call to follow-up"
              description="The same five steps, whatever the job."
            />
          </Reveal>
          <div className="mt-14 lg:mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CallToAction
        title="Not Sure Which Service You Need?"
        description="Call us or send a message — we will help you figure out the right fix, fast."
        actionLabel="Get a free quote"
      />
    </>
  );
}
