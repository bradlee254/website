import Reveal from "@/components/Reveal";
import { processSteps, type Step } from "@/lib/services";

/** Numbered steps; defaults to the general process from first contact to handover. */
export default function ProcessSteps({
  steps = processSteps,
}: {
  steps?: Step[];
}) {
  return (
    <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.title}>
          <Reveal
            delay={i * 80}
            className="h-full border-t-2 border-ink/15 py-6 lg:pb-0"
          >
            <span className="type-label text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="type-heading mt-3 text-ink">{step.title}</h3>
            <p className="mt-2 text-base text-muted">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
