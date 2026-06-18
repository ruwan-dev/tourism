// src/app/page.tsx
import HeroSlider from "@/components/HeroSlider";
import AboutUs from "@/components/AboutUs";
import ToursSection from "@/components/ToursSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* USPs SECTION */}
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

      {/* 2. Combined Tour Categories with Tabs */}
      <ToursSection />

      {/* 3. About Us Component */}
      <section id="about">
        <AboutUs />
      </section>

    </main>
  );
}