"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { 
  ArrowLeft, Star, Clock, Map, Hash, Share, Heart, CheckCircle, 
  MapPin, Utensils, Bus, Bed, CheckCircle2, Plus, Flag, FileText 
} from "lucide-react";
import toursData from "@/data/tours.json";

// URL Slug function
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function TourDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Tab State for "Before you book"
  const [activeTab, setActiveTab] = useState("rightForYou");

  // TypeScript Build Error Fix
  const data = toursData as any;

  // Load from JSON
  const allTours = [
    ...(data.multidayTours || []).map((t: any) => ({ ...t, category: "Multi-day Tour" })),
    ...(data.experiences || []).map((t: any) => ({ ...t, category: "Day Experience" })),
    ...(data.uniqueExperiences || []).map((t: any) => ({ ...t, category: "Unique Experience" }))
  ];

  const tour = allTours.find((t: any) => slugify(t.title) === slug);

  if (!tour) {
    notFound();
    return null;
  }

  const numericPrice = Number(tour.price) || 150;

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB & ICONS */}
        <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-gray-500 hover:text-gray-800 flex items-center text-sm font-medium">
                <ArrowLeft size={16} className="mr-1" /> Back to Tours
            </Link>
            <div className="flex gap-4">
                <button className="text-gray-500 hover:text-rose-500 transition"><Heart size={20} /></button>
                <button className="text-gray-500 hover:text-blue-500 transition"><Share size={20} /></button>
            </div>
        </div>

        {/* TITLE SECTION */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2b49] mb-3">{tour.title}</h1>
          <div className="flex items-center text-sm font-medium text-gray-700">
            <div className="flex text-amber-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" className="text-gray-300" />
            </div>
            <span className="mx-2 font-bold text-gray-900">4.67</span>
            <span className="text-gray-500 underline cursor-pointer hover:text-gray-900">(48 reviews)</span>
          </div>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="flex flex-col lg:flex-row gap-10 relative">
          
          {/* LEFT SIDE: Content */}
          <div className="w-full lg:w-2/3">
            
            {/* IMAGE GALLERY SECTION (Updated Layout with 15 Image Support) */}
            <div className="mb-10 flex flex-col gap-3">
              
              {/* Main Large Image */}
              <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer">
                  <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
              </div>

              {/* Thumbnails Row (Max 4 visible) */}
              {tour.gallery && tour.gallery.length > 0 && (
                  <div className="grid grid-cols-4 gap-3 h-24 md:h-32">
                      {tour.gallery.slice(0, 4).map((img: string, idx: number) => {
                          const isLastVisible = idx === 3;
                          const totalPhotos = (tour.gallery?.length || 0) + 1; // +1 for the main hero image
                          const showOverlay = isLastVisible && tour.gallery.length >= 4;

                          return (
                              <div key={idx} className="relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group h-full shadow-sm">
                                  <img 
                                      src={img} 
                                      alt={`${tour.title} Gallery ${idx + 1}`} 
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                  />
                                  
                                  {/* "All photos" Overlay button on the 4th thumbnail */}
                                  {showOverlay && (
                                      <div className="absolute inset-0 bg-black/30 hover:bg-black/40 flex items-center justify-center transition-colors">
                                          <button className="bg-white text-gray-900 font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-lg text-[10px] md:text-sm shadow-md transition-transform hover:scale-105">
                                              All photos ({totalPhotos})
                                          </button>
                                      </div>
                                  )}
                              </div>
                          );
                      })}
                  </div>
              )}
            </div>

            {/* Overview Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#1a2b49]">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {tour.description ? tour.description : `Experience the best of Sri Lanka with our ${tour.title}. This journey takes you through breathtaking landscapes, authentic cultural encounters, and unforgettable adventures perfectly tailored for you.`}
              </p>
            </div>

            {/* Why you'll love this trip */}
            <div className="mb-12 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-xl text-[#1a2b49] mb-4">Why you'll love this trip</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.whyLove && tour.whyLove.length > 0 ? (
                      tour.whyLove.map((reason: string, idx: number) => (
                        <div key={idx} className="flex gap-3">
                            <CheckCircle className="text-emerald-500 shrink-0" size={24} />
                            <span className="text-gray-700">{reason}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex gap-3">
                            <CheckCircle className="text-emerald-500 shrink-0" size={24} />
                            <span className="text-gray-700">Expert local guides throughout the journey</span>
                        </div>
                        <div className="flex gap-3">
                            <CheckCircle className="text-emerald-500 shrink-0" size={24} />
                            <span className="text-gray-700">Authentic local dining experiences</span>
                        </div>
                      </>
                    )}
                </div>
            </div>

            {/* INCLUSIONS AND ACTIVITIES */}
            <div className="mb-12 bg-[#f9f8f4] p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-[#1a2b49]">Inclusions and activities</h2>
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Left Column (Transport, Meals etc) */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1"><MapPin size={18} className="text-gray-800"/> <span className="font-bold text-gray-900">Destinations</span></div>
                    <p className="ml-7 text-blue-600 underline cursor-pointer">{(tour.inclusions as any)?.destinations || "Sri Lanka"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1"><Utensils size={18} className="text-gray-800"/> <span className="font-bold text-gray-900">Meals</span></div>
                    <p className="ml-7 text-gray-700">{(tour.inclusions as any)?.meals || "Breakfast included"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1"><Bus size={18} className="text-gray-800"/> <span className="font-bold text-gray-900">Transport</span></div>
                    <p className="ml-7 text-gray-700">{(tour.inclusions as any)?.transport || "Private Vehicle"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1"><Bed size={18} className="text-gray-800"/> <span className="font-bold text-gray-900">Accommodation</span></div>
                    <p className="ml-7 text-gray-700">{(tour.inclusions as any)?.accommodation || "Hotel"}</p>
                  </div>
                </div>

                {/* Right Column (Activities) */}
                <div className="w-full md:w-1/2 space-y-8 md:border-l border-gray-300 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
                  <div>
                    <div className="flex items-center gap-2 mb-3"><CheckCircle2 size={18} className="text-gray-800"/> <span className="font-bold text-gray-900">Included activities</span></div>
                    <ul className="list-disc ml-9 text-gray-700 space-y-1">
                      {(tour.inclusions as any)?.includedActivities?.map((act: string, i: number) => <li key={i}>{act}</li>) || <li>Standard activities</li>}
                    </ul>
                    <button className="ml-7 mt-2 text-blue-600 text-sm hover:underline">Show all ⌄</button>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3"><Plus size={18} className="text-gray-800"/> <span className="font-bold text-gray-900">Optional activities</span></div>
                    <ul className="list-disc ml-9 text-gray-700 space-y-1">
                      {(tour.inclusions as any)?.optionalActivities?.map((act: string, i: number) => <li key={i}>{act}</li>) || <li>No optional activities</li>}
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* BEFORE YOU BOOK YOU SHOULD KNOW (Tabs) */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#1a2b49]">Before you book you should know</h2>
              
              <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                <button 
                  onClick={() => setActiveTab('rightForYou')} 
                  className={`pb-3 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'rightForYou' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <Flag size={18}/> Is this trip right for you?
                </button>
                <button 
                  onClick={() => setActiveTab('visas')} 
                  className={`pb-3 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'visas' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <FileText size={18}/> Visas
                </button>
                <button 
                  onClick={() => setActiveTab('accommodation')} 
                  className={`pb-3 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'accommodation' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <Bed size={18}/> Accommodation
                </button>
                <button 
                  onClick={() => setActiveTab('joiningPoint')} 
                  className={`pb-3 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'joiningPoint' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <MapPin size={18}/> Joining point
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="border border-gray-200 rounded-xl p-6 h-64 overflow-y-auto bg-white custom-scrollbar shadow-inner">
                <ul className="list-disc ml-5 space-y-4 text-gray-700 leading-relaxed">
                  {(tour.beforeYouBook as any)?.[activeTab]?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  )) || <li>Information not available currently. Please check the JSON file.</li>}
                </ul>
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#1a2b49]">Itinerary</h2>
              <div className="space-y-4">
                {tour.itinerary && tour.itinerary.length > 0 ? (
                  tour.itinerary.map((item: any, idx: number) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#1a2b49] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 mt-3 ml-14">{item.desc}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic border border-gray-200 rounded-xl p-6">Detailed itinerary will be provided upon booking inquiry.</p>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Booking Card */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              
              {/* Price Header */}
              <div className="mb-6">
                <span className="text-gray-500 font-medium block mb-1">From</span>
                <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-[#1a2b49]">${numericPrice}</span>
                    <span className="text-lg font-bold text-[#1a2b49] mb-1">USD</span>
                </div>
              </div>

              {/* Quick Facts List */}
              <div className="space-y-5 border-y border-gray-200 py-6 mb-6">
                <div className="flex items-center gap-4">
                    <Clock className="text-gray-400 shrink-0" size={24} />
                    <div>
                        <span className="block text-sm text-gray-500 font-medium">Duration</span>
                        <span className="block font-bold text-gray-900">{tour.duration || "8 Days"}</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <Map className="text-gray-400 shrink-0" size={24} />
                    <div>
                        <span className="block text-sm text-gray-500 font-medium">Route</span>
                        <span className="block font-bold text-gray-900">Colombo to Colombo</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Hash className="text-gray-400 shrink-0" size={24} />
                    <div>
                        <span className="block text-sm text-gray-500 font-medium">Trip code</span>
                        <span className="block font-bold text-gray-900">LK-TT-{numericPrice}</span>
                    </div>
                </div>
              </div>

              {/* Red Action Button */}
              <button className="w-full bg-[#cc0000] hover:bg-[#a30000] text-white font-bold py-4 rounded-xl transition-colors text-lg">
                View dates & book
              </button>

              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">Need help booking? <Link href="#" className="text-blue-600 font-medium hover:underline">Contact us</Link></p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}