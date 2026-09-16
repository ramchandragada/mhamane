"use client";

import { FormEvent, useState } from "react";
import { site, whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();

    if (!name || !phone || !message) {
      setError("Please fill in name, phone, and project details.");
      return;
    }

    const text = `Hello Vishwa Associates,\n\nName: ${name}\nPhone: ${phone}${
      email ? `\nEmail: ${email}` : ""
    }\nService: ${service}\n\n${message}`;

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="space-y-4 py-6">
        <p className="font-display text-2xl text-ink">Thank you.</p>
        <p className="prose-site">
          WhatsApp should open with your enquiry. If it didn&apos;t, message us
          at {site.phone} or email {site.email}. We typically reply within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="link-underline text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2 block">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-brand"
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="eyebrow mb-2 block">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-brand"
            placeholder="+91"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow mb-2 block">Email (optional)</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-brand"
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="eyebrow mb-2 block">Service interest</span>
        <select
          name="service"
          className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-brand"
          defaultValue="Architecture"
        >
          <option>Architecture</option>
          <option>Interior Design</option>
          <option>Construction</option>
          <option>Valuation</option>
          <option>Estimate</option>
          <option>General Enquiry</option>
        </select>
      </label>

      <label className="block">
        <span className="eyebrow mb-2 block">Project details</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-brand"
          placeholder="Location, plot size, timeline, and what you want to build…"
        />
      </label>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        className="bg-ink px-8 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-brand hover:text-ink"
      >
        Send via WhatsApp
      </button>

      <p className="text-sm text-ink-mute">
        Or{" "}
        <a
          href={`mailto:${site.email}`}
          className="link-underline text-ink"
        >
          email us
        </a>{" "}
        /{" "}
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="link-underline text-ink"
        >
          call {site.phone}
        </a>
        . We&apos;ll only use your details to respond to this enquiry.
      </p>
    </form>
  );
}
