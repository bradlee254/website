"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Check, Loader2, Send } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { QUOTE_SERVICE_OPTIONS, getService } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

const EMAILJS_SERVICE_ID = "service_50qapou";
const EMAILJS_TEMPLATE_ID = "template_en1c078";
const EMAILJS_PUBLIC_KEY = "-BsDadyzu1JUsZYdR";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  message: "",
};

type FormState = typeof initialForm;
type FieldName = keyof FormState;
type FieldErrors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = [
  "service",
  "name",
  "phone",
  "location",
  "email",
  "message",
];

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.name.trim().length < 2) {
    errors.name = "Enter your full name so we know who to reply to.";
  }
  if (form.email.trim() !== "" && !EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Enter a valid email address, or leave this blank.";
  }
  if (!PHONE_REGEX.test(form.phone.trim())) {
    errors.phone = "Enter a phone number we can call you back on.";
  }
  if (!QUOTE_SERVICE_OPTIONS.includes(form.service)) {
    errors.service = "Choose the service you need.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "Describe the problem in at least 10 characters.";
  }
  return errors;
}

const inputClass =
  "w-full rounded-sm border border-ink/25 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-colors hover:border-ink/45 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 aria-invalid:border-danger aria-invalid:ring-danger/20";

function Field({
  id,
  label,
  optional = false,
  error,
  className = "",
  children,
}: {
  id: FieldName;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between text-[0.9375rem] font-semibold text-ink"
      >
        {label}
        {optional && (
          <span className="text-sm font-normal text-muted">Optional</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  // Service pages link here with ?service=<slug> to preselect the service.
  const [form, setForm] = useState(() => ({
    ...initialForm,
    service: getService(searchParams.get("service") ?? "")?.name ?? "",
  }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const name = e.target.name as FieldName;
    setForm((f) => ({ ...f, [name]: e.target.value }));
    // Clear a field's error as soon as the user starts correcting it.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function fieldProps(name: FieldName) {
    return {
      id: name,
      name,
      value: form[name],
      onChange: handleChange,
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      className: inputClass,
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const found = validate(form);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: "Lee Electronics",
          name: form.name.trim(),
          from_name: form.name.trim(),
          from_email: form.email.trim() || "Not provided",
          // Email is optional; fall back to our own address so the template's
          // reply-to field is never empty.
          reply_to: form.email.trim() || site.email,
          from_phone: form.phone.trim(),
          from_location: form.location.trim(),
          from_service: form.service,
          // Location is repeated in the message so it shows even if the email
          // template has no location field.
          message: form.location.trim()
            ? `${form.message.trim()}\n\nLocation: ${form.location.trim()}`
            : form.message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="animate-fade-up border-t-2 border-primary pt-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-paper">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="type-title mt-6 text-ink">Request sent.</h2>
        <p className="type-lead mt-4 max-w-md text-muted">
          Thank you for reaching out. We have received your request and will
          get back to you shortly. For anything urgent, call {site.phone}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={buttonClass("outline", "mt-8")}
        >
          Send another request
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={submitting}>
      <h2 className="type-title text-ink">Request a free quote</h2>
      <p className="mt-3 max-w-xl text-muted">
        Tell us what you need and we will get back to you with a quotation.
        Have photos of the problem?{" "}
        <a
          href={whatsappLink("Hello LEE, I would like a quote for ")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-4"
        >
          Send them on WhatsApp
        </a>
        .
      </p>

      <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <Field
          id="service"
          label="What service do you need?"
          error={errors.service}
          className="sm:col-span-2"
        >
          <select {...fieldProps("service")} required>
            <option value="" disabled>
              Select a service
            </option>
            {QUOTE_SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="name" label="Full name" error={errors.name}>
          <input
            {...fieldProps("name")}
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
          />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            {...fieldProps("phone")}
            type="tel"
            required
            autoComplete="tel"
            placeholder="+254 700 000 000"
          />
        </Field>
        <Field id="location" label="Location" optional error={errors.location}>
          <input
            {...fieldProps("location")}
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Westlands, Nairobi"
          />
        </Field>
        <Field id="email" label="Email" optional error={errors.email}>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="you@example.com"
          />
        </Field>
        <Field
          id="message"
          label="Describe the problem"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            {...fieldProps("message")}
            rows={5}
            required
            placeholder="What needs installing, fixing or checking?"
          />
        </Field>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 rounded-sm border border-danger/30 bg-danger/5 px-4 py-3 text-[0.9375rem] text-danger"
        >
          We couldn’t send your message. Check your connection and try again, or
          call us on{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={buttonClass(
          "dark",
          "mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
        )}
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Request a free quote
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="mt-4 text-sm text-muted">
        We use these details only to respond to your request. See our{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
