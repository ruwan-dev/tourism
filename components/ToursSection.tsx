// src/components/ToursSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

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

  // දකුණට යන පේළියේ ආරම්භක ස්ථානය කෙළවරටම සැකසීම
  useEffect(() => {
    const el = scrollRef.current;
    if (el && direction === "right") {
      const timeout = setTimeout(() => {
        el.scrollLeft = el.scrollWidth;
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [direction]);

  // Auto-scroll ලොජික් එක
  useEffect(() => {
    if (isHovered) return;
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let currentDirection = direction === "left" ? 1 : -1;
    const speed = 0.5; // ගමන් කරන වේගය

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
  const multidayTours = [
    { title: "Classic Sri Lanka", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" },
    { title: "Best of Thrills", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=600" },
    { title: "Tea and Heritage", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600" },
    { title: "Tropical Treasures - Exploring Sri Lanka's Biodiversity", image: "https://images.unsplash.com/photo-1563990112129-a9a72c24f5d7?q=80&w=600" },
    { title: "Less Travelled", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" },
    { title: "Beach Bliss and Coastal Delights", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600" },
    { title: "Tropical Tweets- Sri Lanka Birdwatching Adventure", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=600" },
    { title: "Craft Your Journey: Tailor-Made Adventures in Sri Lanka", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600" }
  ];

  const experiences = [
    { title: "Explore Ella in deep – Highlights and Hidden wonders of Ella", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600" },
    { title: "Art of Ceylon Tea – a technical tea tour", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=600" },
    { title: "Ella cycling tour – Scenic 22km ride to less traveled Ella", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" },
    { title: "Wildlife Safari – Explore wildlife all over Sri Lanka", image: "https://images.unsplash.com/photo-1563990112129-a9a72c24f5d7?q=80&w=600" },
    { title: "Ella Rock Hike – Sunrise hike to the tallest peak in Ella", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600" },
    { title: "Hike in Pekoe Trail – Explore the wonders of Sri Lanka’s Longest hike", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=600" },
    { title: "Lipton seat and Tea village hike", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" },
    { title: "Paddy cultural tour", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600" },
    { title: "Hiking at Pekoe Trail", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600" }
  ];

  const uniqueExperiences = [
    { title: "Hidden Waterfall Hunting", image: "https://images.unsplash.com/photo-1563990112129-a9a72c24f5d7?q=80&w=600" },
    { title: "Horton Plains and Worlds End Hike", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" },
    { title: "Foraging and Traditional cooking", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=600" },
    { title: "Stories of Fishtail palm – Toddy Tapper", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600" },
    { title: "Cooking experiences", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600" },
    { title: "Devil’s Staircase hike", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" }
  ];

  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <div className="space-y-20 py-16 max-w-7xl mx-auto px-4 overflow-hidden">
      
      {/* SECTION 1: MULTI-DAY TOURS (Direction: LEFT) */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Multi-day Tours</h2>
          <div className="h-1 w-16 bg-amber-500 mt-2"></div>
        </div>
        
        <AutoScrollCarousel direction="left" gridClass="md:grid-cols-3 lg:grid-cols-4">
          {multidayTours.map((tour, idx) => (
            <Link 
              href={`/tours/${slugify(tour.title)}`} 
              key={idx} 
              // snap-start ඉවත් කර ඇත smooth scroll වීම සඳහා
              className="group relative flex-none w-[85%] sm:w-[45%] md:w-auto rounded-xl overflow-hidden flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-300 h-64"
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
                <div className="text-sm text-gray-200 font-semibold flex items-center group-hover:text-amber-400 transition">
                  View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </AutoScrollCarousel>
      </section>

      {/* SECTION 2: DAY EXPERIENCES (Direction: RIGHT) */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Day Experiences</h2>
          <div className="h-1 w-16 bg-amber-500 mt-2"></div>
        </div>
        
        <AutoScrollCarousel direction="right" gridClass="md:grid-cols-3">
          {experiences.map((exp, idx) => (
            <Link 
              href={`/tours/${slugify(exp.title)}`} 
              key={idx} 
              className="group relative flex-none w-[85%] sm:w-[45%] md:w-auto rounded-xl overflow-hidden flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-300 h-60"
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
                  <h3 className="font-bold text-lg text-white line-clamp-3 leading-snug drop-shadow-md">
                    {exp.title}
                  </h3>
                </div>
                <div className="text-sm text-amber-400 font-semibold flex items-center group-hover:text-white transition">
                  Explore Adventure <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </AutoScrollCarousel>
      </section>

      {/* SECTION 3: UNIQUE EXPERIENCES (Direction: LEFT) */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Other Unique Experiences</h2>
          <div className="h-1 w-16 bg-amber-500 mt-2"></div>
        </div>
        
        <AutoScrollCarousel direction="left" gridClass="md:grid-cols-3">
          {uniqueExperiences.map((item, idx) => (
            <Link 
              href={`/tours/${slugify(item.title)}`} 
              key={idx} 
              className="group relative flex-none w-[75%] sm:w-[45%] md:w-auto rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex items-center justify-center p-6 text-center h-40"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300"></div>

              <div className="relative z-10">
                <h3 className="font-bold text-lg text-white leading-snug drop-shadow-lg group-hover:text-amber-400 transition">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </AutoScrollCarousel>
      </section>

    </div>
  );
}