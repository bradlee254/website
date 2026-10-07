export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

/** Long-form text layout for the privacy and terms pages. */
export default function LegalDocument({
  updated,
  sections,
}: {
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="section-y">
      <div className="container-site grid gap-x-12 gap-y-8 lg:grid-cols-12">
        <p className="type-label text-muted lg:col-span-3">
          Last updated
          <span className="mt-1 block text-ink">{updated}</span>
        </p>
        <div className="max-w-2xl lg:col-span-8">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="border-t border-line py-8 first:border-t-0 first:pt-0"
            >
              <h2 className="type-heading text-ink">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-muted">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-primary">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
