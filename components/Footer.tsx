import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services#electrical", label: "Electrical Services" },
  { href: "/services#cctv", label: "CCTV Installation" },
  { href: "/services#computer", label: "Computer Services" },
  { href: "/contact", label: "Get a Quote" },
  { href: "/contact", label: "Request Repair" },
];

const socials = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
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
                <span className="mt-1 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] text-paper/65">
                  Electrical & Computer
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.9375rem] text-paper/65">
              Professional electrical installations, computer repairs, software
              support and maintenance services. Quality work with complete
              customer satisfaction.
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-block text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-none tracking-tight text-paper transition-colors hover:text-secondary"
            >
              {site.phone}
            </a>
            <p className="mt-3">
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </p>
          </div>

          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="mt-5 space-y-1">
              {quickLinks.map((link) => (
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
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={headingClass}>Visit & Hours</h3>
            <p className="mt-5 text-[0.9375rem] text-paper/80">{site.address}</p>
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
            {socials.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-paper sm:min-h-0"
                >
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
