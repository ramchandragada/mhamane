import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private house construction, commercial buildings, redevelopment, renovation, and factory erection by Vishwa Construction.",
};

export default function ServicesPage() {
  return (
    <div className="bg-stone-warm pt-28">
      <section className="section-pad !pt-10">
        <div className="container-site">
          <p className="eyebrow">Services</p>
          <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Five specialisations. One standard of build quality.
          </h1>
          <p className="prose-site mt-6 max-w-2xl">
            Whether you are raising a family home, expanding a commercial
            footprint, renewing an older structure, or erecting a factory —
            Vishwa brings engineering clarity to the site.
          </p>
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
