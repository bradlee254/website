import type { Service } from "@/lib/data";

export default function ServiceCard({
  service,
}: {
  service: Service;
}) {
  const Icon = service.icon;
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
