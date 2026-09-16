import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-stone-warm">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">About Vishwa</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Construction with engineering judgement.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-6 prose-site">
            <p>
              Vishwa Construction is a Solapur-based construction company
              dedicated to building lasting structures — from private residences
              to commercial buildings, redevelopment, renovations, and factory
              erection.
            </p>
            <p>
              Led by civil engineer Er. Vishal Mhamane, our work is grounded in
              technical clarity, site discipline, and honest communication. We
              treat every project as a long-term asset for the people who will
              live and work in it.
            </p>
            <div className="grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-2">
              <div>
                <p className="font-display text-4xl text-copper">10+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-mute">
                  Years of field experience
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper">3</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-mute">
                  States of active delivery
                </p>
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.16em] text-ink-mute">
              Headquartered in {site.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
