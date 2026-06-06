import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Phase = "retro" | "corp" | "premium";

export const PHASES: { id: Phase; label: string; range: [number, number] }[] = [
  { id: "retro", label: "90s", range: [0, 120] },
  { id: "corp", label: "Corp", range: [120, 240] },
  { id: "premium", label: "Premium", range: [240, 360] },
];

export function angleToPhase(angle: number): Phase {
  const a = ((angle % 360) + 360) % 360;
  if (a < 120) return "retro";
  if (a < 240) return "corp";
  return "premium";
}

interface PhaseCtx {
  angle: number;
  setAngle: (a: number) => void;
  phase: Phase;
}

const Ctx = createContext<PhaseCtx | null>(null);

export function PhaseProvider({ children }: { children: ReactNode }) {
  // Default to premium: 300deg
  const [angle, setAngle] = useState(300);
  const phase = useMemo(() => angleToPhase(angle), [angle]);
  return (
    <Ctx.Provider value={{ angle, setAngle, phase }}>
      <div data-phase={phase} className="contents">
        {children}
      </div>
    </Ctx.Provider>
  );
}

export function usePhase() {
  const v = useContext(Ctx);
  if (!v) throw new Error("usePhase must be used inside PhaseProvider");
  return v;
}
