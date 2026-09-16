import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior design, construction, valuation, and estimates by Vishwa Associates.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-stone-warm pt-28">
      <section className="section-pad !pt-10">
        <div className="container-site grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Five disciplines. One accountable team.
            </h1>
            <p className="prose-site mt-6 max-w-2xl">
              Architecture, interiors, construction, valuation, and estimates —
              plus approvals support, procurement, and site management. One
              partner from first sketch to handover, so you never chase the
              project yourself.
            </p>
          </div>
          <div className="border border-ink/10 bg-stone p-8 sm:p-10">
            <p className="eyebrow">What to expect</p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink-mute">
              <li>Design and estimates under one roof</li>
              <li>Support for government approvals &amp; sanctions</li>
              <li>Material procurement with transparent costing</li>
              <li>Contractor and labour management on site</li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-ink px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-brand hover:text-ink"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-pad ${index % 2 === 0 ? "bg-stone" : "bg-stone-warm"}`}
        >
          <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div
              className={`relative aspect-[5/4] overflow-hidden ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <p className="font-display text-sm tracking-[0.2em] text-copper">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl">
                {service.title}
              </h2>
              <p className="prose-site mt-5">{service.summary}</p>
              <p className="prose-site mt-4 text-ink-mute">{service.detail}</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex bg-ink px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-copper"
              >
                Request this service
              </Link>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </div>
  );
}
