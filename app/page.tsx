import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { featuredServices, testimonials, whyChooseUs } from "@/lib/data";
import { asset, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-ink text-white">
        <Image
          src={asset("/images/photos/electrical-testing.jpg")}
          alt="Electrical technician testing wiring inside a control panel"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-site relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 sm:py-20">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
              <Sparkles className="h-4 w-4 text-secondary" aria-hidden="true" />
              Trusted Electrical & Computer Experts
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Professional electrical and computer support for homes and businesses
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3.5 font-heading text-base font-semibold text-ink shadow-lg transition-colors hover:bg-white"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 px-7 py-3.5 font-heading text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Contact Us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/90">
              {["Electrical Installation", "CCTV Installation", "Computer Repairs", "Data Recovery", "24/7 Support"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      className="h-4 w-4 text-secondary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="about" className="bg-ink py-12 text-white sm:py-14">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10+", "Years Experience"],
            ["24/7", "Emergency Support"],
            ["2-in-1", "Electrical & IT Expertise"],
            ["100%", "Customer Satisfaction Focus"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-white/15 pl-5">
              <p className="font-heading text-3xl font-bold text-secondary">
                {value}
              </p>
              <p className="mt-1 text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg bg-ink shadow-xl">
              <Image
                src={asset("/images/photos/panel.png")}
                alt="Electrical and computer technicians at work"
                width={640}
                height={520}
                className="aspect-[5/4] w-full object-cover opacity-95"
              />
              <div className="absolute bottom-4 right-4 hidden rounded-lg bg-white p-5 text-ink shadow-lg sm:block">
                <p className="font-heading text-3xl font-bold">10+</p>
                <p className="text-sm text-ink/65">Years Experience</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              align="left"
              eyebrow="About Our Company"
              title="Quality Work, Delivered with Customer Satisfaction"
            />
            <p className="mt-5 leading-relaxed text-muted">
              {site.name} provides professional electrical installations,
              computer repairs, software support, and maintenance services. Our
              goal is delivering quality work with complete customer
              satisfaction — every time.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Licensed, experienced technicians",
                "Fast response and reliable service",
                "Affordable, transparent pricing",
                "Safe, industry-standard workmanship",
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
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="What We Do"
              description="Professional solutions for every electrical and computer need — from wiring your home to recovering lost data."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 120} className={service.fullWidth ? "lg:col-span-2" : ""}>
                  <article className="group grid h-full overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-64">
                      <Image
                        src={service.image}
                        alt={`${service.title} in progress`}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col p-7">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.accent} text-white`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <ul className="mt-5 grid flex-1 gap-2.5">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-ink/75">
                            <CheckCircle2
                              className="h-4 w-4 shrink-0 text-secondary"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="mt-7 inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The LEE Difference"
              description="We combine technical expertise with genuine care for every client."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={i * 120}>
                  <article className="h-full rounded-2xl border-t-4 border-primary bg-surface p-7 text-center transition-transform hover:-translate-y-1">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {feature.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What Our Clients Say"
              description="Real reviews from satisfied customers."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delay={i * 120}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-colors hover:text-white"
              >
                View All Testimonials
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-dark to-primary py-16 sm:py-20">
        <div className="container-site flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <Reveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Need an Electrician or Computer Expert?
              </h2>
              <p className="mt-3 max-w-xl text-white/85">
                Get a free quote today. We respond quickly to homes, offices,
                schools and businesses.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-heading text-base font-semibold text-primary-dark shadow-lg transition-colors hover:bg-surface"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3.5 font-heading text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
