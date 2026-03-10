import type { Project } from "../../types";
import { statusColor } from "../../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative group grid grid-cols-[3rem_1fr_auto] gap-x-8 items-start py-8 cursor-crosshair border-t border-custom-border last:border-b max-sm:grid-cols-[2.2rem_1fr] max-sm:grid-rows-[auto_auto]">
      {/* Background extended highlight on hover */}
      <div className="absolute -left-[5vw] -right-[5vw] top-0 bottom-0 bg-custom-accent opacity-0 transition-opacity duration-200 z-0 group-hover:opacity-[0.04]" />

      {/* Number (Relative ensures it sits above the absolute hover background) */}
      <div className="relative z-10 font-pixelify text-[clamp(1.4rem,2.5vw,1.8rem)] text-custom-dim leading-none pt-[0.2rem]">
        {project.id}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="font-pixelify text-[clamp(2rem,4.5vw,3.2rem)] leading-none tracking-[0.02em] text-custom-fg transition-colors duration-200 group-hover:text-custom-accent">
          {project.title}
        </div>
        <span className="text-[0.6rem] tracking-[0.18em] text-custom-dim mt-[0.45rem] block">
          {project.tag}
        </span>
        <p className="text-[clamp(0.72rem,1.3vw,0.82rem)] text-custom-dim leading-[1.7] mt-[0.8rem] max-w-[52ch]">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-[0.4rem] mt-[0.8rem]">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[0.6rem] tracking-[0.12em] border border-custom-border py-[0.2rem] px-[0.55rem] text-custom-dim transition-all duration-200 group-hover:border-[rgba(180,255,111,0.3)] group-hover:text-custom-fg"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Meta */}
      <div className="relative z-10 text-right flex flex-col items-end gap-[0.6rem] pt-[0.2rem] max-sm:col-start-2 max-sm:row-start-2 max-sm:flex-row max-sm:items-center max-sm:justify-start max-sm:pt-[0.6rem]">
        <span className="text-[0.68rem] tracking-[0.1em] text-custom-dim">
          {project.year}
        </span>
        <span
          className="text-[0.58rem] tracking-[0.18em] py-[0.2rem] px-[0.5rem] border"
          style={{
            color: statusColor[project.status],
            borderColor: statusColor[project.status] + "55",
          }}
        >
          {project.status}
        </span>
      </div>
    </div>
  );
}
