// src/components/Preloader.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // තැනින් තැන මතු වීම සඳහා (Random) කාල පරතරයන් 15ක් (තත්පර වලින්)
  const revealDelays = [
    0.2, 1.1, 0.5, 1.4, 0.8, 
    1.3, 0.1, 0.9, 1.5, 0.4, 
    1.2, 0.7, 1.0, 0.3, 0.6
  ];

  useEffect(() => {
    // තත්පර 3 කින් පසු Preloader එක සම්පූර්ණයෙන්ම ඉවත් වීම
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      {/* Component එක ඇතුළතම අදාළ CSS Animation එක ලබා දීම */}
      <style>{`
        @keyframes hideBlock {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
        .block-anim {
          animation: hideBlock 0.5s ease-out forwards;
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="relative w-56 h-24 md:w-72 md:h-32">
          
          {/* 1. ප්‍රධාන Logo එක */}
          <Image 
            src="/logo.png" 
            alt="Travelling Thrills Loading..." 
            fill 
            className="object-contain"
            priority
          />

          {/* 2. තැනින් තැන මතු කරන Grid එක (සුදු කොටු 15) */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 z-10">
            {revealDelays.map((delay, index) => (
              <div 
                key={index}
                className="bg-white w-full h-full block-anim"
                style={{ 
                  animationDelay: `${delay}s` 
                }}
              />
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}