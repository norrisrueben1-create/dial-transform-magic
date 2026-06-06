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
        <div className="mt-8 flex flex-col items-center gap-3 text-sm font-medium">
          <a
            href="https://www.instagram.com/webify101?igsh=MWh1ZGFxemwzdjhn&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-8 transition-colors hover:opacity-70"
            style={{ textDecorationColor: "var(--color-phase)" }}
          >
            @webify101
          </a>
          <a
            href="mailto:rueben.1@icloud.com"
            className="underline decoration-2 underline-offset-8 transition-colors hover:opacity-70"
            style={{ textDecorationColor: "var(--color-phase)" }}
          >
            rueben.1@icloud.com
          </a>
          <a
            href="tel:07928530040"
            className="underline decoration-2 underline-offset-8 transition-colors hover:opacity-70"
            style={{ textDecorationColor: "var(--color-phase)" }}
          >
            07928 530040
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/webify101?igsh=MWh1ZGFxemwzdjhn&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-10 place-items-center rounded-full border border-border text-[10px] font-bold transition-colors hover:bg-foreground hover:text-background"
          >
            IG
          </a>
        </div>
        <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
          © 2026 WEBIFY101 — BUILT TO LAST
        </p>
      </div>
    </footer>
  );
}
