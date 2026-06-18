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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image with Slow Zoom Animation (අකුරු Zoom වීම වළක්වා ඇත) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"}`}
            style={{ backgroundImage: `url('${slide.bg}')` }}
          />
          
          {/* Dark Overlay (පින්තූරයට අඳුරු ස්වභාවයක් ලබා දීම) */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content (නව අකුරු රටාවන් සහිතව) */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-widest uppercase drop-shadow-xl">
              {slide.title}
            </h1>
            <p className="text-xl md:text-3xl font-light italic tracking-wide max-w-2xl text-gray-200 drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      
      {/* Slider Controls */}
      <div className="absolute bottom-8 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 rounded-full transition-all duration-500 ${idx === currentSlide ? "bg-amber-500 w-10" : "bg-white/50 w-3 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}