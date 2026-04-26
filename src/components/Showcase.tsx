import { motion } from "motion/react";

export default function Showcase() {
  return (
    <section className="w-full bg-white">
      {/* Fade transition from dark Hero into white section */}
      <div className="h-32 bg-gradient-to-b from-[#050505] to-white" />

      <div className="relative pb-16">
        {/* Image */}
        <img
          src="/showcase.jpg"
          alt="NG Designs — Responsive Website Showcase"
          className="w-2/3 h-auto object-contain"
        />

        {/* Overlay description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 right-6 left-6 md:top-10 md:right-10 md:left-auto max-w-md text-right"
        >
          <p className="text-[9px] font-semibold uppercase tracking-widest-luxury text-[#C5A059] mb-3">
            Featured Work
          </p>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1] tracking-tight uppercase text-black mb-4">
            Crafted for <br />
            <span className="italic text-[#C5A059]">Every Screen</span>
          </h2>
          <p className="text-black/70 text-sm md:text-base font-serif italic leading-relaxed">
            Pixel-perfect experiences built to perform across every device — from expansive desktops to the intimacy of mobile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
