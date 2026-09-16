import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad bg-stone-warm">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">What we build</p>
          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Specialised construction across homes, commerce, and industry.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0 border-t border-ink/15">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <article className="group grid gap-8 border-b border-ink/15 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:py-14">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-deep">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div>
                  <p className="font-display text-sm tracking-[0.2em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display mt-3 text-[1.75rem] leading-tight sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="prose-site mt-4 max-w-xl">{service.summary}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="link-underline mt-6 inline-flex text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink"
                  >
                    Explore service
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
