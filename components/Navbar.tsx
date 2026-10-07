"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone, X, Zap } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { site, whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Our Work" },
  // Enable once the reviews carry real customer names.
  // { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // The menu only exists below the lg breakpoint.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`tone-dark sticky top-0 z-50 bg-ink text-paper transition-shadow duration-300 ${
        scrolled && !open ? "shadow-[0_1px_0_0_rgb(245_244_238/0.12)]" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="container-site flex h-(--header-h) items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-secondary text-ink">
            <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-extrabold tracking-tight [font-stretch:122%]">
              LEE
            </span>
            <span className="mt-1 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] text-paper/65">
              Electrical & Computer
            </span>
          </span>
        </Link>

        <ul className="hidden h-full items-stretch gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href} className="flex">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center text-[0.9375rem] font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-secondary after:transition-transform after:duration-300 after:ease-out-expo ${
                    active
                      ? "text-paper after:scale-x-100"
                      : "text-paper/65 after:scale-x-0 hover:text-paper hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Phones use the bottom action bar for these instead. */}
          <a
            href={whatsappLink("Hello LEE, I need help with ")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-paper/25 text-paper transition-colors duration-200 hover:border-paper hover:bg-paper/5 md:inline-flex"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className="hidden h-11 shrink-0 items-center justify-center rounded-sm bg-secondary px-5 text-[0.9375rem] font-semibold tracking-tight text-ink transition-colors duration-200 hover:bg-paper md:inline-flex"
          >
            Get a free quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-sm text-paper transition-colors hover:bg-paper/10 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          data-lenis-prevent
          className="animate-fade-in fixed inset-x-0 bottom-0 top-(--header-h) overflow-y-auto border-t border-paper/10 bg-ink lg:hidden"
        >
          <div className="container-site flex min-h-full flex-col justify-between gap-12 pb-24 pt-6">
            <ul>
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <li
                    key={link.href}
                    className="animate-fade-up border-b border-paper/10"
                    style={{ "--delay": `${i * 50}ms` } as React.CSSProperties}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-baseline gap-4 py-4 text-3xl font-semibold tracking-tight ${
                        active ? "text-secondary" : "text-paper"
                      }`}
                    >
                      <span className="type-label w-6 text-paper/45">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div
              className="animate-fade-up flex flex-col gap-3"
              style={{ "--delay": "300ms" } as React.CSSProperties}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={buttonClass("primary")}
              >
                Get a free quote
              </Link>
              <a href={site.phoneHref} className={buttonClass("outline")}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
