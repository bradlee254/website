import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Button, { ArrowIcon } from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SectionNav from "@/components/SectionNav";
import ServiceCard from "@/components/ServiceCard";
import {
  cctvServices,
  computerServices,
  electricalServices,
  type Service,
} from "@/lib/data";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Electrical, CCTV and computer services offered by ${site.name} — wiring, lighting, camera installation, repairs, software installation and more.`,
};

type Category = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  imagePosition: string;
  services: Service[];
  ctaLabel: string;
  ctaNote: string;
};

const categories: Category[] = [
  {
    id: "electrical",
    navLabel: "Electrical Services",
    eyebrow: "Electrical",
    title: "Electrical Services",
    description:
      "Safe, certified and durable electrical work for homes and commercial buildings — from a single faulty switch to a full rewire.",
    points: [
      "Licensed, safety-certified electricians",
      "Residential and commercial projects",
      "Same-day fault finding available",
    ],
    image: asset("/images/photos/fuse.png"),
    imageAlt: "Electrical distribution board wiring",
    imagePosition: "object-[50%_30%]",
    services: electricalServices,
    ctaLabel: "Get a quote",
    ctaNote: "Get a free quote for your electrical project.",
  },
  {
    id: "cctv",
    navLabel: "CCTV Installation",
    eyebrow: "CCTV",
    title: "CCTV Installation",
    description:
      "Complete security camera systems for homes and businesses — clear viewing, reliable recording and remote access from anywhere.",
    points: [
      "HD cameras with night vision",
      "Live remote viewing via phone or computer",
      "Reliable local and cloud recording",
    ],
    image: asset("/images/photos/panel.png"),
    imageAlt: "LEE technician at work on an installation",
    imagePosition: "object-[50%_22%]",
    services: cctvServices,
    ctaLabel: "Get a quote",
    ctaNote: "Get a free quote for your CCTV installation.",
  },
  {
    id: "computer",
    navLabel: "Computer Services",
    eyebrow: "Computer",
    title: "Computer Services",
    description:
      "Fast, reliable repairs and support to keep your devices running smoothly — for home users and businesses alike.",
    points: [
      "All brands and operating systems",
      "Same-day diagnostics on most repairs",
      "Data-safe recovery and upgrades",
    ],
    image: asset("/images/photos/laptop-repair.jpg"),
    imageAlt: "Laptop repair and diagnostics in progress",
    imagePosition: "object-[50%_70%]",
    services: computerServices,
    ctaLabel: "Request a repair",
    ctaNote: "Describe your problem and we will fix it fast.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Electrical, CCTV and computer services."
        description="From electrical installations and CCTV systems to computer repairs — professional solutions for every need."
      >
        <ul className="mt-7 space-y-2.5 text-[0.9375rem] text-paper/85">
          {[
            // "Licensed & experienced technicians",
            "Free, no-obligation quotes",
            "Fast, reliable response",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-secondary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </PageHeader>

      <SectionNav
        label="Service categories"
        links={categories.map(({ id, navLabel }) => ({ id, label: navLabel }))}
      />

      {categories.map((category, i) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-y scroll-mt-[calc(var(--header-h)+3.25rem)] ${
            i % 2 === 1 ? "bg-surface" : ""
          }`}
        >
          <div className="container-site grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-40">
                <SectionHeading
                  eyebrow={`${String(i + 1).padStart(2, "0")} — ${category.eyebrow}`}
                  title={category.title}
                  description={category.description}
                />
                <ul className="mt-8 max-w-md">
                  {category.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 border-t border-line py-3.5 text-base text-ink"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
                  <Button href="/contact" variant="dark" className="shrink-0">
                    {category.ctaLabel}
                    <ArrowIcon />
                  </Button>
                  <p className="text-[0.9375rem] text-muted">
                    {category.ctaNote}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal variant="clip">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ink">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover ${category.imagePosition}`}
                  />
                </div>
              </Reveal>
              <ul className="mt-10 border-b border-line">
                {category.services.map((service, n) => (
                  <li key={service.title}>
                    <Reveal delay={n * 60}>
                      <ServiceCard service={service} index={n + 1} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CallToAction
        title="Not Sure Which Service You Need?"
        description="Call us or send a message — we will help you figure out the right fix, fast."
        actionLabel="Contact us"
      />
    </>
  );
}
