import Link from "next/link";
import { Zap } from "lucide-react";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Our Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const headingClass = "type-label text-paper/50";
const linkClass =
  "link-underline inline-block py-1 text-[0.9375rem] text-paper/80 transition-colors hover:text-paper";

export default function Footer() {
  return (
    <footer className="tone-dark bg-ink text-paper">
      <div className="container-site">
        <div className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-secondary text-ink">
                <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
              <span className="leading-none">
                <span className="block text-xl font-extrabold tracking-tight [font-stretch:122%]">
                  LEE
                </span>
                <span className="mt-1 block font-mono text-[0.5625rem] font-medium uppercase tracking-[0.1em] text-paper/65 min-[360px]:text-[0.625rem] min-[360px]:tracking-[0.14em]">
                  Electrical & Computer Services
                </span>
              </span>
            </Link>
            <p className="mt-6 text-lg font-semibold tracking-tight text-paper">
              {site.tagline}
            </p>
            <p className="mt-2 max-w-sm text-[0.9375rem] text-paper/65">
              {site.description}
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-block text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-none tracking-tight text-paper transition-colors hover:text-secondary"
            >
              {site.phone}
            </a>
            <ul className="mt-3 flex flex-wrap gap-x-6">
              <li>
                <a
                  href={whatsappLink("Hello LEE, I need help with ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className={headingClass}>Company</h3>
            <ul className="mt-5 space-y-1">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-2">
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-5 space-y-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={linkClass}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={headingClass}>Area & Hours</h3>
            <p className="mt-5 text-[0.9375rem] text-paper/80">
              Serving {site.serviceArea}
            </p>
            <dl className="mt-5 space-y-2 text-[0.9375rem]">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt className="text-paper/60">{h.day}</dt>
                  <dd className="text-right text-paper/90">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 py-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-paper sm:min-h-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
