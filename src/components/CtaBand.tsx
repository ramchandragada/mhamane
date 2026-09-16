import Link from "next/link";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="container-site section-pad relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink/70">
                Ready when you are
              </p>
              <h2 className="display mt-4 text-4xl text-ink sm:text-5xl lg:text-6xl">
                Let&apos;s discuss your next build.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-ink/80">
                Share your plot, timeline, and vision — we&apos;ll respond with
                clear next steps.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit bg-ink px-8 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-ink-soft"
            >
              Contact Vishwa Associates
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
