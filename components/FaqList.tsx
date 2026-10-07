import { Plus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import type { Faq } from "@/lib/services";

/** Expandable questions, with matching FAQ structured data. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <div className="border-b border-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-t border-line">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="type-heading text-ink">{faq.question}</h3>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line text-primary transition-[transform,background-color,color,border-color] duration-300 ease-out-expo group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-paper">
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </summary>
            <p className="max-w-2xl pb-7 pr-14 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </>
  );
}
