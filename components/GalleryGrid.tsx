"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { galleryItems } from "@/lib/data";

type Filter = "All" | "Electrical" | "Computer";

const FILTERS: Filter[] = ["All", "Electrical", "Computer"];

// One large lead tile per six; the rest fill a 3-column grid without gaps.
const BENTO_SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "",
  "sm:max-lg:col-span-2",
];

export default function GalleryGrid({
  showAll = true,
}: {
  showAll?: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>(() => {
    const cat = searchParams.get("cat");
    return cat === "Electrical" || cat === "Computer" ? cat : "All";
  });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const items = useMemo(
    () =>
      showAll
        ? galleryItems
        : galleryItems.filter((item) => item.category === "Electrical"),
    [showAll],
  );

  const visible = useMemo(
    () =>
      filter === "All"
        ? items
        : items.filter((item) => item.category === filter),
    [items, filter],
  );

  function selectFilter(next: Filter) {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next === "All") {
      url.searchParams.delete("cat");
    } else {
      url.searchParams.set("cat", next);
    }
    router.replace(url.pathname + url.search, { scroll: false });
  }

  // Move focus into the viewer when it opens and back to the tile on close.
  const isOpen = lightbox !== null;
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    return () => openerRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + visible.length) % visible.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, visible.length]);

  const navButtonClass =
    "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm bg-paper/10 text-paper transition-colors hover:bg-paper/20";

  return (
    <div>
      {showAll && (
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mb-10 flex gap-x-8 overflow-x-auto border-b border-line"
        >
          {FILTERS.map((f) => {
            const count =
              f === "All"
                ? items.length
                : items.filter((item) => item.category === f).length;
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => selectFilter(f)}
                aria-pressed={active}
                className={`relative -mb-px flex min-h-12 shrink-0 items-baseline gap-2 border-b-2 text-base font-semibold transition-colors duration-200 ${
                  active
                    ? "border-primary text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {f}
                <span className="type-label text-muted">
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {visible.length === 0 ? (
        <div className="border-t border-line py-16">
          <p className="type-heading text-ink">
            No {filter.toLowerCase()} projects to show yet.
          </p>
          <p className="mt-2 text-muted">
            We are still adding photos of this kind of work.
          </p>
          <button
            type="button"
            onClick={() => selectFilter("All")}
            className="link-underline mt-6 min-h-11 font-semibold text-primary"
          >
            View all projects
          </button>
        </div>
      ) : (
        <ul className="grid grid-flow-dense auto-rows-[260px] grid-cols-1 gap-3 sm:auto-rows-[240px] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[280px] lg:grid-cols-3">
          {visible.map((item, i) => (
            <li
              key={item.id}
              className={`animate-fade-up ${BENTO_SPANS[i % BENTO_SPANS.length]}`}
              style={{ "--delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setLightbox(i);
                }}
                aria-label={`Enlarge image: ${item.label}`}
                className="group relative block h-full w-full overflow-hidden rounded-sm bg-ink text-left"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/30 via-45% to-transparent" />
                <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <span>
                    <span className="type-label block text-secondary">
                      {item.category}
                    </span>
                    <span className="mt-1.5 block text-lg font-semibold leading-tight tracking-tight text-paper">
                      {item.label}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-paper text-ink transition-transform duration-300 ease-out-expo group-hover:rotate-90">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {lightbox !== null && visible[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          data-lenis-prevent
          className="tone-dark animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          style={{ overscrollBehavior: "contain" }}
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-sm bg-paper/10 text-paper transition-colors hover:bg-paper/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          {visible.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((i) =>
                    i === null ? i : (i - 1 + visible.length) % visible.length,
                  );
                }}
                className={`${navButtonClass} left-3 sm:left-6`}
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((i) =>
                    i === null ? i : (i + 1) % visible.length,
                  );
                }}
                className={`${navButtonClass} right-3 sm:right-6`}
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}

          <figure
            key={visible[lightbox].id}
            className="animate-fade-up max-h-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              width={1024}
              height={768}
              className="mx-auto max-h-[72vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-5 flex items-baseline justify-between gap-6 text-paper">
              <span>
                <span className="type-label block text-secondary">
                  {visible[lightbox].category}
                </span>
                <span className="mt-1.5 block text-lg font-semibold tracking-tight">
                  {visible[lightbox].label}
                </span>
              </span>
              <span className="type-label shrink-0 text-paper/60" aria-live="polite">
                {String(lightbox + 1).padStart(2, "0")} /{" "}
                {String(visible.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
