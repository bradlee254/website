import type { Metadata } from "next";
import { Suspense } from "react";
import CallToAction from "@/components/CallToAction";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: `See some of the electrical, CCTV and IT work carried out by ${site.name} in Nairobi.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Recent work, up close."
        description="A look at the kind of electrical, CCTV and IT work we do. Click any image to enlarge it."
      />

      <section className="section-y">
        <div className="container-site">
          <Suspense
            fallback={
              <div
                role="status"
                aria-label="Loading gallery"
                className="grid grid-flow-dense auto-rows-[260px] grid-cols-1 gap-3 sm:auto-rows-[240px] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[280px] lg:grid-cols-3"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`animate-pulse rounded-sm bg-ink/10 ${
                      i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  />
                ))}
              </div>
            }
          >
            <GalleryGrid />
          </Suspense>
        </div>
      </section>

      <CallToAction
        title="Want work like this at your place?"
        description="Tell us about the job and we will get back to you with a free quote."
      />
    </>
  );
}
