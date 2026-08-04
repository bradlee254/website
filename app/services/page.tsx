import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cable, Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { computerServices, electricalServices } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Electrical and computer services offered by ${site.name} — wiring, lighting, repairs, software installation and more.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 text-white sm:py-20">
        <div className="container-site">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              From electrical installations to computer repairs — professional
              solutions for every need.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="electrical" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Electrical"
              title="Electrical Services"
              description="Safe, certified and durable electrical work for homes and commercial buildings."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {electricalServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
            <Reveal delay={electricalServices.length * 80}>
              <div className="flex h-full flex-col items-start justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white sm:col-span-2 lg:col-span-3">
                <Cable className="h-8 w-8" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  Need Electrical Help?
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  Get a free quote for your electrical project.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-heading text-sm font-semibold text-primary-dark transition-colors hover:bg-surface"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="computer" className="scroll-mt-20 bg-surface py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Computer"
              title="Computer Services"
              description="Fast, reliable repairs and support to keep your devices running smoothly."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {computerServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
            <Reveal delay={computerServices.length * 80}>
              <div className="flex h-full flex-col items-start justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary p-6 text-white">
                <Cpu className="h-8 w-8" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  Computer Troubles?
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  Describe your problem and we will fix it fast.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-heading text-sm font-semibold text-primary-dark transition-colors hover:bg-surface"
                >
                  Request a Repair
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
