import type { Service } from "@/lib/data";

/** One line of a service list: number, name, what it covers. */
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <div className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-4 border-t border-line py-6 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6">
      <span className="type-label pt-1.5 text-muted">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="type-heading text-ink">{service.title}</h3>
        <p className="mt-1.5 max-w-md text-base text-muted">
          {service.description}
        </p>
      </div>
      <span className="hidden h-11 w-11 items-center justify-center rounded-sm border border-line text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-paper sm:flex">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
    </div>
  );
}
