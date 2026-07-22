import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/sanity/lib/queries";

export function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="scroll-mt-20 bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Portfolio</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl md:text-6xl">
            Recent work
          </h2>
        </div>

        {projects.length === 0 ? (
          <p className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-line bg-surface p-8 text-center text-sm text-muted">
            No projects yet. Add them in the Studio under{" "}
            <span className="text-ink">Projects</span> — real work only, no
            stock photos.
          </p>
        ) : (
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const src = urlFor(project.image)
                .width(900)
                .height(700)
                .fit("crop")
                .auto("format")
                .url();

              const card = (
                <>
                  <div className="relative aspect-[9/7] w-full overflow-hidden bg-surface-3">
                    <Image
                      src={src}
                      alt={project.image?.alt || project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    {project.category ? (
                      <p className="text-sm text-accent-text">
                        {project.category}
                      </p>
                    ) : null}
                    <h3 className="display mt-1 text-xl">{project.title}</h3>
                    {project.description ? (
                      <p className="mt-2 text-sm text-ink-2">
                        {project.description}
                      </p>
                    ) : null}
                  </div>
                </>
              );

              return (
                <li
                  key={project._id}
                  className="group overflow-hidden rounded-2xl bg-surface"
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
