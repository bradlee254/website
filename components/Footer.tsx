import Link from "next/link";
import { AtSign, Clock, Globe, Mail, MapPin, Phone, Send, Zap } from "lucide-react";
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
  { href: "/services#computer", label: "Computer Services" },
  { href: "/contact", label: "Get a Quote" },
  { href: "/contact", label: "Request Repair" },
];

const socials = [
  { href: "https://facebook.com", label: "Facebook", Icon: Globe },
  { href: "https://instagram.com", label: "Instagram", Icon: AtSign },
  { href: "https://twitter.com", label: "Twitter", Icon: Send },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-white">
              <Zap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-semibold">
              LEE
              <span className="block text-[11px] font-medium uppercase tracking-wide text-secondary">
                Electrical & Computer
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Professional electrical installations, computer repairs, software
            support and maintenance services. Quality work with complete
            customer satisfaction.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 transition-colors hover:bg-secondary hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-start gap-2.5 transition-colors hover:text-secondary"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2.5 transition-colors hover:text-secondary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
              {site.address}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: <span className="text-white/50">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <p>Professional Electrical & Computer Services</p>
        </div>
      </div>
    </footer>
  );
}
