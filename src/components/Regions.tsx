import { regionDetails } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Regions() {
  return (
    <section className="relative overflow-hidden bg-ink text-stone-warm">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-steel/50 blur-3xl" />
      </div>
      <div className="container-site section-pad relative">
        <Reveal>
          <p className="eyebrow !text-stone-deep">Work area</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-stone-warm sm:text-5xl">
            Rooted in Solapur. Building across three states.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regionDetails.map((region, i) => (
            <Reveal key={region.name} delay={i * 100}>
              <div className="border border-white/20 px-6 py-10 transition-colors hover:border-brand/70">
                <p className="font-display text-xs tracking-[0.24em] text-brand-bright">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="display mt-6 text-3xl text-stone-warm sm:text-4xl">
                  {region.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-deep">
                  {region.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
