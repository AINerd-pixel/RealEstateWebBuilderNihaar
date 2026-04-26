export default function Stats() {
  const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years Experience", value: "12+" },
  ];

  return (
    <section className="py-32 bg-background border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center group`}
            >
              <div className="w-12 h-[1px] bg-primary/30 mb-8 group-hover:w-24 transition-all duration-700" />
              <div className="font-serif text-6xl md:text-7xl text-on-surface mb-4">
                {stat.value}
              </div>
              <p className="text-[10px] uppercase tracking-widest-luxury text-primary font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
