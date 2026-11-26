import { generalFaqs, services } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * A plain-text summary of the site for AI assistants (llmstxt.org format),
 * built from the same data as the pages so it stays in sync.
 */
export function GET() {
  const hours = site.hours.map((h) => `${h.day}: ${h.time}`).join("; ");

  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Service area: ${site.serviceArea}. Hours: ${hours}.`,
    `Phone and WhatsApp: ${site.phone}. Email: ${site.email}. Free quotes on request.`,
    "",
    "## Services",
    "",
    ...services.map(
      (s) => `- [${s.title}](${site.url}/services/${s.slug}): ${s.summary}`,
    ),
    "",
    "## Common questions",
    "",
    ...generalFaqs.map((f) => `- ${f.question} ${f.answer}`),
    "",
    "## Pages",
    "",
    `- [Contact and free quote](${site.url}/contact)`,
    `- [About us](${site.url}/about)`,
    `- [Our work](${site.url}/gallery)`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
