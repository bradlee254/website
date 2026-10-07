import type { Metadata } from "next";
import LegalDocument, { type LegalSection } from "@/components/LegalDocument";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using the ${site.name} website and requesting our services.`,
  alternates: { canonical: "/terms" },
};

// Review with a qualified adviser before relying on this text.
const sections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      `These terms apply to your use of the ${site.name} website. By using the site you agree to them. Work we carry out for you is covered by the quotation we give you for that job.`,
    ],
  },
  {
    heading: "Information on this website",
    paragraphs: [
      "We aim to keep the information on this site accurate and current, but it is general information about our services, not advice for your specific situation. Electrical work is dangerous: do not attempt repairs yourself based on anything you read here.",
    ],
  },
  {
    heading: "Quotations and bookings",
    list: [
      "Sending a quote request does not create a contract. A job is confirmed only when we have given you a quotation and you have accepted it.",
      "Quotations are based on the information available at the time. If the work turns out to be different once we assess it, we will tell you before continuing.",
      "Response times mentioned on this site are what we aim for and can vary with workload and location.",
    ],
  },
  {
    heading: "Your responsibilities",
    list: [
      "Give us accurate contact details and an honest description of the problem.",
      "Do not misuse the site, for example by sending spam through the form or attempting to disrupt it.",
    ],
  },
  {
    heading: "Content and images",
    paragraphs: [
      `The text, logo and design of this site belong to ${site.name} unless stated otherwise. Some photographs are used under licence from their owners. Please do not reuse them without permission.`,
    ],
  },
  {
    heading: "Links to other services",
    paragraphs: [
      "This site links to services such as WhatsApp and Google Maps. We are not responsible for the content or practices of those services.",
    ],
  },
  {
    heading: "Changes and governing law",
    paragraphs: [
      "We may update these terms from time to time; the date above shows the latest version. These terms are governed by the laws of Kenya.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `Questions about these terms? Email ${site.email} or call ${site.phone}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service."
        description="The terms for using this website and requesting our services."
      />
      <LegalDocument updated="October 2026" sections={sections} />
    </>
  );
}
