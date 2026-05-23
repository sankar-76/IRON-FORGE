import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { CONTACT_INFO, PROGRAMS } from "@/data";
import { useScrollReveal } from "@/hooks/useGSAP";
import SectionLabel from "@/components/ui/SectionLabel";

const ICON_MAP = { MapPin, Phone, Mail, Clock };

const INIT = {
  firstName: "",
  lastName: "",
  email: "",
  interest: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [sent, setSent] = useState(false);

  const containerRef = useScrollReveal(
    ".reveal",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.7 },
    0.1,
  );

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm(INIT);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 relative">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left — info */}
          <div>
            <div className="reveal opacity-0">
              <SectionLabel text="Get In Touch" />
              <h2
                className="font-display text-white leading-none mb-6"
                style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
              >
                START YOUR <span className="text-[#FF5000]">JOURNEY</span>
              </h2>
              <p className="font-body text-gray-500 leading-relaxed mb-10 text-sm">
                Ready to make a change? Drop us a message and one of our coaches
                will reach out within 24 hours to set up your free consultation.
              </p>
            </div>

            <ul className="reveal opacity-0 space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = ICON_MAP[item.iconName] || MapPin;
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#FF5000]/10 border border-[#FF5000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={16}
                        className="text-[#FF5000]"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div>
                      <div className="font-cond text-[10px] font-bold tracking-[0.3em] uppercase text-gray-700 mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-body text-gray-300 text-sm">
                        {item.value}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Map placeholder */}
            <div className="reveal opacity-0 mt-10 rounded-xl bg-zinc-900 border border-zinc-800 h-40 flex items-center justify-center">
              <span className="font-cond text-xs tracking-widest uppercase text-gray-700">
                Map embed here
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal opacity-0 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center py-10">
                <CheckCircle
                  size={52}
                  className="text-[#FF5000] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-3xl text-white mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-gray-500 text-sm">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-cond font-bold text-xl tracking-wide text-white mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-cond text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 block mb-1.5">
                        First Name
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="firstName"
                        placeholder="Arjun"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-cond text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 block mb-1.5">
                        Last Name
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="lastName"
                        placeholder="Sharma"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-cond text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 block mb-1.5">
                      Email
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="arjun@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="font-cond text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 block mb-1.5">
                      I'm interested in
                    </label>
                    <select
                      className="form-input"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <option value="" style={{ background: "#111" }}>
                        Select a program…
                      </option>
                      {PROGRAMS.map((p) => (
                        <option
                          key={p.title}
                          value={p.title}
                          style={{ background: "#111" }}
                        >
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-cond text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      className="form-input resize-none"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your fitness goals…"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF5000] text-white font-cond font-bold tracking-widest text-sm uppercase py-4 rounded hover:bg-[#FF6B1A] transition-colors duration-200 mt-2 glow-brand"
                  >
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
