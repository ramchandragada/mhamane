import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-stone-warm">
      <div className="container-site section-pad grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.12em] uppercase sm:text-4xl">
            Vishwa
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.28em] text-stone-deep">
            Construction
          </p>
          <p className="mt-6 max-w-md text-stone-deep">
            Building private homes, commercial spaces, and industrial structures
            across Maharashtra, Karnataka, and Telangana — from Solapur.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-stone-deep mb-4">Navigate</p>
          <ul className="space-y-3 text-sm tracking-wide">
            <li>
              <Link href="/#services" className="hover:text-copper-bright">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#work" className="hover:text-copper-bright">
                Selected Work
              </Link>
            </li>
            <li>
              <Link href="/#leadership" className="hover:text-copper-bright">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-copper-bright">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-stone-deep mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm tracking-wide text-stone-deep">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-copper-bright">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-copper-bright"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 sm:px-8 md:px-12 lg:px-16">
        <div className="container-site flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-stone-deep sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Solapur · Maharashtra · Karnataka · Telangana</p>
        </div>
      </div>
    </footer>
  );
}
