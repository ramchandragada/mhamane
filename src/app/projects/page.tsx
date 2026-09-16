import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected residential, commercial, renovation, and industrial projects by Vishwa Construction.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-stone-warm pt-28">
      <section className="section-pad !pt-10">
        <div className="container-site">
          <p className="eyebrow">Projects</p>
          <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Architecture &amp; interiors from the Vishwa portfolio.
          </h1>
          <p className="prose-site mt-6 max-w-2xl">
            Real project visuals from your library. Share more completed site
            photos anytime and we&apos;ll expand this gallery.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="relative aspect-[5/4] overflow-hidden bg-stone-deep">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-copper">
                    {project.category} · {project.region}
                  </p>
                  <h2 className="display mt-2 text-2xl sm:text-3xl">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
