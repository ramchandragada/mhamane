import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-stone-warm">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Questions prospects usually ask.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/15 border-t border-ink/15">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <details className="group py-6">
                <summary className="cursor-pointer list-none font-display text-xl text-ink marker:content-none sm:text-2xl">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="prose-site mt-4 max-w-3xl pr-8">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
