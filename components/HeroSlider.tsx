// src/components/HeroSlider.tsx
"use client";

import { useState, useEffect } from "react";

export default function HeroSlider() {
  const slides = [
    {
      title: "Explore",
      subtitle: "Discover hidden wonders at every step",
      bg: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600"
    },
    {
      title: "Experience",
      subtitle: "Immerse yourself in local culture and traditions",
      bg: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600"
    },
    {
      title: "Engage",
      subtitle: "Connect with communities, create unforgettable memories",
      bg: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=1600"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center text-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${slide.bg}')` }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide uppercase">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl font-light tracking-wide max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 w-3 rounded-full transition-all ${idx === currentSlide ? "bg-amber-500 w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}