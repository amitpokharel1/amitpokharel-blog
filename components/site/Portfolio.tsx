import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SectionHead } from "./SectionHead";
import type { Project } from "@/sanity/lib/queries";

export function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="scroll-mt-4 border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionHead label="Selected work" title="Things I've made" />

        {projects.length === 0 ? (
          <p className="label mt-12 border-2 border-dashed border-rule bg-paper-2 p-8 text-center text-muted">
            No projects yet — add them under Projects in the Studio
          </p>
        ) : (
          <ul className="mt-14">
            {projects.map((project, i) => {
              const src = urlFor(project.image)
                .width(1200)
                .height(820)
                .fit("crop")
                .auto("format")
                .url();

              // Alternate which side the image sits on
              const flip = i % 2 === 1;

              const inner = (
                <div className="grid items-center gap-6 md:grid-cols-12 md:gap-10">
                  <div
                    className={`relative aspect-3/2 w-full overflow-hidden md:col-span-7 ${
                      flip ? "md:order-2 md:col-start-6" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt={project.image?.alt || project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 58vw"
                    />
                  </div>

                  <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                    {project.category ? (
                      <p className="label text-signal-deep">
                        {project.category}
                      </p>
                    ) : null}
                    <h3 className="display mt-3 text-[clamp(1.9rem,4vw,3rem)]">
                      {project.title}
                    </h3>
                    {project.description ? (
                      <p className="mt-4 text-lg text-ink-2">
                        {project.description}
                      </p>
                    ) : null}
                    {project.url ? (
                      <p className="label mt-6 inline-block border-b-2 border-signal pb-1">
                        View project →
                      </p>
                    ) : null}
                  </div>
                </div>
              );

              return (
                <li
                  key={project._id}
                  className="group border-t border-rule py-10 first:border-t-0 first:pt-0 md:py-14"
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
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
