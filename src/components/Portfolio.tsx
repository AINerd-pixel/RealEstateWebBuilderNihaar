import { motion } from "motion/react";

export default function Portfolio() {
  const projects = [
    {
      title: "The Skyline Suites",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      size: "large",
    },
    {
      title: "Axis Towers",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      size: "small",
    },
    {
      title: "Elite Estates",
      category: "Brokerage",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      size: "small",
    },
    {
      title: "Orion Park",
      category: "Developments",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800",
      size: "small",
    },
    {
      title: "Vue Penthouses",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      size: "medium",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-widest-luxury mb-4">
            Showcase
          </p>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-center uppercase">
            Signature <span className="italic text-primary/80">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-white/10 border border-white/10 p-1">
          {/* Main Large Item */}
          <div className="md:col-span-8 relative group overflow-hidden">
            <ProjectItem project={projects[0]} />
          </div>

          {/* Right Column Stack */}
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <div className="flex-1 relative group overflow-hidden">
              <ProjectItem project={projects[1]} />
            </div>
            <div className="flex-1 relative group overflow-hidden">
              <ProjectItem project={projects[2]} />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-4 relative group overflow-hidden">
            <ProjectItem project={projects[3]} />
          </div>
          <div className="md:col-span-8 relative group overflow-hidden">
            <ProjectItem project={projects[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project }: { project: any }) {
  return (
    <>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
      <div className="absolute inset-0 p-12 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/40 text-primary text-[9px] font-semibold uppercase tracking-widest-luxury bg-black/60 backdrop-blur-sm">
            {project.category}
          </span>
          <h3 className="font-serif text-3xl lg:text-5xl text-white tracking-tight group-hover:italic transition-all duration-700">
            {project.title}
          </h3>
        </motion.div>
      </div>
    </>
  );
}
