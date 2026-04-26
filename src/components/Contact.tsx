import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzkhPR3QS-nV9EsAywO3d7AYdQ_eYKEviAZ0pGdktS1UNgELmzkPGdt7emRZ8z-l5KWaQ/exec";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(form),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Info Side */}
          <div>
            <h2 className="font-serif text-[60px] lg:text-[90px] leading-[0.9] mb-12 tracking-tight uppercase">
              Get in <br />
              <span className="text-primary italic gold-shadow">Touch</span>
            </h2>
            <p className="text-on-surface-variant text-xl italic font-serif mb-16 leading-relaxed max-w-lg">
              Ready to elevate your digital presence? Let's discuss your next landmark project.
            </p>

            <div className="space-y-16">
              {[
                { label: "Email Us", value: "nihaargala12@gmail.com", icon: Mail },
                { label: "Call Us", value: "571-426-7144", icon: Phone },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-10 group">
                  <div className="w-16 h-16 flex items-center justify-center border border-white/10 text-primary/60 group-hover:border-primary group-hover:text-primary transition-all duration-700">
                    <item.icon size={28} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-widest-luxury text-primary mb-3">
                      {item.label}
                    </p>
                    <p className="text-3xl md:text-4xl text-on-surface font-serif italic opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/[0.03] p-12 lg:p-20 border border-white/10 relative">
            <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-4 group">
                <label className="block text-[9px] font-semibold uppercase tracking-widest-luxury text-primary group-focus-within:text-white transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-primary transition-colors text-2xl font-serif italic placeholder:text-white/10"
                />
              </div>
              <div className="space-y-4 group">
                <label className="block text-[9px] font-semibold uppercase tracking-widest-luxury text-primary group-focus-within:text-white transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-primary transition-colors text-2xl font-serif italic placeholder:text-white/10"
                />
              </div>
              <div className="space-y-4 group">
                <label className="block text-[9px] font-semibold uppercase tracking-widest-luxury text-primary group-focus-within:text-white transition-colors">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-primary transition-colors text-2xl font-serif italic resize-none placeholder:text-white/10"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full border border-primary text-primary py-8 text-[11px] uppercase tracking-widest-luxury hover:bg-primary hover:text-on-primary transition-all duration-500 gold-shadow disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Request Sent" : "Send Request"}
              </button>
              {status === "sent" && (
                <p className="text-center text-[10px] uppercase tracking-widest-luxury text-primary">
                  We'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-[10px] uppercase tracking-widest-luxury text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
