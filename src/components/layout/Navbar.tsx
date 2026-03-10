import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 flex border border-custom-border bg-[#080806]/85 backdrop-blur-md z-[100] transition-opacity duration-400 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <button
        className="font-mono text-[0.6rem] tracking-[0.18em] text-custom-dim bg-transparent border-none py-2 px-[1.2rem] cursor-crosshair transition-colors duration-200 hover:text-custom-fg hover:bg-custom-accent/5 focus:outline-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        HOME
      </button>
      <button
        className="font-mono text-[0.6rem] tracking-[0.18em] text-custom-dim bg-transparent border-none py-2 px-[1.2rem] cursor-crosshair transition-colors duration-200 hover:text-custom-fg hover:bg-custom-accent/5 border-l border-custom-border focus:outline-none"
        onClick={() =>
          document.getElementById("builds")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        BUILDS
      </button>

      <Dialog>
        <DialogTrigger asChild>
          <button className="font-mono text-[0.6rem] tracking-[0.18em] text-custom-dim bg-transparent border-none py-2 px-[1.2rem] cursor-crosshair transition-colors duration-200 hover:text-custom-fg hover:bg-custom-accent/5 border-l border-custom-border focus:outline-none">
            ABOUT
          </button>
        </DialogTrigger>
        <DialogContent className="border-custom-border bg-[#080806] text-custom-fg max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="font-display tracking-[0.2em] text-[1.2rem]">ABOUT</DialogTitle>
            <DialogDescription className="text-custom-dim font-mono text-[0.7rem] leading-relaxed tracking-wider">
              sagar tamang's playground is feynmanpi.com. here, in this website, all the builds of sagar will be here.{" "}
              <a
                href="https://sagartamang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-accent hover:underline"
              >
                https://sagartamang.com/
              </a>{" "}
              is here.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <a
        href="https://cal.com/sagar-tamang"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[0.6rem] tracking-[0.18em] text-custom-dim bg-transparent border-none py-2 px-[1.2rem] cursor-crosshair transition-colors duration-200 hover:text-custom-fg hover:bg-custom-accent/5 border-l border-custom-border focus:outline-none no-underline flex items-center"
      >
        CONTACT
      </a>
    </nav>
  );
}
