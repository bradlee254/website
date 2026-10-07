import Reveal from "@/components/Reveal";
import { whyChooseLee } from "@/lib/services";

/** Numbered reasons to choose LEE. */
export default function WhyChooseList() {
  return (
    <ol>
      {whyChooseLee.map((reason, i) => (
        <li key={reason.title}>
          <Reveal
            delay={i * 70}
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-6 sm:grid-cols-[3.5rem_1fr_1.4fr] sm:items-baseline sm:gap-x-6 sm:py-7"
          >
            <span className="type-label pt-1 text-primary sm:pt-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="type-heading text-ink">{reason.title}</h3>
            <p className="col-start-2 mt-1.5 text-base text-muted sm:col-start-3 sm:mt-0">
              {reason.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
