"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-stone-warm/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <Link
          href="/"
          className="group relative z-50"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-lg font-semibold tracking-[0.14em] uppercase text-ink sm:text-xl">
            Vishwa
          </span>
          <span className="mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-ink-mute">
            Construction
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-copper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone-warm transition-colors hover:bg-copper"
          >
            Get Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-stone-warm transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-10 pt-28 sm:px-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-semibold tracking-tight text-ink"
                style={{
                  transitionDelay: open ? `${120 + i * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="eyebrow mb-3">{site.location}</p>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex bg-ink px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
