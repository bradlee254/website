export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** "dark" when the heading sits on an ink background. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`type-label flex items-center gap-3 ${
            centered ? "justify-center" : ""
          } ${dark ? "text-secondary" : "text-primary"}`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2 className={`type-title mt-5 ${dark ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`type-lead mt-5 ${dark ? "text-paper/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
