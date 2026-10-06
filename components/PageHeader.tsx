import SplitText from "@/components/SplitText";

/** Dark title band shared by every inner page. */
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="tone-dark bg-ink text-paper">
      <div className="container-site pb-14 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        <p className="type-label animate-fade-up flex items-center gap-3 text-secondary">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
        <div className="mt-6 grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
          <h1 className="type-display lg:col-span-7">
            <SplitText text={title} />
          </h1>
          <div
            className="animate-fade-up lg:col-span-5 lg:pb-2"
            style={{ "--delay": "350ms" } as React.CSSProperties}
          >
            <p className="type-lead max-w-md text-paper/70">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
