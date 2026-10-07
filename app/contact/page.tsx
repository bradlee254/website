import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request a free quote from ${site.name} for electrical, CCTV and computer services in Nairobi. Call, WhatsApp, email or use the form.`,
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    title: "Call Us",
    value: site.phone,
    sub: "Click to call",
    href: site.phoneHref,
    Icon: Phone,
    external: false,
  },
  {
    title: "WhatsApp",
    value: site.whatsapp,
    sub: "Chat with us",
    href: whatsappLink("Hello LEE, I need help with "),
    Icon: MessageCircle,
    external: true,
  },
  {
    title: "Email",
    value: site.email,
    sub: "We reply fast",
    href: `mailto:${site.email}`,
    Icon: Mail,
    external: false,
  },
  {
    title: "Location",
    value: site.locality,
    sub: `Serving ${site.serviceArea}`,
    href: site.mapLink,
    Icon: MapPin,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Request a free quote."
        description="Tell us what you need by form, phone or WhatsApp. For anything urgent, calling is fastest."
      />

      <section className="section-y">
        <div className="container-site grid gap-x-12 gap-y-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {/* The form reads ?service= from the URL, which needs a boundary. */}
            <Suspense fallback={<div className="h-[40rem] animate-pulse rounded-sm bg-ink/5" />}>
              <ContactForm />
            </Suspense>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <h2 className="type-label text-primary">Reach us directly</h2>
            <ul className="mt-5 border-b border-line">
              {contactMethods.map(({ title, value, sub, href, Icon, external }) => (
                <li key={title}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group grid grid-cols-[2.75rem_1fr_auto] items-center gap-x-4 border-t border-line py-5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-paper">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="type-label block text-muted">
                        {title}
                      </span>
                      <span className="mt-1 block break-words text-base font-semibold text-ink">
                        {value}
                      </span>
                      <span className="block text-sm text-muted">{sub}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="type-label mt-12 text-primary">Working hours</h2>
            <dl className="mt-5 border-b border-line">
              {site.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-baseline justify-between gap-4 border-t border-line py-3.5 text-base"
                >
                  <dt className="text-muted">{h.day}</dt>
                  <dd className="text-right font-semibold text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="container-site mt-16 lg:mt-24">
          <h2 className="type-label mb-5 text-primary">
            Areas we serve — {site.serviceArea}
          </h2>
          <Reveal variant="clip">
            <div className="overflow-hidden rounded-sm border border-line bg-surface">
              <iframe
                src={site.mapEmbed}
                title="Map of Nairobi, the area we serve"
                className="block h-[320px] w-full border-0 sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
