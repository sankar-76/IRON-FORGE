// Trainers.jsx
import { TRAINERS } from "@/data";
import { useScrollReveal } from "@/hooks/useGSAP";
import SectionLabel from "@/components/ui/SectionLabel";
import { useState } from "react";

function TrainerCard({ trainer }) {
  const [imgError, setImgError] = useState(false);

  // Fallback image if the main one fails to load
  const fallbackImages = {
    "Marcus Cole":
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    "Aisha Patel":
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    "Ryo Tanaka":
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop",
    "Sara Voss":
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
  };

  return (
    <article className="reveal opacity-0 group rounded-xl overflow-hidden hover-lift cursor-pointer">
      {/* Image area with real photos */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        <img
          src={imgError ? fallbackImages[trainer.name] : trainer.imageUrl}
          alt={`${trainer.name} - ${trainer.role}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Initials circle - appears on hover */}
        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#FF5000]/90 backdrop-blur-sm flex items-center justify-center font-display text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          {trainer.initials}
        </div>

        {/* Client count badge */}
        <div className="absolute top-4 left-4 font-cond text-xs tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          💪 {trainer.clients}+ clients
        </div>

        {/* Overlay tint on hover */}
        <div className="absolute inset-0 bg-[#FF5000]/0 group-hover:bg-[#FF5000]/20 transition-colors duration-400" />
      </div>

      {/* Info area */}
      <div className="bg-zinc-900 border border-zinc-800 border-t-0 p-5 rounded-b-xl">
        <div className="mb-4">
          <div className="font-cond font-bold text-xl text-white tracking-wide leading-tight">
            {trainer.name}
          </div>
          <div className="font-cond text-sm text-[#FF5000] tracking-widest uppercase mt-0.5 flex items-center gap-2">
            <span className="w-4 h-px bg-[#FF5000]" />
            {trainer.role}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {trainer.certifications.map((cert) => (
            <span
              key={cert}
              className="font-cond text-[10px] tracking-wider uppercase text-gray-500 bg-zinc-800 border border-zinc-700 px-2 py-1 rounded hover:bg-zinc-700 hover:text-gray-400 transition-colors duration-200"
            >
              {cert}
            </span>
          ))}
        </div>

        {/* Footer stats */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <span className="font-body text-xs text-gray-500 flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {trainer.experience} experience
          </span>
          <span className="font-cond text-xs tracking-widest uppercase text-gray-500 bg-zinc-800 px-3 py-1 rounded-full">
            {trainer.speciality}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Trainers() {
  const containerRef = useScrollReveal(
    ".reveal",
    { opacity: 0, scale: 0.92, y: 30 },
    { opacity: 1, scale: 1, y: 0, duration: 0.55 },
    0.1,
  );

  return (
    <section id="trainers" className="py-24 md:py-32 bg-zinc-950 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5000]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5000]/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading row */}
        <div className="reveal opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Expert Team" />
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
            >
              MEET THE{" "}
              <span className="text-[#FF5000] relative inline-block">
                COACHES
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5000] to-transparent" />
              </span>
            </h2>
          </div>
          <p className="font-body text-gray-600 max-w-xs leading-relaxed text-sm">
            World-class coaches who have competed, won, and now dedicate
            themselves entirely to your transformation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
