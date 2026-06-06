import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePhase, PHASES } from "./phase-context";

/**
 * The Webify Dial — a draggable rotational knob.
 * Drag anywhere on the knob; the angle follows the pointer around its center.
 */
export function WebifyDial() {
  const { angle, setAngle, phase } = usePhase();
  const knobRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<{ pointerAngle: number; knobAngle: number } | null>(null);

  const getPointerAngle = useCallback((clientX: number, clientY: number) => {
    const el = knobRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    setDragging(true);
    startRef.current = {
      pointerAngle: getPointerAngle(e.clientX, e.clientY),
      knobAngle: angle,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !startRef.current) return;
    const current = getPointerAngle(e.clientX, e.clientY);
    const delta = current - startRef.current.pointerAngle;
    setAngle(startRef.current.knobAngle + delta);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    startRef.current = null;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Keyboard accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement !== knobRef.current) return;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") setAngle(angle + 15);
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") setAngle(angle - 15);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [angle, setAngle]);

  const normalized = ((angle % 360) + 360) % 360;
  const current = PHASES.find((p) => p.id === phase)!;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center select-none">
      {/* Outer rings */}
      <div className="absolute inset-0 rounded-full border border-border/60" />
      <div className="absolute inset-4 rounded-full border border-border/30" />

      {/* Tick marks every 30deg */}
      <div className="pointer-events-none absolute inset-2">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = i * 30;
          const active =
            (a >= current.range[0] && a < current.range[1]) ||
            (current.range[1] === 360 && a >= current.range[0]);
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 h-[2px] w-3 origin-left"
              style={{
                transform: `rotate(${a - 90}deg) translateX(calc(50% + 130px))`,
                background: active ? "var(--color-phase)" : "var(--color-border)",
                opacity: active ? 1 : 0.5,
              }}
            />
          );
        })}
      </div>

      {/* Knob */}
      <motion.div
        ref={knobRef}
        tabIndex={0}
        role="slider"
        aria-label="Webify dial"
        aria-valuemin={0}
        aria-valuemax={360}
        aria-valuenow={Math.round(normalized)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        animate={{ rotate: angle, scale: dragging ? 0.97 : 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 26, mass: 0.6 }}
        className="relative size-64 cursor-grab touch-none rounded-full border-4 border-neutral-800 bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-phase active:cursor-grabbing"
        style={{
          boxShadow: "var(--shadow-knob)",
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.06), transparent 55%), linear-gradient(160deg, #1f1f22, #0a0a0b)",
        }}
      >
        {/* Indicator dot */}
        <div
          className="absolute top-5 left-1/2 size-2.5 -translate-x-1/2 rounded-full"
          style={{
            background: "var(--color-phase)",
            boxShadow: "0 0 14px var(--color-phase), 0 0 4px var(--color-phase)",
          }}
        />
        {/* Etched grip */}
        <div className="knob-grip pointer-events-none absolute inset-0 rounded-full opacity-30" />
        {/* Inner cap (counter-rotates so label stays upright) */}
        <motion.div
          animate={{ rotate: -angle }}
          transition={{ type: "spring", stiffness: 240, damping: 26, mass: 0.6 }}
          className="absolute inset-8 flex flex-col items-center justify-center rounded-full border border-white/5 bg-neutral-950/80"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Phase
          </span>
          <span
            className="mt-1 text-3xl font-black tracking-tight uppercase italic"
            style={{ color: "var(--color-phase)" }}
          >
            {current.label}
          </span>
          <span className="mt-2 font-mono text-[9px] tracking-widest text-muted-foreground">
            {Math.round(normalized).toString().padStart(3, "0")}°
          </span>
        </motion.div>
      </motion.div>

      {/* Phase labels around base */}
      <div className="font-mono absolute -bottom-10 flex w-full justify-center gap-6 text-[10px] tracking-widest text-muted-foreground uppercase">
        {PHASES.map((p) => (
          <button
            key={p.id}
            onClick={() => setAngle((p.range[0] + p.range[1]) / 2)}
            className="transition-opacity hover:opacity-100"
            style={{
              color: p.id === phase ? "var(--color-phase)" : undefined,
              opacity: p.id === phase ? 1 : 0.4,
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
