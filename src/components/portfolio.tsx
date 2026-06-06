import morphosys from "@/assets/work-morphosys.jpg";
import iface from "@/assets/work-interface.jpg";
import archive from "@/assets/work-archive.jpg";

const WORKS = [
  { img: morphosys, tag: "MORPHOSYS", year: "2024", title: "Brutalist Real Estate", offset: 0 },
  { img: iface, tag: "TE—INTERFACE", year: "2023", title: "Hardware Microsite", offset: 24 },
  { img: archive, tag: "VINYL/CLUB", year: "2024", title: "Editorial Music Label", offset: -16 },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl font-black tracking-tight uppercase italic">The Archive</h2>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--color-phase)" }}>
            2022—2024
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {WORKS.map((w) => (
            <div
              key={w.tag}
              className="group relative"
              style={{ transform: `translateX(${w.offset}px)` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-border">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--color-phase)" }}>
                    {w.tag}
                  </span>
                  <h3 className="text-lg font-medium">{w.title}</h3>
                </div>
                <span className="text-xs font-medium text-muted-foreground">{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
