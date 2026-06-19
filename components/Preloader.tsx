// src/components/Preloader.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // කාලය තත්පර 6 (6000ms) දක්වා වැඩි කළා, Animation එක සම්පූර්ණ වීමට ඉඩ දීම සඳහා
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsLoading(false), 700);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style>{`
        .se-reveal {
          opacity: 0;
          
          -webkit-mask-image: linear-gradient(to bottom right, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%);
          mask-image: linear-gradient(to bottom right, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%);
          
          -webkit-mask-size: 300% 300%;
          mask-size: 300% 300%;
          
          /* වේගය අඩු කිරීම: මෙතැන 3.5s වෙනුවට 5s ලබා දී ඇත (තවත් Slow කර ඇත) */
          animation: seFadeReveal 8s ease-out forwards;
          
          animation-delay: 0.2s; 
        }

        @keyframes seFadeReveal {
          0% {
            opacity: 1; 
            -webkit-mask-position: 0% 0%;
            mask-position: 0% 0%;
          }
          100% {
            opacity: 1;
            -webkit-mask-position: 100% 100%;
            mask-position: 100% 100%;
          }
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-700 ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="relative w-56 h-24 md:w-72 md:h-32 se-reveal">
          <Image 
            src="/logo.png" 
            alt="Travelling Thrills Loading..." 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
}