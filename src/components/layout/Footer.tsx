export function Footer() {
  return (
    <footer className="border-t border-custom-border py-[clamp(2rem,5vw,3rem)] px-[clamp(1.5rem,6vw,5rem)] flex justify-between items-center flex-wrap gap-4 max-w-[1200px] mx-auto">
      <span className="font-display text-[1.2rem] tracking-[0.2em]">
        FEYNMAN PI
      </span>
      <span className="text-[0.6rem] tracking-[0.14em] text-custom-dim">
        BUILT IN PUBLIC · {new Date().getFullYear()}
      </span>
      <div className="flex gap-[1.8rem]">
        {[
          { name: "GITHUB", url: "https://github.com/SAGAR-TAMANG" },
          { name: "X", url: "https://x.com/sagar_builds" },
          { name: "INSTAGRAM", url: "https://www.instagram.com/sagar_builds/" },
          { name: "YOUTUBE", url: "https://www.youtube.com/@sagar_builds" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[0.6rem] tracking-[0.18em] text-custom-dim no-underline transition-colors duration-200 hover:text-custom-accent"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
