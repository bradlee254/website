"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, Loader2, Send } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { site } from "@/lib/site";

const EMAILJS_SERVICE_ID = "service_50qapou";
const EMAILJS_TEMPLATE_ID = "template_en1c078";
const EMAILJS_PUBLIC_KEY = "-BsDadyzu1JUsZYdR";

const SERVICE_OPTIONS = [
  "Wiring & Installation",
  "Lighting Solutions",
  "Power Outlets & Switches",
  "Fault Finding & Repairs",
  "Safety Inspections",
  "CCTV Installation",
  "PC & Laptop Repairs",
  "Software Installation",
  "Virus & Malware Removal",
  "System Upgrades",
  "Data Backup & Recovery",
  "Other",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

type FormState = typeof initialForm;
type FieldName = keyof FormState;
type FieldErrors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = ["name", "email", "phone", "service", "message"];

// Same rules as app/api/contact/route.ts.
function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.name.trim().length < 2) {
    errors.name = "Enter your full name so we know who to reply to.";
  }
  if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Enter a valid email address, like you@example.com.";
  }
  if (form.phone.trim() !== "" && !PHONE_REGEX.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }
  if (!SERVICE_OPTIONS.includes(form.service)) {
    errors.service = "Choose the service you need.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "Describe the job in at least 10 characters.";
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
  const [form, setForm] = useState(initialForm);
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
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          from_phone: form.phone.trim(),
          from_service: form.service,
          message: form.message.trim(),
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
        <h2 className="type-title mt-6 text-ink">Inquiry sent.</h2>
        <p className="type-lead mt-4 max-w-md text-muted">
          Thank you for reaching out. We have received your message and will
          get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={buttonClass("outline", "mt-8")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={submitting}>
      <h2 className="type-title text-ink">Send an inquiry</h2>
      <p className="mt-3 text-muted">
        Fill in the form and we will respond as soon as possible.
      </p>

      <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            {...fieldProps("name")}
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            {...fieldProps("email")}
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            placeholder="you@example.com"
          />
        </Field>
        <Field id="phone" label="Phone number" optional error={errors.phone}>
          <input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="+254 700 000 000"
          />
        </Field>
        <Field id="service" label="Service needed" error={errors.service}>
          <select {...fieldProps("service")} required>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id="message"
          label="Message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            {...fieldProps("message")}
            rows={6}
            required
            placeholder="Tell us about your project or problem…"
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
            Send inquiry
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
