import { endToEndPillars } from "@/lib/site";
import { Reveal } from "./Reveal";

export function OneStop() {
  return (
    <section id="one-stop" className="section-pad bg-ink text-stone-warm">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow !text-stone-deep">Why Vishwa</p>
          <h2 className="display mt-4 max-w-3xl text-4xl text-stone-warm sm:text-5xl lg:text-6xl">
            One stop. End to end. Total peace of mind.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-deep sm:text-lg">
            Building usually means chasing an architect, then a sanction clerk,
            then suppliers, then contractors, then labour — and hoping someone
            owns the outcome. Vishwa Associates is the single partner for people
            who want to build without running from pillar to post.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {endToEndPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 70}>
              <div className="border-t border-white/20 pt-6">
                <p className="font-display text-xs tracking-[0.22em] text-brand-bright">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-4 text-2xl text-stone-warm sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-deep sm:text-base">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-16 max-w-3xl border-l-2 border-brand pl-6 text-lg leading-relaxed text-stone-warm sm:text-xl">
            Design, government approvals, material procurement, technical
            expertise, contractor management, and labour management — under one
            accountable team. You focus on the life you want to live in the
            building. We handle the build.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
