import { usePhase } from "./phase-context";

export function Nav() {
  const { phase } = usePhase();
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <span className="font-mono text-xs font-medium tracking-tight">WEBIFY / 101</span>
        <div className="flex items-center gap-2">
          <div
            className="size-2 animate-pulse rounded-full"
            style={{ background: "var(--color-phase)" }}
          />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            {phase}
          </span>
        </div>
      </div>
    </nav>
  );
}
