import type { Service } from "@/lib/data";

const accentClasses = {
  primary: {
    border: "border-t-primary",
    icon: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  },
  secondary: {
    border: "border-t-secondary",
    icon: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
  },
  "primary-dark": {
    border: "border-t-primary-dark",
    icon: "bg-primary-dark/10 text-primary-dark group-hover:bg-primary-dark group-hover:text-white",
  },
} as const;

export default function ServiceCard({
  service,
  accent = "primary",
}: {
  service: Service;
  accent?: keyof typeof accentClasses;
}) {
  const Icon = service.icon;
  const classes = accentClasses[accent];
  return (
    <div
      className={`group flex h-full flex-col items-start gap-4 rounded-2xl border-t-4 bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${classes.border}`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${classes.icon}`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-base font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/70">
          {service.description}
        </p>
      </div>
    </div>
  );
}
