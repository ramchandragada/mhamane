"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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

  const solid = scrolled || open || !isHome;
  const ink = solid ? "text-ink" : "text-stone-warm";
  const mute = solid ? "text-ink-mute" : "text-stone-deep";
  const link = solid
    ? "text-ink-soft hover:text-copper"
    : "text-stone-warm/85 hover:text-stone-warm";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-ink/10 bg-stone-warm/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <Link
          href="/"
          className="group relative z-50"
          onClick={() => setOpen(false)}
        >
          <span
            className={`font-display text-lg font-semibold tracking-[0.14em] uppercase sm:text-xl ${ink}`}
          >
            Vishwa
          </span>
          <span
            className={`mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${mute}`}
          >
            Construction
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors ${link}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
              solid
                ? "bg-ink text-stone-warm hover:bg-copper"
                : "bg-stone-warm text-ink hover:bg-copper hover:text-stone-warm"
            }`}
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
            className={`h-px w-6 transition-transform duration-300 ${
              solid ? "bg-ink" : "bg-stone-warm"
            } ${open ? "translate-y-[3.5px] rotate-45 !bg-ink" : ""}`}
          />
          <span
            className={`h-px w-6 transition-opacity duration-300 ${
              solid ? "bg-ink" : "bg-stone-warm"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              solid ? "bg-ink" : "bg-stone-warm"
            } ${open ? "-translate-y-[3.5px] -rotate-45 !bg-ink" : ""}`}
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
            {navLinks.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-semibold tracking-tight text-ink"
                style={{
                  transitionDelay: open ? `${120 + i * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                {item.label}
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
