// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // 1. Slider Data
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

  // Slide එක තත්පර 5න් 5ට ස්වයංක්‍රීයව වෙනස් වීමට
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // 2. Multi-day Tours Data (8 Items)
  const multidayTours = [
    "Classic Sri Lanka", "Best of Thrills", "Tea and Heritage",
    "Tropical Treasures - Exploring Sri Lanka's Biodiversity", "Less Travelled",
    "Beach Bliss and Coastal Delights", "Tropical Tweets- Sri Lanka Birdwatching Adventure",
    "Craft Your Journey: Tailor-Made Adventures in Sri Lanka"
  ];

  // 3. Experiences Data (9 Items)
  const experiences = [
    "Explore Ella in deep – Highlights and Hidden wonders of Ella",
    "Art of Ceylon Tea – a technical tea tour",
    "Ella cycling tour – Scenic 22km ride to less traveled Ella",
    "Wildlife Safari – Explore wildlife all over Sri Lanka",
    "Ella Rock Hike – Sunrise hike to the tallest peak in Ella",
    "Hike in Pekoe Trail – Explore the wonders of Sri Lanka’s Longest hike",
    "Lipton seat and Tea village hike",
    "Paddy cultural tour",
    "Hiking at Pekoe Trail"
  ];

  // 4. Other Unique Experiences (6 Items)
  const uniqueExperiences = [
    "Hidden Waterfall Hunting", "Horton Plains and Worlds End Hike",
    "Foraging and Traditional cooking", "Stories of Fishtail palm – Toddy Tapper",
    "Cooking experiences", "Devil’s Staircase hike"
  ];

  // සරලව URL Slug එකක් සාදා ගැනීමට උදව් වන Function එකක්
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-x0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* HERO SLIDER SECTION */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${slide.bg}')` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide animate-fade-in uppercase">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl font-light tracking-wide max-w-2xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
        {/* Slider Dots */}
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

      {/* WHY US / USPs SECTION */}
      <section className="py-12 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-4xl mb-2">🧑‍✈️</div>
            <h3 className="font-bold text-lg text-blue-900">Experienced Tour Leaders</h3>
            <p className="text-sm text-gray-600 mt-1">Expertise at Your Service: Guided by the Best for Effortless Exploration</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🌴</div>
            <h3 className="font-bold text-lg text-blue-900">Authentic Experience</h3>
            <p className="text-sm text-gray-600 mt-1">Unlock the Genuine: Dive into Authenticity for Unforgettable Memories</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🗺️</div>
            <h3 className="font-bold text-lg text-blue-900">Expertly Crafted Adventures</h3>
            <p className="text-sm text-gray-600 mt-1">Crafted with Care: Expertly Tailored Adventures for Your Ultimate Journey</p>
          </div>
        </div>
      </section>

      {/* MULTI-DAY TOURS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Multi-day Tours</h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-2"></div>
        </div>
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {multidayTours.map((tour, idx) => (
            <Link href={`/tours/${slugify(tour)}`} key={idx} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between p-6 hover:-translate-y-1 duration-300">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition">
                {tour}
              </h3>
              <div className="mt-4 text-sm text-amber-600 font-semibold flex items-center">
                View Tour Details &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCES SECTION */}
      <section className="py-16 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Day Experiences</h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mt-2"></div>
          </div>
          {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <Link href={`/tours/${slugify(exp)}`} key={idx} className="group bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition border border-gray-100 flex flex-col justify-between">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition leading-snug">
                  {exp}
                </h3>
                <span className="text-xs text-gray-400 mt-4 block">Adventure Tour</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER UNIQUE EXPERIENCES */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Other Unique Experiences</h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueExperiences.map((item, idx) => (
            <Link href={`/tours/${slugify(item)}`} key={idx} className="bg-white p-5 rounded-lg border shadow-sm hover:border-amber-500 transition text-center font-medium text-gray-700 block">
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">About Us</h2>
          <p className="text-amber-600 font-medium mb-6">Welcome to Travelling Thrills</p>
          
          <div className="text-gray-600 space-y-4 text-justify md:text-center leading-relaxed">
            <p>
              Your go-to travel agency for best travel experience in Sri Lanka. We specially focusing on sustainable tourism and off the beaten path tours in Sri Lanka.
            </p>
            <p>
              We believe that travel should be a force for good, and that’s why we specialize in sustainable tourism. Our tours are designed to have a positive impact on the environment, the local community, and the economy. We work closely with local communities and businesses to ensure that our tours benefit everyone involved.
            </p>
            <p>
              At Travelling Thrills, we also specialize in off the beaten path tours. We believe that the best way to experience Sri Lanka is to step off the main tourist trail and explore the hidden gems that are often overlooked by mainstream travel. Our tours take you to the heart of Sri Lanka, where you can experience the authentic culture, traditions, and way of life of the local people.
            </p>
          </div>
          
          <button className="mt-8 bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-md transition shadow-md">
            Contact Us to Plan Your Adventure
          </button>
        </div>
      </section>

    </main>
  );
}