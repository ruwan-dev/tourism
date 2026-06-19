// src/app/tours/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

// URL Slug එක හදන Function එක
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

// ඔයාගේ Tours වල සම්පූර්ණ Data ටික
const allTours = [
  // Multi-day Tours
  { title: "Classic Sri Lanka", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600", category: "Multi-day Tour", price: 450 },
  { title: "Best of Thrills", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=1600", category: "Multi-day Tour", price: 500 },
  { title: "Tea and Heritage", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600", category: "Multi-day Tour", price: 350 },
  { title: "Tropical Treasures - Exploring Sri Lanka's Biodiversity", image: "https://images.unsplash.com/photo-1563990112129-a9a72c24f5d7?q=80&w=1600", category: "Multi-day Tour", price: 600 },
  { title: "Less Travelled", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600", category: "Multi-day Tour", price: 400 },
  { title: "Beach Bliss and Coastal Delights", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600", category: "Multi-day Tour", price: 550 },
  { title: "Tropical Tweets- Sri Lanka Birdwatching Adventure", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=1600", category: "Multi-day Tour", price: 420 },
  { title: "Craft Your Journey: Tailor-Made Adventures in Sri Lanka", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600", category: "Multi-day Tour", price: 700 },

  // Day Experiences
  { title: "Explore Ella in deep – Highlights and Hidden wonders of Ella", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600", category: "Day Experience", price: 80 },
  { title: "Art of Ceylon Tea – a technical tea tour", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=1600", category: "Day Experience", price: 60 },
  { title: "Ella cycling tour – Scenic 22km ride to less traveled Ella", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600", category: "Day Experience", price: 90 },
  { title: "Wildlife Safari – Explore wildlife all over Sri Lanka", image: "https://images.unsplash.com/photo-1563990112129-a9a72c24f5d7?q=80&w=1600", category: "Day Experience", price: 120 },
  { title: "Ella Rock Hike – Sunrise hike to the tallest peak in Ella", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600", category: "Day Experience", price: 50 },
  { title: "Hike in Pekoe Trail – Explore the wonders of Sri Lanka’s Longest hike", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=1600", category: "Day Experience", price: 75 },
  { title: "Lipton seat and Tea village hike", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600", category: "Day Experience", price: 65 },
  { title: "Paddy cultural tour", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600", category: "Day Experience", price: 55 },
  { title: "Hiking at Pekoe Trail", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600", category: "Day Experience", price: 70 },

  // Unique Experiences
  { title: "Hidden Waterfall Hunting", image: "https://images.unsplash.com/photo-1563990112129-a9a72c24f5d7?q=80&w=1600", category: "Unique Experience", price: 85 },
  { title: "Horton Plains and Worlds End Hike", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600", category: "Unique Experience", price: 110 },
  { title: "Foraging and Traditional cooking", image: "https://images.unsplash.com/photo-1588598126228-56dfd84749f1?q=80&w=1600", category: "Unique Experience", price: 95 },
  { title: "Stories of Fishtail palm – Toddy Tapper", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600", category: "Unique Experience", price: 50 },
  { title: "Cooking experiences", image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600", category: "Unique Experience", price: 65 },
  { title: "Devil’s Staircase hike", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600", category: "Unique Experience", price: 100 }
];

// Gallery එකට පෙන්වන්න අමතර පින්තූර ටිකක්
const galleryImages = [
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
  "https://images.unsplash.com/photo-1566807810034-cb150c765322?q=80&w=800",
  "https://images.unsplash.com/photo-1544015759-237f88e55f56?q=80&w=800",
  "https://images.unsplash.com/photo-1517760444937-f6397edcfa8e?q=80&w=800"
];

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = allTours.find((t) => slugify(t.title) === slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">{tour.title}</h1>
          <div className="flex items-center text-sm font-medium text-gray-700">
            <span className="flex items-center">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-900 fill-current"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.554 1.769l7.292 6.522-1.828 9.569a1 1 0 0 0 1.483 1.06L16 25.731l8.497 4.924a1 1 0 0 0 1.483-1.06l-1.828-9.569 7.292-6.522a1 1 0 0 0-.554-1.769l-9.86-1.27-4.124-8.885a1 1 0 0 0-1.812 0z"></path></svg>
              4.98
            </span>
            <span className="mx-2 font-bold hover:underline cursor-pointer">· 124 reviews</span>
            <span className="mx-2">·</span>
            <span className="flex items-center">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 fill-current"><path d="M16 1c4.418 0 8 3.582 8 8 0 5.485-6.667 14.333-7.464 15.352a.666.666 0 0 1-1.072 0C14.667 23.333 8 14.485 8 9c0-4.418 3.582-8 8-8zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
              Sri Lanka
            </span>
          </div>
        </div>

        {/* AIRBNB STYLE IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
          {/* ප්‍රධාන ලොකු පින්තූරය */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 relative group cursor-pointer">
            <img src={tour.image} alt="Tour Main" className="w-full h-full object-cover group-hover:brightness-95 transition" />
          </div>
          {/* අමතර කුඩා පින්තූර 4 */}
          {galleryImages.map((img, idx) => (
            <div key={idx} className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:brightness-95 transition" />
            </div>
          ))}
        </div>

        {/* CONTENT SPLIT (වම් පැත්තේ විස්තර, දකුණු පැත්තේ Booking Card එක) */}
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* LEFT SIDE: Tour Details */}
          <div className="w-full lg:w-2/3">
            
            {/* Host Section */}
            <div className="flex justify-between items-center pb-6 border-b border-gray-300">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  {tour.category} hosted by Travelling Thrills
                </h2>
                <p className="text-gray-500">Expert Guide · Local Authentic Experience · Transportation Included</p>
              </div>
              <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200 shadow-md">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" alt="Host Avatar" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Highlights Section */}
            <div className="py-8 border-b border-gray-300 space-y-6">
              <div className="flex items-start">
                <svg className="w-8 h-8 mr-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h3 className="text-lg font-semibold">Off the beaten path</h3>
                  <p className="text-gray-500 text-sm">Explore hidden gems that are often overlooked by mainstream travel.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-8 h-8 mr-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h3 className="text-lg font-semibold">Free cancellation</h3>
                  <p className="text-gray-500 text-sm">Cancel up to 48 hours before the tour for a full refund.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-8 h-8 mr-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                <div>
                  <h3 className="text-lg font-semibold">Highly rated Host</h3>
                  <p className="text-gray-500 text-sm">Travelling Thrills has received 5-star ratings from 95% of guests.</p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="py-8 border-b border-gray-300">
              <h2 className="text-2xl font-semibold mb-4">About this experience</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Immerse yourself in the beauty of <strong>{tour.title}</strong>. 
                  This experience is carefully crafted to give you the best 
                  {tour.category.toLowerCase()} experience in Sri Lanka. 
                </p>
                <p>
                  We believe that travel should be a force for good. Our tours are designed to have a positive impact on the environment, the local community, and the economy. We work closely with local businesses to ensure an authentic experience.
                </p>
                <button className="font-semibold underline mt-2 flex items-center hover:text-gray-600 transition">
                  Show more <span className="ml-1 text-xl leading-none">›</span>
                </button>
              </div>
            </div>

            {/* Amenities / What's included */}
            <div className="py-8">
              <h2 className="text-2xl font-semibold mb-6">What's included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">🚐</span> Professional Transportation
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">🗺️</span> Expert Local Guide
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">🎫</span> Entrance Tickets
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">💧</span> Bottled Water
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">📸</span> Photography Stops
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">🌿</span> Eco-friendly Practices
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Airbnb Sticky Booking Widget */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              
              {/* Price Header */}
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold">${tour.price || 150}</span>
                <span className="text-gray-500 ml-1">/ person</span>
              </div>

              {/* Form Inputs (Date, Time, Guests) */}
              <div className="border border-gray-400 rounded-xl overflow-hidden mb-4">
                <div className="flex border-b border-gray-400">
                  <div className="w-1/2 p-3 border-r border-gray-400 hover:bg-gray-50 cursor-pointer">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Date</div>
                    <div className="text-sm text-gray-600 mt-1">Add date</div>
                  </div>
                  <div className="w-1/2 p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Time</div>
                    <div className="text-sm text-gray-600 mt-1">Add time</div>
                  </div>
                </div>
                <div className="p-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Guests</div>
                    <div className="text-sm text-gray-600 mt-1">1 guest</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              {/* Reserve Button (Airbnb Rose Color) */}
              <button className="w-full bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold py-3.5 rounded-lg transition-colors text-lg">
                Reserve
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">You won't be charged yet</p>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="underline cursor-pointer">${tour.price || 150} x 1 guest</span>
                  <span>${tour.price || 150}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline cursor-pointer">Service fee</span>
                  <span>$25</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="mt-6 pt-6 border-t border-gray-300 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(tour.price || 150) + 25}</span>
              </div>

              {/* Back to Home Link */}
              <div className="mt-6 flex justify-center">
                 <Link href="/" className="text-sm font-semibold underline text-gray-500 hover:text-gray-800 flex items-center">
                   <span className="mr-1">⚑</span> Back to home
                 </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}