import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-stone-warm">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden bg-stone-deep">
            <Image
              src="/images/real/photo-04.jpg"
              alt="Architectural design by Vishwa Associates"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">About Vishwa Associates</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            End-to-end construction under one roof.
          </h2>
          <div className="mt-6 space-y-5 prose-site">
            <p>
              Vishwa Associates is a Solapur-based practice spanning
              architecture, interior design, construction, valuation, and
              estimates — a true one-stop partner for residences, commercial
              spaces, redevelopment, renovations, and industrial builds.
            </p>
            <p>
              Clients come to us so they do not have to run from pillar to post
              for design, sanctions, materials, technical decisions, or site
              labour. Led by Er. Vishal Mhamane, we take single-point ownership
              from first sketch to final handover — for total peace of mind.
            </p>
            <div className="grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-display text-4xl text-copper">10+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-mute">
                  Years in the field
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper">5</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-mute">
                  Core disciplines
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper">1</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-mute">
                  Accountable team
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-mute">
              {site.disciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm uppercase tracking-[0.16em] text-ink-mute">
              Headquartered in {site.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
