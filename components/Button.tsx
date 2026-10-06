import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  /** Lime — the main action. Use on dark backgrounds. */
  primary: "bg-secondary text-ink hover:bg-paper",
  /** Ink — the main action on light backgrounds. */
  dark: "bg-ink text-paper hover:bg-primary-dark",
  /** Outline — secondary action; inherits the surrounding text colour. */
  outline: "border border-current/30 hover:border-current hover:bg-current/5",
} as const;

const base =
  "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm px-6 py-3 text-[0.9375rem] font-semibold leading-tight tracking-tight transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]";

export function buttonClass(
  variant: keyof typeof variants = "primary",
  className = "",
) {
  return `${base} ${variants[variant]} ${className}`;
}

/** Arrow that nudges forward when its parent button or link is hovered. */
export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-1 ${className}`}
    />
  );
}

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = buttonClass(variant, className);
  // Internal routes go through the router; tel:, mailto: and URLs do not.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Low-emphasis text link with an arrow. */
export function TextLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group/btn inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold tracking-tight ${className}`}
    >
      <span className="link-underline pb-0.5">{children}</span>
      <ArrowIcon />
    </Link>
  );
}
