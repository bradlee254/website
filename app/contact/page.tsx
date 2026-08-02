import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} for electrical and computer services. Call, WhatsApp, email or send us an inquiry.`,
};

const contactCards = [
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
    href: site.whatsappHref,
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
    title: "Visit Us",
    value: site.address,
    sub: "Our business location",
    href: site.mapLink,
    Icon: MapPin,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 text-white sm:py-20">
        <div className="container-site">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Have a question or need a quote? We would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, i) => {
            const { title, value, sub, href, Icon, external } = card;
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-heading text-base font-semibold text-ink">
                  {title}
                </h2>
                <p className="mt-1 text-sm font-medium text-ink/80">{value}</p>
                <p className="mt-1 text-xs text-ink/50">{sub}</p>
              </>
            );
            return (
              <Reveal key={title} delay={i * 100}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  {content}
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-ink">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                  Working Hours
                </h2>
                <ul className="mt-4 space-y-3">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-ink/70">{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
                <iframe
                  src={site.mapEmbed}
                  title="Our business location on Google Maps"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
