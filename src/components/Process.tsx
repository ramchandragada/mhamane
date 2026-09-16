import { processSteps } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="section-pad bg-stone">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            From brief to keys — without the chase.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="h-full border-t border-ink pt-6">
                <p className="font-display text-sm tracking-[0.2em] text-copper">
                  {item.step}
                </p>
                <h3 className="display mt-4 text-2xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
