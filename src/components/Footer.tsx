import { Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl tracking-tight text-on-surface uppercase mb-4">
              NG <span className="text-primary italic">Designs</span>
            </h2>
            <p className="text-[10px] font-semibold uppercase tracking-ultra-luxury text-on-surface/30">
              Established MMXXIV • NG Designs
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-12">
            {["Portfolio", "Services", "Philosophy", "Concierge"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] font-semibold uppercase tracking-widest-luxury text-on-surface/40 hover:text-primary transition-colors duration-500"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex gap-10">
            <button className="text-on-surface/20 hover:text-primary transition-colors">
              <Share2 size={18} strokeWidth={1} />
            </button>
            <button className="text-on-surface/20 hover:text-primary transition-colors">
              <Globe size={18} strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex justify-center">
          <p className="text-[9px] uppercase tracking-ultra-luxury text-white/10">
            Tokyo • Kyoto • Osaka • New York
          </p>
        </div>
      </div>
    </footer>
  );
}
