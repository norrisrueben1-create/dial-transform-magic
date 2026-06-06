import { motion } from "framer-motion";
import { usePhase } from "./phase-context";
import { WebifyDial } from "./webify-dial";

const COPY = {
  retro: {
    eyebrow: "BUCKLE UP",
    title: ["WE MAKE", "RAD WEBSITES"],
    body: "Welcome to the information superhighway. Tap below and surf into 1998 with us.",
    cta: "Click Here!!!",
  },
  corp: {
    eyebrow: "ENTERPRISE GRADE",
    title: ["Leveraging synergy", "for digital outcomes."],
    body: "Best-in-class web solutions to drive value across every vertical of your stack.",
    cta: "Schedule a Meeting",
  },
  premium: {
    eyebrow: "WEBIFY / 101",
    title: ["We breathe", "new life into web."],
    body: "Turning noise into precision. High-fidelity experiences for the hardware-obsessed.",
    cta: "Start a project",
  },
} as const;

export function Hero() {
  const { phase } = usePhase();
  const c = COPY[phase];

  return (
    <section className="relative px-6 pt-20 pb-32">
      <div className="mx-auto max-w-2xl">
        <WebifyDial />

        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mt-24 text-center"
        >
          <p className="font-mono mb-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            {c.eyebrow}
          </p>
          <h1 className="text-balance text-5xl leading-[0.95] font-extrabold tracking-tight md:text-6xl">
            {c.title[0]} <br />
            <span style={{ color: "var(--color-phase)" }} className="italic">
              {c.title[1]}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[34ch] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {c.body}
          </p>
          <button
            className="mt-8 rounded-full px-6 py-3 text-sm font-bold transition-transform active:scale-95"
            style={{
              background: "var(--color-phase)",
              color: "var(--color-accent-foreground)",
            }}
          >
            {c.cta} →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
