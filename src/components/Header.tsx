"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site, whatsappLink } from "@/lib/site";

const whatsappGreeting =
  "Hello Vishwa Associates, I would like to discuss a project.";

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = (scrolled || !isHome) && !open;
  const ink = solid || open ? "text-ink" : "text-stone-warm";
  const mute = solid || open ? "text-ink-mute" : "text-stone-deep";
  const link = solid
    ? "text-ink-soft hover:text-brand"
    : "text-stone-warm/85 hover:text-stone-warm";
  const logoColor = solid || open ? "text-brand" : "text-brand-bright";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${
          open ? "z-[70]" : "z-50"
        } ${
          open
            ? "border-b border-ink/10 bg-stone-warm"
            : solid
              ? "border-b border-ink/10 bg-stone-warm/90 backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between px-5 py-3.5 sm:px-8 md:px-12 lg:px-16">
          <Link
            href="/"
            className="group relative z-50 flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12 ${logoColor}`}
            >
              <BrandLogo className="h-full w-full" />
            </span>
            <span className="leading-none">
              <span
                className={`font-display text-lg font-semibold tracking-[0.12em] uppercase sm:text-xl ${ink}`}
              >
                Vishwa
              </span>
              <span
                className={`mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.26em] ${mute}`}
              >
                Associates
              </span>
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
                  ? "bg-ink text-stone-warm hover:bg-brand"
                  : "bg-stone-warm text-ink hover:bg-brand hover:text-ink"
              }`}
            >
              Get Quote
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-[80] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 origin-center transition-transform duration-300 ${
                solid || open ? "bg-ink" : "bg-stone-warm"
              } ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 transition-opacity duration-300 ${
                solid || open ? "bg-ink" : "bg-stone-warm"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 origin-center transition-transform duration-300 ${
                solid || open ? "bg-ink" : "bg-stone-warm"
              } ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Outside header so backdrop-blur doesn't trap fixed overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-stone-warm transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-10 pt-28 sm:px-8">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="font-display text-4xl font-semibold tracking-tight text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-1">{site.location}</p>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="inline-flex min-h-12 items-center justify-center bg-ink px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-stone-warm"
            >
              Get Quote
            </Link>
            <a
              href={whatsappLink(whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="inline-flex min-h-12 items-center justify-center bg-[#25D366] px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              tabIndex={open ? 0 : -1}
              className="inline-flex min-h-12 items-center justify-center border border-ink/20 px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
