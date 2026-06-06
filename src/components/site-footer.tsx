export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono mb-6 text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-phase)" }}>
          /// END OF TRANSMISSION
        </p>
        <h2 className="text-4xl font-black tracking-tight uppercase italic md:text-5xl">
          Let's turn <br /> the dial together.
        </h2>
        <a
          href="mailto:hello@webify101.com"
          className="mt-8 inline-block text-lg font-medium underline decoration-2 underline-offset-8"
          style={{ textDecorationColor: "var(--color-phase)" }}
        >
          hello@webify101.com
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <div className="flex gap-3">
          {["IG", "TW", "LI", "DR"].map((s) => (
            <a
              key={s}
              href="#"
              className="grid size-10 place-items-center rounded-full border border-border text-[10px] font-bold transition-colors hover:bg-foreground hover:text-background"
            >
              {s}
            </a>
          ))}
        </div>
        <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
          © 2026 WEBIFY101 — BUILT TO LAST
        </p>
      </div>
    </footer>
  );
}
