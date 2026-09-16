import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-ink text-stone-warm">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(184,106,58,0.18),transparent_55%)] lg:block" />
      <div className="container-site section-pad relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow !text-stone-deep">Leadership</p>
          <h2 className="display mt-4 text-4xl text-stone-warm sm:text-5xl lg:text-6xl">
            {site.md.name}
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-copper-bright">
            {site.md.title}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-deep">
              Er. Vishal Mhamane leads Vishwa Associates with an architect and
              civil engineer&apos;s eye for structure — and a builder&apos;s
              respect for craft. His approach balances design integrity with
              practical site realities.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <ul className="space-y-0 border-t border-white/15">
            {[
              site.md.education,
              site.md.experience,
              "Based in Solapur · Projects across MH, KA & TG",
              "Architecture · Interiors · Construction · Valuation · Estimate",
              "Civil engineering foundation with on-site build accountability",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-white/15 py-5 text-base leading-relaxed text-stone-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
