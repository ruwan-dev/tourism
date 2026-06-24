// src/components/HeroSlider.tsx
"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";

const customTravelFont = localFont({
  src: "../public/fonts/travelf1.otf",
  display: "swap",
});

export default function HeroSlider() {
  const slides = [
    {
      title: "Explore",
      subtitle: "Discover hidden wonders at every step",
      bg: "/slide2.png"
    },
    {
      title: "Experience",
      subtitle: "Immerse yourself in local culture and traditions",
      bg: "/slide1.png"
    },
    {
      title: "Engage",
      subtitle: "Connect with communities, create unforgettable memories",
      bg: "/slide3.png"
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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"}`}
            style={{ backgroundImage: `url('${slide.bg}')` }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          {/* 📌 වෙනස්කම 1: යටින් එන Icons වලට ඉඩ දීම සඳහා pb-20 md:pb-32 එකතු කර ප්‍රධාන අකුරු මඳක් ඉහළට ගෙන ඇත */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto pb-20 md:pb-32">
            <h1 className={`${customTravelFont.className} text-6xl md:text-9xl font-normal mb-4 tracking-wide drop-shadow-2xl text-white`}>
              {slide.title}
            </h1>
            <p className="text-xl md:text-3xl font-light italic tracking-wide max-w-2xl text-gray-200 drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      
      {/* Slider Controls (Dots) */}
      {/* 📌 වෙනස්කම 2: bottom-[20%] md:bottom-32 වෙනුවට bottom-6 md:bottom-10 දමා ඇත. 
          z-40 දැමුවේ යටින් එන කළු gradient එකට උඩින් මෙය click කළ හැකි වීමටයි. */}
      <div className="absolute bottom-6 md:bottom-10 z-40 flex space-x-3">
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