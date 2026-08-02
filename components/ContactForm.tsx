"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_w1xn9ar";
const EMAILJS_TEMPLATE_ID = "template_m7ti8pg";
const EMAILJS_PUBLIC_KEY = "ZhNPdVIAFBzYHXV4Q";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          from_phone: form.phone,
          from_service: form.service,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-xl font-semibold text-ink">
          Inquiry Sent!
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">
          Thank you for reaching out. We have received your message and will
          get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="font-heading text-xl font-semibold text-ink">
        Send an Inquiry
      </h2>
      <p className="mt-1 text-sm text-ink/60">
        Fill in the form and we will respond as soon as possible.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 700 000 000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Wiring & Installation">Wiring & Installation</option>
            <option value="Lighting Solutions">Lighting Solutions</option>
            <option value="Power Outlets & Switches">Power Outlets & Switches</option>
            <option value="Fault Finding & Repairs">Fault Finding & Repairs</option>
            <option value="Safety Inspections">Safety Inspections</option>
            <option value="PC & Laptop Repairs">PC & Laptop Repairs</option>
            <option value="Software Installation">Software Installation</option>
            <option value="Virus & Malware Removal">Virus & Malware Removal</option>
            <option value="System Upgrades">System Upgrades</option>
            <option value="Data Backup & Recovery">Data Backup & Recovery</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project or problem…"
            value={form.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-heading text-base font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
