import { SIDE_PROJECTS, SOCIAL_LINKS } from "../../data/projects";
import type { SideProject } from "../../types";

function Pill({ project }: { project: SideProject }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-custom-ink px-2.5 py-1 align-middle text-[0.9em] leading-none text-custom-bg no-underline transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span
        className="size-3 rounded-full"
        style={{ background: "linear-gradient(135deg, #f2f1ec 48%, #555 52%)" }}
      />
      {project.name}
    </a>
  );
}

export function Hero() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-[1240px] items-center px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2rem,6vw,4rem)]">
      <div className="relative grid w-full grid-cols-1 items-center gap-[clamp(2rem,6vw,4rem)] md:grid-cols-[1.05fr_0.95fr]">
        {/* white halo circle — centered between the two columns, behind everything */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[clamp(280px,36vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

        {/* ── Left column ─────────────────────────────── */}
        <div className="relative z-10 order-2 md:order-1">
          <h1 className="fade-up text-[clamp(3rem,7vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.01em]">
            i build stuff.
          </h1>

          <p className="fade-up delay-1 mt-8 max-w-[26rem] text-[clamp(1.05rem,1.4vw,1.3rem)] leading-relaxed">
            feynmanpi.com is the official playground of{" "}
            <strong className="font-semibold">sagar_builds</strong>.
          </p>

          <p className="fade-up delay-2 mt-6 max-w-[28rem] text-[clamp(1.05rem,1.4vw,1.3rem)] leading-[2]">
            my side projects are hosted on feynmanpi. like:{" "}
            {SIDE_PROJECTS.map((p) => (
              <span key={p.name} className="mr-1.5 whitespace-nowrap">
                <Pill project={p} />
              </span>
            ))}
            and many more.
          </p>

          <a
            href="#projects"
            className="fade-up delay-3 group relative mt-10 inline-flex items-center gap-3 text-[clamp(1.05rem,1.4vw,1.3rem)] no-underline"
          >
            <span className="absolute -left-4 top-1/2 -z-10 size-14 -translate-y-1/2 rounded-full bg-custom-halo transition-transform duration-300 group-hover:scale-110" />
            <span>view all projects</span>
            <svg
              width="26"
              height="12"
              viewBox="0 0 26 12"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M0 6h24M19 1l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </a>

          <nav className="fade-up delay-4 mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(1rem,1.3vw,1.2rem)] text-custom-dim">
            {SOCIAL_LINKS.map((link, i) => (
              <span key={link.name} className="flex items-center gap-x-3">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-fg underline decoration-custom-border underline-offset-4 transition-colors hover:decoration-custom-fg"
                >
                  {link.name}
                </a>
                {i < SOCIAL_LINKS.length - 1 && (
                  <span className="text-custom-dim">/</span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* ── Right column ────────────────────────────── */}
        {/* NOTE: no z-index / animation on this wrapper — it must not create a
            stacking context, or the wordmark's mix-blend-difference gets
            isolated from the page background and renders flat white. */}
        <div className="relative order-1 flex h-[clamp(320px,44vw,560px)] items-center justify-center md:order-2">
          {/* statue — placeholder, swap with the real cut-out */}
          <img
            src="/david.webp"
            alt="Sculpted bust"
            className="fade-up delay-1 relative z-20 h-full w-auto object-contain brightness-[0.45] contrast-[1.8] drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          />

          {/* overlapping wordmark — in front of the statue, pass-through blend */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[130%] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium leading-none tracking-[-0.01em] text-white mix-blend-difference">
            hello world.
          </span>
        </div>
      </div>
    </main>
  );
}
