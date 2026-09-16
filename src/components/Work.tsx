import Image from "next/image";
import { projects } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section-pad bg-stone">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
                Projects that show how we build.
              </h2>
            </div>
            <p className="max-w-md prose-site">
              A glimpse of residential, commercial, industrial, and renovation
              work shaped with structural clarity and careful finishing.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 80}>
              <article className="group relative overflow-hidden">
                <div className="relative aspect-[5/4] overflow-hidden bg-ink/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-copper-bright">
                    {project.category} · {project.region}
                  </p>
                  <h3 className="display mt-2 text-2xl text-stone-warm sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
