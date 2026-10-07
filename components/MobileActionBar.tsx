import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const itemClass =
  "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-xs font-semibold tracking-tight";

/** Phone-only bar that keeps the three ways to reach LEE one tap away. */
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Contact shortcuts"
      className="tone-dark fixed inset-x-0 bottom-0 z-40 border-t border-paper/15 bg-ink pb-[env(safe-area-inset-bottom)] text-paper md:hidden"
    >
      <ul className="flex divide-x divide-paper/15">
        <li className="flex flex-1">
          <a href={site.phoneHref} className={itemClass}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call
          </a>
        </li>
        <li className="flex flex-1">
          <a
            href={whatsappLink("Hello LEE, I need help with ")}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
        </li>
        <li className="flex flex-1">
          <Link href="/contact" className={`${itemClass} bg-secondary text-ink`}>
            <FileText className="h-5 w-5" aria-hidden="true" />
            Free quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
