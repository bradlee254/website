import type { Metadata } from "next";
import Button, { ArrowIcon } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="tone-dark flex flex-1 items-center bg-ink text-paper">
      <div className="container-site py-24 lg:py-32">
        <p className="type-label flex items-center gap-3 text-secondary">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Error 404
        </p>
        <h1 className="type-display mt-6 max-w-[14ch]">
          Looks like this page needs fixing.
        </h1>
        <p className="type-lead mt-6 max-w-xl text-paper/70">
          The page you were looking for has moved or does not exist. These will
          get you back on track.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/">
            Back home
            <ArrowIcon />
          </Button>
          <Button href="/services" variant="outline">
            View services
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
