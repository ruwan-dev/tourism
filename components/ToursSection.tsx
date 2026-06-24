"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import toursData from "@/data/tours.json"; 

// --------------------------------------------------------
// CUSTOM AUTO-SCROLL CAROUSEL COMPONENT
// --------------------------------------------------------
function AutoScrollCarousel({
  children,
  direction = "left",
  gridClass,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  gridClass: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (el && direction === "right") {
      const timeout = setTimeout(() => {
        el.scrollLeft = el.scrollWidth;
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [direction]);

  useEffect(() => {
    if (isHovered) return;
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let currentDirection = direction === "left" ? 1 : -1;
    const speed = 0.5;

    const scroll = () => {
      if (!el) return;

      if (el.scrollWidth <= el.clientWidth + 10) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        currentDirection = -1;
      } else if (el.scrollLeft <= 0) {
        currentDirection = 1;
      }

      el.scrollLeft += speed * currentDirection;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, direction]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className={`flex flex-nowrap overflow-x-auto md:grid ${gridClass} gap-6 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
    >
      {children}
    </div>
  );
}

// --------------------------------------------------------
// MAIN SECTION COMPONENT
// --------------------------------------------------------
export default function ToursSection() {
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const { multidayTours, experiences, uniqueExperiences } = toursData;

  return (
    <div className="space-y-20 py-16 max-w-7xl mx-auto px-4 overflow-hidden">
      
      {/* SECTION 1: MULTI-DAY TOURS */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Multi-day Tours</h2>
          <div className="h-1 w-16 bg-amber-500 mt-2"></div>
        </div>
        
        <AutoScrollCarousel direction="left" gridClass="md:grid-cols-3 lg:grid-cols-4">
          {multidayTours?.map((tour: any, idx: number) => (
            <Link 
              href={`/tours/${tour.slug || slugify(tour.title)}`} 
              key={idx} 
              className="group relative flex-none w-[85%] sm:w-[45%] md:w-auto rounded-xl overflow-hidden flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-300 h-72"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${tour.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider flex items-center">
                    <span className="mr-2">📅</span> Multi Day
                  </div>
                  <h3 className="font-bold text-xl text-white line-clamp-3 leading-snug drop-shadow-md">
                    {tour.title}
                  </h3>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-200 mb-3 pb-3 border-b border-white/20">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>{tour.duration || "7 Days"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                      <span>${tour.price || "150"}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-200 font-semibold flex items-center group-hover:text-amber-400 transition">
                    View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </AutoScrollCarousel>
      </section>

      {/* SECTION 2: DAY EXPERIENCES */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Day Experiences</h2>
          <div className="h-1 w-16 bg-amber-500 mt-2"></div>
        </div>
        
        <AutoScrollCarousel direction="right" gridClass="md:grid-cols-3 lg:grid-cols-4">
          {experiences?.map((exp: any, idx: number) => (
            <Link 
              href={`/tours/${exp.slug || slugify(exp.title)}`} 
              key={idx} 
              className="group relative flex-none w-[85%] sm:w-[45%] md:w-auto rounded-xl overflow-hidden flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-300 h-72"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${exp.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-bold text-blue-300 mb-2 uppercase tracking-wider flex items-center">
                    <span className="mr-2">☀️</span> Day Trip
                  </div>
                  <h3 className="font-bold text-xl text-white line-clamp-3 leading-snug drop-shadow-md">
                    {exp.title}
                  </h3>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-200 mb-3 pb-3 border-b border-white/20">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>{exp.duration || "4 Hours"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                      <span>${exp.price || "50"}</span>
                    </div>
                  </div>

                  <div className="text-sm text-amber-400 font-semibold flex items-center group-hover:text-white transition">
                    Explore Adventure <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </AutoScrollCarousel>
      </section>

      {/* SECTION 3: UNIQUE EXPERIENCES */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Other Unique Experiences</h2>
          <div className="h-1 w-16 bg-amber-500 mt-2"></div>
        </div>
        
        <AutoScrollCarousel direction="left" gridClass="md:grid-cols-3 lg:grid-cols-4">
          {uniqueExperiences?.map((item: any, idx: number) => (
            <Link 
              href={`/tours/${item.slug || slugify(item.title)}`} 
              key={idx} 
              className="group relative flex-none w-[85%] sm:w-[45%] md:w-auto rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 h-72"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wider flex items-center">
                    <span className="mr-2">✨</span> Unique
                  </div>
                  <h3 className="font-bold text-xl text-white leading-snug drop-shadow-lg group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-300 mb-3 pb-3 border-b border-white/20">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>{item.duration || "2 Hours"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                      <span>${item.price || "30"}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-200 font-semibold flex items-center group-hover:text-emerald-400 transition">
                    Discover <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </AutoScrollCarousel>
      </section>

    </div>
  );
}