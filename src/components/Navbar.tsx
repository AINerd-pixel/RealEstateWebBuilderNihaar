import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-widest-luxury text-primary font-semibold mb-0.5">
            Signature
          </span>
          <span className="font-serif text-2xl tracking-tight text-on-surface">
            NG DESIGNS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {["Portfolio", "Services", "Philosophy"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-[11px] uppercase tracking-widest-luxury text-on-surface/80 hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}
          className="border border-primary text-primary px-8 py-3 text-[11px] uppercase tracking-widest-luxury transition-all duration-300"
        >
          Concierge
        </motion.button>
      </div>
    </nav>
  );
}
