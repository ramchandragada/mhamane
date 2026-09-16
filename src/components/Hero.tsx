import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/real/photo-06.jpg"
          alt="Modern residential architecture by Vishwa Associates"
          fill
          priority
          className="object-cover object-center animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/30" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-20 md:px-12 lg:px-16 lg:pb-24">
        <div className="container-site max-w-5xl">
          <div
            className="mb-6 flex items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "60ms", animationFillMode: "forwards" }}
          >
            <span className="flex h-14 w-14 items-center justify-center text-brand-bright sm:h-16 sm:w-16">
              <BrandLogo className="h-full w-full" />
            </span>
          </div>

          <p
            className="font-display text-[clamp(2.15rem,11vw,6.4rem)] font-semibold uppercase leading-[0.92] tracking-[0.04em] text-stone-warm opacity-0 animate-fade-up sm:tracking-[0.06em]"
            style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
          >
            Vishwa
            <br />
            Associates
          </p>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-stone-deep opacity-0 animate-fade-up sm:mt-6 sm:text-xl"
            style={{ animationDelay: "280ms", animationFillMode: "forwards" }}
          >
            {site.tagline}
          </p>

          <div
            className="mt-8 flex w-full flex-col gap-3 opacity-0 animate-fade-up sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: "420ms", animationFillMode: "forwards" }}
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-brand px-6 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-brand-bright sm:px-7 sm:text-[0.75rem] sm:tracking-[0.18em]"
            >
              Start a Project
            </Link>
            <Link
              href="/#services"
              className="inline-flex min-h-12 items-center justify-center border border-stone-warm/40 px-6 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-stone-warm transition-colors hover:border-stone-warm hover:bg-stone-warm/10 sm:px-7 sm:text-[0.75rem] sm:tracking-[0.18em]"
            >
              Our Expertise
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
