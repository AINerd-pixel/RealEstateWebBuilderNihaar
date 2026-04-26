import { useEffect, useRef } from "react";

const projects = [
  {
    title: "The Skyline Suites",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Axis Towers",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Elite Estates",
    category: "Brokerage",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Orion Park",
    category: "Developments",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Vue Penthouses",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
  },
];

const BASE_SPEED = 1.5; // px per frame

export default function Portfolio() {
  const stripRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const speedRef = useRef(BASE_SPEED);
  const targetSpeedRef = useRef(BASE_SPEED);
  const rafRef = useRef<number>();

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const tick = () => {
      // Lerp current speed toward target for smooth deceleration/acceleration
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.08;
      posRef.current += speedRef.current;

      const halfWidth = el.scrollWidth / 2;
      if (posRef.current >= halfWidth) posRef.current -= halfWidth;

      el.style.transform = `translateX(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-widest-luxury mb-4">
            Showcase
          </p>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-center uppercase">
            Signature <span className="italic text-primary/80">Works</span>
          </h2>
        </div>
      </div>

      <div className="overflow-hidden">
        <div ref={stripRef} className="flex gap-4" style={{ width: "max-content" }}>
          {[...projects, ...projects].map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => { targetSpeedRef.current = 0; }}
              onMouseLeave={() => { targetSpeedRef.current = BASE_SPEED; }}
              className="relative flex-none w-[75vw] md:w-[45vw] lg:w-[35vw] h-[60vh] group overflow-hidden border border-white/10 rounded-2xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="inline-block self-start px-4 py-1.5 border border-primary/40 text-primary text-[9px] font-semibold uppercase tracking-widest-luxury bg-black/60 backdrop-blur-sm mb-4">
                  {project.category}
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl text-white tracking-tight group-hover:italic transition-all duration-700">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
