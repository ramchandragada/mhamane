import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Solapur for house construction, commercial projects, renovation, redevelopment, and factory erection.`,
};

export default function ContactPage() {
  return (
    <div className="bg-stone-warm pt-28">
      <section className="section-pad !pt-10">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Tell us about the build.
            </h1>
            <p className="prose-site mt-6 max-w-md">
              Based in Solapur and working across Maharashtra, Karnataka, and
              Telangana. Reach out for site visits, estimates, and project
              discussions.
            </p>

            <div className="mt-10 space-y-6 border-t border-ink/15 pt-8">
              <div>
                <p className="eyebrow mb-2">Visit / Post</p>
                <p className="text-lg text-ink-soft">{site.address}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Call</p>
                <a
                  href={`tel:${site.phone}`}
                  className="text-lg text-ink-soft link-underline"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg text-ink-soft link-underline"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-stone px-6 py-8 sm:px-8 sm:py-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
