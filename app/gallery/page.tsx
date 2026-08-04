import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Browse completed projects by ${site.name} — electrical wiring, lighting installations and computer repairs.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 text-white sm:py-20">
        <div className="container-site">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Our Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              A look at some of the projects we have completed. Click any image
              to enlarge it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <Suspense
              fallback={
                <div className="grid grid-flow-dense grid-cols-1 auto-rows-[200px] gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={
                        i % 6 === 0
                          ? "col-span-1 animate-pulse rounded-2xl bg-black/10 sm:col-span-2 sm:row-span-2"
                          : "col-span-1 animate-pulse rounded-2xl bg-black/10"
                      }
                    />
                  ))}
                </div>
              }
            >
              <GalleryGrid />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
