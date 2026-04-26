import { motion } from "motion/react";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Particles />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Modern Architecture"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Animated glow behind heading */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary rounded-full blur-[100px] -z-10"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary rounded-full blur-[140px] -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-[80px] md:text-[120px] leading-[0.9] mb-12 tracking-tight">
            Digital <br />
            <span className="italic text-primary opacity-90 gold-shadow">Architects</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl md:text-2xl leading-relaxed text-on-surface-variant font-serif mb-16 italic">
            Bespoke digital experiences tailored for those who appreciate the art of stillness and luxury.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <button className="w-full sm:w-auto border border-primary text-primary px-12 py-5 text-[11px] uppercase tracking-widest-luxury hover:bg-primary hover:text-on-primary transition-all duration-500">
            Request Consultation
          </button>
          <button className="w-full sm:w-auto text-on-surface/60 px-12 py-5 text-[11px] uppercase tracking-widest-luxury hover:text-on-surface transition-all">
            The Gallery
          </button>
        </motion.div>
      </div>
      
      {/* Decorative lines or patterns can go here */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-20 bg-primary/50" />
      </div>
    </section>
  );
}
