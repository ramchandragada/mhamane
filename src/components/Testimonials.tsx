import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="section-pad bg-stone">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Client words</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Trust earned on site and at the drawing table.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <blockquote className="flex h-full flex-col border-t border-ink pt-6">
                <p className="flex-1 text-lg leading-relaxed text-ink-soft">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="font-display text-lg text-ink">{item.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-ink-mute">
                    {item.detail}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
