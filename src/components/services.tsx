import { motion } from "framer-motion";
import { usePhase } from "./phase-context";

const SERVICES = [
  { tag: "01 / STRATEGY", title: "Strategy", body: "Defining the signal before the amplification." },
  { tag: "02 / INTERFACE", title: "Interface", body: "Tactile digital surfaces that feel expensive to touch." },
  { tag: "03 / ENGINEERING", title: "Engineering", body: "Performance-first code that stays cold under pressure." },
  { tag: "04 / MOTION", title: "Motion", body: "Choreographed micro-interactions with intent." },
];

export function Services() {
  const { phase } = usePhase();

  return (
    <section id="services" className="border-y border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-mono text-[11px] tracking-[0.3em] uppercase">Services</h2>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            DRAG / TOSS
          </span>
        </div>

        <div className="relative h-[520px]">
          {SERVICES.map((s, i) => {
            const rot = [-3, 2, -1.5, 3][i];
            const top = i * 90;
            const isAccent = i === SERVICES.length - 1;
            return (
              <motion.div
                key={s.tag}
                drag
                dragElastic={0.4}
                dragMomentum
                whileDrag={{ scale: 1.04, zIndex: 50, cursor: "grabbing" }}
                whileHover={{ y: -4 }}
                dragConstraints={{ top: -60, bottom: 60, left: -40, right: 40 }}
                initial={{ opacity: 0, y: 30, rotate: rot }}
                animate={{ opacity: 1, y: 0, rotate: rot }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 22 }}
                style={{ top, zIndex: i + 1 }}
                className="absolute left-0 right-0 cursor-grab touch-none rounded-2xl border border-border p-6 shadow-2xl"
              >
                <div
                  className="rounded-2xl"
                  style={{
                    background: isAccent ? "var(--color-phase)" : "var(--color-card)",
                    color: isAccent ? "var(--color-accent-foreground)" : undefined,
                  }}
                >
                  <div className="p-2">
                    <p
                      className="font-mono mb-2 text-[10px] tracking-widest uppercase opacity-60"
                      style={isAccent ? { color: "inherit" } : { color: "var(--color-phase)" }}
                    >
                      {s.tag}
                    </p>
                    <h3 className="mb-1 text-2xl font-bold tracking-tight">{s.title}</h3>
                    <p className="text-sm opacity-70">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="font-mono mt-8 text-center text-[10px] tracking-widest text-muted-foreground uppercase">
          phase: {phase}
        </p>
      </div>
    </section>
  );
}
