"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo & Title Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* මෙතැනදී logo-title.jpg එක භාවිතා කර ඇත */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/#about" className="hover:text-blue-600 transition">About Us</Link>
            
            {/* Dropdown Menu for Tours */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-blue-600 transition flex items-center space-x-1 focus:outline-none"
              >
                <span>Tours</span>
                <span className="text-xs">▼</span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 border z-50">
                  <Link href="/#multiday" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Multi Day Tours</Link>
                  <Link href="/#experiences" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Day Experiences</Link>
                </div>
              )}
            </div>

            <Link href="/#testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
            <Link href="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <Link href="/contact" className="bg-blue-950 text-white px-5 py-2 rounded-md hover:bg-blue-900 transition">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6 space-y-4 shadow-inner flex flex-col font-medium text-gray-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About Us</Link>
          <Link href="/#multiday" onClick={() => setIsOpen(false)} className="pl-4 text-sm hover:text-blue-600">↳ Multi Day Tours</Link>
          <Link href="/#experiences" onClick={() => setIsOpen(false)} className="pl-4 text-sm hover:text-blue-600">↳ Day Experiences</Link>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Testimonials</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Gallery</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-blue-950 text-white text-center py-2 rounded-md">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}