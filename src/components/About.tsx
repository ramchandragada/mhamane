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
            Design and construction with engineering judgement.
          </h2>
          <div className="mt-6 space-y-5 prose-site">
            <p>
              Vishwa Associates is a Solapur-based practice spanning
              architecture, interior design, construction, valuation, and
              estimates — delivering private residences, commercial spaces,
              redevelopment, renovations, and industrial builds.
            </p>
            <p>
              Led by Er. Vishal Mhamane, our work is grounded in technical
              clarity, design judgement, and honest communication. We treat
              every project as a long-term asset for the people who will live
              and work in it.
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
                <p className="font-display text-4xl text-copper">3</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-mute">
                  States served
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
