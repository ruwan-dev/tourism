// src/app/page.tsx
import HeroSlider from "@/components/HeroSlider";
import AboutUs from "@/components/AboutUs";
import ToursSection from "@/components/ToursSection";
import ContactUs from "@/components/ContactUs"; // ContactUs component එක import කිරීම
import { User, Leaf, MapPin } from "lucide-react"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* --- HERO & USPS WRAPPER --- */}
      {/* 📌 Navbar එක fixed කර ඇති නිසා, Hero section එක කෙලින්ම ඉහළින්ම ආරම්භ වේ */}
      <section className="relative w-full bg-black">
        
        {/* 1. Hero Slider */}
        <HeroSlider />

        {/* --- USPs SECTION --- */}
        {/* 📌 pb-14 වෙනුවට pb-28 md:pb-36 ලබා දී Icons තවත් ඉහළට ගෙන ඇත */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent pt-40 pb-28 md:pb-36 pointer-events-none">
          
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-3 md:gap-8 text-center text-white pointer-events-auto">
            
            {/* Box 1 */}
            <div className="flex flex-col items-center group cursor-default">
              <div className="mb-3 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:-translate-y-1 shadow-lg">
                <User className="w-5 h-5 md:w-7 md:h-7 text-white drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium md:font-semibold text-[11px] md:text-lg tracking-wide drop-shadow-md leading-tight">
                Experienced<br className="block md:hidden" /> Tour Leaders
              </h3>
              <p className="text-xs mt-2 hidden md:block text-gray-300 drop-shadow-md font-light max-w-xs">
                Expertise at Your Service: Guided by the Best
              </p>
            </div>
            
            {/* Box 2 */}
            <div className="flex flex-col items-center group cursor-default">
              <div className="mb-3 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:-translate-y-1 shadow-lg">
                <Leaf className="w-5 h-5 md:w-7 md:h-7 text-white drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium md:font-semibold text-[11px] md:text-lg tracking-wide drop-shadow-md leading-tight">
                Authentic<br className="block md:hidden" /> Experience
              </h3>
              <p className="text-xs mt-2 hidden md:block text-gray-300 drop-shadow-md font-light max-w-xs">
                Unlock the Genuine: Dive into Authenticity
              </p>
            </div>
            
            {/* Box 3 */}
            <div className="flex flex-col items-center group cursor-default">
              <div className="mb-3 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:-translate-y-1 shadow-lg">
                <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium md:font-semibold text-[11px] md:text-lg tracking-wide drop-shadow-md leading-tight">
                Expertly Crafted<br className="block md:hidden" /> Adventures
              </h3>
              <p className="text-xs mt-2 hidden md:block text-gray-300 drop-shadow-md font-light max-w-xs">
                Crafted with Care: Expertly Tailored For You
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Combined Tour Categories with Tabs */}
      <ToursSection />

      {/* 3. About Us Component */}
      <section id="about">
        <AboutUs />
      </section>

      {/* 4. Contact Us Component */}
      <section id="contact">
        <ContactUs />
      </section>

    </main>
  );
}