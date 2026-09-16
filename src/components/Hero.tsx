import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Active construction site with scaffolding and rising concrete structure"
          fill
          priority
          className="object-cover object-center animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 md:px-12 lg:px-16 lg:pb-24">
        <div className="container-site max-w-5xl">
          <p
            className="font-display text-[clamp(2.6rem,8vw,6.4rem)] font-semibold uppercase leading-[0.92] tracking-[0.06em] text-stone-warm opacity-0 animate-fade-up"
            style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
          >
            Vishwa
            <br />
            Construction
          </p>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-stone-deep opacity-0 animate-fade-up sm:text-xl"
            style={{ animationDelay: "280ms", animationFillMode: "forwards" }}
          >
            {site.tagline}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "420ms", animationFillMode: "forwards" }}
          >
            <Link
              href="/contact"
              className="bg-copper px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-copper-bright"
            >
              Start a Project
            </Link>
            <Link
              href="/#services"
              className="border border-stone-warm/40 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:border-stone-warm hover:bg-stone-warm/10"
            >
              Our Expertise
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
