import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="builds"
      className="py-[clamp(4rem,8vw,7rem)] px-[clamp(1.5rem,6vw,5rem)] max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-[1.2rem] mb-[3rem]">
        <span className="text-[0.62rem] tracking-[0.25em] text-custom-dim whitespace-nowrap">
          // SELECTED PROJECTS
        </span>
        <div className="flex-1 h-[1px] bg-custom-border" />
      </div>

      {/* Count row */}
      <div className="flex justify-between items-baseline mb-[3rem]">
        <p className="text-[0.65rem] tracking-[0.15em] text-custom-dim">
          {PROJECTS.length} BUILDS SHIPPED
        </p>
        <p className="text-[0.65rem] tracking-[0.15em] text-custom-dim">
          2023 – 2025
        </p>
      </div>

      {/* Project rows */}
      <div className="flex flex-col">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
