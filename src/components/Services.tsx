import { Compass, Home, BarChart2, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Design",
      desc: "Bespoke digital architecture tailored to your brand identity.",
      icon: Compass,
    },
    {
      title: "Property Listings",
      desc: "High-performance engines for high-value assets.",
      icon: Home,
    },
    {
      title: "SEO Optimization",
      desc: "Ensuring your listings appear where it matters most.",
      icon: BarChart2,
    },
    {
      title: "Mobile-First",
      desc: "Seamless luxury experiences across all touchpoints.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl border-b border-white/10 pb-8 w-full">
            <p className="text-primary text-[10px] font-semibold uppercase tracking-widest-luxury mb-4">
              Expertise
            </p>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight">
              Curated Services
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg font-serif italic max-w-sm leading-relaxed pb-8">
            Architecting digital landscapes that define the future of luxury real estate marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-10 bg-background hover:bg-white/[0.03] transition-all duration-700 flex flex-col justify-between h-[360px]"
            >
              <service.icon className="text-primary/60 w-8 h-8 transition-all group-hover:text-primary group-hover:scale-110 duration-500" strokeWidth={1} />
              <div>
                <h3 className="font-serif text-2xl mb-4 text-on-surface tracking-tight group-hover:italic transition-all">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
