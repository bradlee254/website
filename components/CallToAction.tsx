import { Phone } from "lucide-react";
import Button, { ArrowIcon } from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

/** Closing band: one message, call or request a quote. */
export default function CallToAction({
  title,
  description,
  actionLabel = "Get a free quote",
  actionHref = "/contact",
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <section className="tone-dark bg-primary-dark text-paper">
      <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:py-24">
        <Reveal className="lg:col-span-7">
          <h2 className="type-title max-w-[18ch]">{title}</h2>
          <p className="type-lead mt-5 max-w-xl text-paper/75">{description}</p>
        </Reveal>
        <Reveal
          delay={120}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end"
        >
          <Button href={actionHref}>
            {actionLabel}
            <ArrowIcon />
          </Button>
          <Button href={site.phoneHref} variant="outline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
