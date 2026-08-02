"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryItems } from "@/lib/data";

type Filter = "All" | "Electrical" | "Computer";

const FILTERS: Filter[] = ["All", "Electrical", "Computer"];

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

  const filters: Filter[] = FILTERS;

  return (
    <div>
      {showAll && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => selectFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-white"
                  : "bg-white text-ink/70 ring-1 ring-black/10 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`Enlarge image: ${item.label}`}
              className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={480}
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                {item.category}
              </span>
              <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <span className="font-heading text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          style={{ overscrollBehavior: "contain" }}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) =>
                i === null ? i : (i - 1 + visible.length) % visible.length,
              );
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              width={1024}
              height={768}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-secondary">
                {visible[lightbox].category}
              </span>
              <p className="mt-2 text-sm text-white/80">
                {visible[lightbox].label}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
