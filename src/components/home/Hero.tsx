import heroImage from "../../assets/dithering-effect-hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between py-[clamp(1.5rem,4vw,3rem)] px-[clamp(1.5rem,6vw,5rem)] overflow-hidden font-pixelify">
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 55% 50%, transparent 30%, rgba(8,8,6,0.7) 100%)",
        }}
      />

      {/* Hero image – centered, dithered */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src={heroImage}
          alt=""
          className="dither-img opacity-88 w-[clamp(320px,72vw,900px)] h-auto"
          style={{
            maskImage:
              "radial-gradient(ellipse 55% 52% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 52% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      {/* Top bar */}
      <header className="fade-up relative z-20 flex justify-between items-start">
        <div className="text-[clamp(1.2rem,2.8vw,1.6rem)] tracking-[0.2em]">
          FEYNMAN PI
        </div>
        <div className="text-[clamp(0.62rem,1.4vw,0.78rem)] text-right leading-[1.6] text-custom-dim tracking-[0.06em] lowercase">
          on a mission to become
          <br />
          1000× engineer
        </div>
      </header>

      {/* Bottom left: title + scroll cue */}
      <footer className="relative z-20 flex flex-col gap-[1.8rem]">
        <h1 className="fade-up delay-2 text-[clamp(3.5rem,12vw,9rem)] leading-[0.88] tracking-[0.01em] uppercase">
          PERSONAL
          <br />
          BUILDS
        </h1>

        {/* scroll nudge */}
        <button
          className="fade-up delay-3 scroll-cue bg-transparent border-none cursor-crosshair flex items-center gap-[0.75rem] text-custom-dim font-mono text-[0.6rem] tracking-[0.2em] self-start focus:outline-none"
          onClick={() =>
            document.getElementById("builds")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>SCROLL TO EXPLORE</span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path
              d="M5 0v12M1 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </button>
      </footer>

      {/* corner coordinates */}
      <div className="absolute bottom-[clamp(1.5rem,4vw,3rem)] right-[clamp(1.5rem,6vw,5rem)] text-[0.58rem] tracking-[0.14em] text-custom-dim z-20 font-mono">
        37.7749° N / 122.4194° W
      </div>
    </section>
  );
}
