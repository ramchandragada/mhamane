"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const text = encodeURIComponent(
      `Hello Vishwa Construction,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\n\n${message}`
    );

    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2 block">Name</span>
          <input
            required
            name="name"
            type="text"
            className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-copper"
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="eyebrow mb-2 block">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-copper"
            placeholder="+91"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow mb-2 block">Service interest</span>
        <select
          name="service"
          className="w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-copper"
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
          className="w-full resize-y border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-copper"
          placeholder="Location, plot size, timeline, and what you want to build…"
        />
      </label>

      <button
        type="submit"
        className="bg-ink px-8 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-copper"
      >
        Send via WhatsApp
      </button>

      {submitted && (
        <p className="text-sm text-ink-mute">
          Opening WhatsApp with your enquiry. If it didn&apos;t open, message us
          at {site.phone}.
        </p>
      )}
    </form>
  );
}
