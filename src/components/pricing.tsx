const TIERS = [
  {
    tag: "The Single",
    title: "Landing Page",
    price: "£350",
    body: "One page. Surgical execution.",
    popular: false,
  },
  {
    tag: "The Album",
    title: "Full Experience",
    price: "£450",
    body: "Multi-route site with CMS and motion system.",
    popular: true,
  },
  {
    tag: "The Tour",
    title: "Design Retainer",
    price: "£3K",
    body: "Ongoing partnership. New work every sprint.",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-mono mb-12 text-[11px] tracking-[0.3em] uppercase">Engagement</h2>

        <div className="space-y-4">
          {TIERS.map((t) => (
            <div
              key={t.tag}
              className="relative flex flex-col gap-8 rounded-3xl border p-8"
              style={{
                borderColor: t.popular ? "var(--color-phase)" : "var(--color-border)",
                background: t.popular ? "var(--color-phase-soft)" : "var(--color-surface)",
              }}
            >
              {t.popular && (
                <span
                  className="font-mono absolute top-4 right-4 rounded-full px-2 py-1 text-[9px] font-bold tracking-widest uppercase"
                  style={{
                    background: "var(--color-phase)",
                    color: "var(--color-accent-foreground)",
                  }}
                >
                  Most Popular
                </span>
              )}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="font-mono mb-2 text-[10px] tracking-widest uppercase"
                    style={{ color: "var(--color-phase)" }}
                  >
                    {t.tag}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </div>
                <span className="text-2xl font-black">{t.price}</span>
              </div>
              <button
                className="w-full rounded-full py-3 text-sm font-bold transition-transform active:scale-[0.98]"
                style={{
                  background: t.popular ? "var(--color-phase)" : "var(--color-foreground)",
                  color: t.popular
                    ? "var(--color-accent-foreground)"
                    : "var(--color-background)",
                }}
              >
                Select Mode
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
