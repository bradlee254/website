import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Cctv,
  CheckCircle2,
  Cpu,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { cctvServices, computerServices, electricalServices } from "@/lib/data";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Electrical, CCTV and computer services offered by ${site.name} — wiring, lighting, camera installation, repairs, software installation and more.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_55%)]" />
        <div className="container-site relative">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              From electrical installations and CCTV systems to computer
              repairs — professional solutions for every need.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/90">
              {[
                // "Licensed & experienced technicians",
                "Free, no-obligation quotes",
                "Fast, reliable response",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-5">
        <div className="container-site flex flex-wrap items-center justify-center gap-3 sm:justify-between">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#electrical"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:border-primary hover:bg-primary"
            >
              <Cable className="h-4 w-4" aria-hidden="true" />
              Electrical Services
            </a>
            <a
              href="#cctv"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:border-primary-dark hover:bg-primary-dark"
            >
              <Cctv className="h-4 w-4" aria-hidden="true" />
              CCTV Installation
            </a>
            <a
              href="#computer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:border-secondary hover:bg-secondary"
            >
              <Cpu className="h-4 w-4" aria-hidden="true" />
              Computer Services
            </a>
          </div>
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 font-heading text-sm font-semibold text-secondary transition-colors hover:text-white sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </section>

      <section id="electrical" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-ink shadow-xl">
                <Image
                  src={asset("/images/photos/fuse.png")}
                  alt="Electrical distribution board wiring"
                  width={677}
                  height={914}
                  className="aspect-[4/5] w-full object-cover opacity-95"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <SectionHeading
                align="left"
                eyebrow="Electrical"
                title="Electrical Services"
                description="Safe, certified and durable electrical work for homes and commercial buildings — from a single faulty switch to a full rewire."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Licensed, safety-certified electricians",
                  "Residential and commercial projects",
                  "Same-day fault finding available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {electricalServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <ServiceCard service={service} accent="primary" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={electricalServices.length * 80}>
            <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-dark via-primary to-secondary">
              <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="flex items-start gap-4 text-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Cable className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Need Electrical Help?
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      Get a free quote for your electrical project.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-heading text-sm font-semibold text-primary-dark transition-colors hover:bg-surface"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="cctv" className="scroll-mt-20 bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-ink shadow-xl">
                <Image
                  src={asset("/images/photos/panel.png")}
                  alt="Technician installing a security camera system"
                  width={677}
                  height={914}
                  className="aspect-[4/5] w-full object-cover opacity-95"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <SectionHeading
                align="left"
                eyebrow="CCTV"
                title="CCTV Installation"
                description="Complete security camera systems for homes and businesses — clear viewing, reliable recording and remote access from anywhere."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "HD cameras with night vision",
                  "Live remote viewing via phone or computer",
                  "Reliable local and cloud recording",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cctvServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <ServiceCard service={service} accent="primary-dark" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={cctvServices.length * 80}>
            <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-secondary">
              <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="flex items-start gap-4 text-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Cctv className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Ready to Secure Your Property?
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      Get a free quote for your CCTV installation.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-heading text-sm font-semibold text-primary-dark transition-colors hover:bg-surface"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="computer" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="lg:order-2">
              <div className="relative overflow-hidden rounded-2xl bg-ink shadow-xl">
                <Image
                  src={asset("/images/photos/laptop-repair.jpg")}
                  alt="Laptop repair and diagnostics in progress"
                  width={1800}
                  height={2250}
                  className="aspect-[4/5] w-full object-cover opacity-95"
                />
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:order-1">
              <SectionHeading
                align="left"
                eyebrow="Computer"
                title="Computer Services"
                description="Fast, reliable repairs and support to keep your devices running smoothly — for home users and businesses alike."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "All brands and operating systems",
                  "Same-day diagnostics on most repairs",
                  "Data-safe recovery and upgrades",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {computerServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <ServiceCard service={service} accent="secondary" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={computerServices.length * 80}>
            <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-primary to-primary-dark">
              <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="flex items-start gap-4 text-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Cpu className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Computer Troubles?
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      Describe your problem and we will fix it fast.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-heading text-sm font-semibold text-primary-dark transition-colors hover:bg-surface"
                >
                  Request a Repair
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <div className="container-site flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <Reveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Call us or send a message — we will help you figure out the
                right fix, fast.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3.5 font-heading text-base font-semibold text-ink shadow-lg transition-colors hover:bg-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3.5 font-heading text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
