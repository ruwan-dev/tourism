// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Travelling Thrills | Sustainable Tourism & Off the Beaten Path Tours Sri Lanka',
  description: 'Discover hidden wonders in Sri Lanka with Travelling Thrills. We specialize in sustainable tourism, Ella hikes, wildlife safaris, and custom multi-day tours.',
  keywords: 'Sri Lanka tours, Ella hiking, sustainable tourism Sri Lanka, Pekoe trail hike, off the beaten path Sri Lanka'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}