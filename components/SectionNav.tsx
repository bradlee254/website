"use client";

import { useEffect, useState } from "react";

/** Sticky in-page jump links that highlight the section currently in view. */
export default function SectionNav({
  links,
  label,
}: {
  links: { id: string; label: string }[];
  label: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // A section is "current" while it crosses a band just below the sticky bars.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav
      aria-label={label}
      className="sticky top-(--header-h) z-30 border-b border-line bg-paper/95 backdrop-blur-sm"
    >
      <ul className="container-site flex gap-x-8 overflow-x-auto">
        {links.map((link) => {
          const current = active === link.id;
          return (
            <li key={link.id} className="shrink-0">
              <a
                href={`#${link.id}`}
                aria-current={current ? "location" : undefined}
                className={`-mb-px flex min-h-13 items-center border-b-2 text-[0.9375rem] font-semibold transition-colors duration-200 ${
                  current
                    ? "border-primary text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
