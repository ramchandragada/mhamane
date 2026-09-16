import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center bg-stone-warm px-5 text-center">
      <span className="mb-8 flex h-16 w-16 text-brand">
        <BrandLogo className="h-full w-full" />
      </span>
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl sm:text-5xl">
        This page isn&apos;t on the drawings.
      </h1>
      <p className="prose-site mt-4 max-w-md">
        The link may be outdated or mistyped. Head home or reach out — we&apos;re
        happy to help.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center bg-ink px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-stone-warm"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center border border-ink/20 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
