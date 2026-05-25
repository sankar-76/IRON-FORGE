import { useRef, useState, useEffect } from "react";
import { STATS } from "@/data";
import { useHeroAnimation } from "@/hooks/useGSAP";
import Button from "@/components/ui/Button";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useHeroAnimation({
    eyebrow: eyebrowRef.current ? eyebrowRef.current : ".hero-eyebrow",
    title: titleRef.current ? titleRef.current : ".hero-title",
    subtitle: subtitleRef.current ? subtitleRef.current : ".hero-subtitle",
    cta: ctaRef.current ? ctaRef.current : ".hero-cta",
    stats: statsRef.current ? statsRef.current : ".hero-stat",
  });

  const gymImages = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse" />
        )}

        <img
          src={gymImages[0]}
          alt="Professional gym equipment"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Multi-layered overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black_70%)]" />
      </div>

      {/* Brand Logo Watermark */}
      <div className="absolute top-8 left-8 z-20 opacity-20">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 0L26 12H14L20 0Z" fill="#FF5000" />
          <path d="M20 40L14 28H26L20 40Z" fill="#FF5000" />
          <rect x="18" y="12" width="4" height="16" fill="#FF5000" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-[#FF5000]/5 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5000]/5 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Animated Border Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full pointer-events-none animate-pulse z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full relative z-20">
        {/* Eyebrow with shine effect */}
        <div
          ref={eyebrowRef}
          className="hero-eyebrow opacity-0 flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[#FF5000]" />
          <span className="font-cond text-[#FF5000] text-sm font-semibold tracking-[0.3em] uppercase">
            No Excuses. Just Results.
          </span>
        </div>

        {/* Title with text shadow for better readability */}
        <h1
          ref={titleRef}
          className="hero-title opacity-0 font-display text-white leading-none mb-6 drop-shadow-2xl"
          style={{ fontSize: "clamp(68px, 12vw, 160px)" }}
        >
          FORGE YOUR
          <br />
          <span className="text-[#FF5000] relative">
            LIMIT
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF5000] to-transparent"></span>
          </span>
          LESS
        </h1>

        {/* Subtitle with better contrast */}
        <p
          ref={subtitleRef}
          className="hero-subtitle opacity-0 font-body text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed mb-10 drop-shadow-lg"
        >
          World-class training, elite coaches, and a community that pushes you
          beyond what you thought possible.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="hero-cta opacity-0 flex flex-wrap gap-4 mb-20"
        >
          <Button
            onClick={() => scrollTo("pricing")}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("programs")}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            Explore Programs →
          </Button>
        </div>

        {/* Stats with glass effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10 backdrop-blur-sm bg-black/20 rounded-2xl p-6 -mx-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="hero-stat opacity-0 text-center md:text-left"
            >
              <div
                className="font-display text-[#FF5000]"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
              >
                {stat.value}
              </div>
              <div className="font-cond text-xs text-gray-300 tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#FF5000] rounded-full mt-2 animate-ping" />
        </div>
      </div>
    </section>
  );
}
