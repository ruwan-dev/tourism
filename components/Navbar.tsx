// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎨 Vista Glass Button Styles 
  const navBtnStyle = scrolled 
    ? "px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-all text-sm font-medium shadow-sm"
    : "px-4 py-2 rounded-full border border-white/40 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md text-white drop-shadow-md hover:border-white/70 hover:from-white/30 hover:to-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm font-medium";

  const contactBtnStyle = scrolled
    ? "px-6 py-2 rounded-full border border-teal-900 bg-teal-900 text-white hover:bg-teal-800 transition-all text-sm font-semibold shadow-md"
    : "px-6 py-2 rounded-full border border-white/60 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md text-white drop-shadow-md shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:border-white hover:from-white/40 hover:to-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 text-sm font-bold tracking-wide";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-1" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-16"> 
                <Image 
                  src="/logo-title.png" 
                  alt="Travelling Thrills" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu - (Glassy Buttons) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link href="/" className={navBtnStyle}>Home</Link>
            <Link href="/#about" className={navBtnStyle}>About Us</Link>
            
            {/* Dropdown Menu for Tours */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${navBtnStyle} flex items-center space-x-1 focus:outline-none`}
              >
                <span>Tours</span>
                <span className="text-[10px] ml-1">▼</span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  <Link href="/#multiday" onClick={() => setIsDropdownOpen(false)} className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition">Multi Day Tours</Link>
                  <Link href="/#experiences" onClick={() => setIsDropdownOpen(false)} className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition">Day Experiences</Link>
                </div>
              )}
            </div>

            <Link href="/#testimonials" className={navBtnStyle}>Testimonials</Link>
            <Link href="/gallery" className={navBtnStyle}>Gallery</Link>
            <Link href="/blog" className={navBtnStyle}>Blog</Link>
            
            <div className="pl-2">
              <Link href="/contact" className={contactBtnStyle}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 rounded-lg transition-colors ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white bg-white/20 backdrop-blur-sm border border-white/30"}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 py-4 px-6 space-y-3 shadow-2xl flex flex-col font-medium text-gray-700 absolute w-full left-0 top-full rounded-b-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700">Home</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700">About Us</Link>
          <div className="pl-4 border-l-2 border-teal-100 ml-4 my-1 space-y-1">
            <Link href="/#multiday" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm rounded-lg hover:bg-teal-50 hover:text-teal-700">Multi Day Tours</Link>
            <Link href="/#experiences" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm rounded-lg hover:bg-teal-50 hover:text-teal-700">Day Experiences</Link>
          </div>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700">Testimonials</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700">Gallery</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700">Blog</Link>
          <div className="pt-2 mt-2 border-t border-gray-100">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-center bg-teal-900 text-white py-3 rounded-xl shadow-md hover:bg-teal-800 transition">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}