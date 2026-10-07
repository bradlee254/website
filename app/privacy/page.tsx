import type { Metadata } from "next";
import LegalDocument, { type LegalSection } from "@/components/LegalDocument";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the personal information you share through this website.`,
  alternates: { canonical: "/privacy" },
};

// Review with a qualified adviser before relying on this text; it describes how
// the website works today and must be kept in step with any changes.
const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `${site.name} ("LEE", "we", "us") provides electrical, CCTV and computer services in ${site.serviceArea}. This policy explains what personal information we collect through this website and how we use it, in line with Kenya's Data Protection Act, 2019.`,
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: ["We only collect information you choose to give us:"],
    list: [
      "Quote request form: your name, phone number, email address, location (if you provide it), the service you need and your description of the problem.",
      "Phone calls, WhatsApp messages and emails: your contact details and whatever you tell us about the job.",
    ],
  },
  {
    heading: "How we use it",
    list: [
      "To reply to your enquiry and prepare a quotation.",
      "To arrange and carry out the work you ask for.",
      "To follow up after a job and keep records of work done.",
    ],
    paragraphs: [
      "We do not sell your information and we do not use it for marketing unless you ask us to keep in touch.",
    ],
  },
  {
    heading: "Services that process your information for us",
    paragraphs: [
      "The quote form is delivered to our inbox by EmailJS, an email delivery service. If you contact us on WhatsApp, your messages are handled by WhatsApp. The contact page shows a map provided by Google Maps, which may set its own cookies when the map loads. These providers process information under their own privacy policies.",
    ],
  },
  {
    heading: "Cookies and tracking",
    paragraphs: [
      "This website does not use advertising or analytics cookies. The embedded Google map on the contact page may set cookies of its own.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiries and job records for as long as we need them to do the work, answer follow-up questions and meet our legal and accounting obligations, and then delete them.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. You may also object to how we use it. If you are not satisfied with our response, you can complain to the Office of the Data Protection Commissioner in Kenya.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `To make a request or ask a question about this policy, email ${site.email} or call ${site.phone}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy."
        description="What we collect when you contact us, and what we do with it."
      />
      <LegalDocument updated="October 2026" sections={sections} />
    </>
  );
}
