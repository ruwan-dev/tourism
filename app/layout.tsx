// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins ,Caveat} from "next/font/google";
import "./globals.css";

// Navbar එක මෙතනින් Import කරගන්න ඕනේ
import Navbar from "@/components/Navbar"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
});
const caveat = Caveat({ subsets: ["latin"], weight: ["700"] }); // 2. Caveat setup කරන්න
export const metadata: Metadata = {
  metadataBase: new URL("https://tourism-six-sepia.vercel.app"), // ඔයාගේ Vercel Link එක
  title: "Travelling Thrills | Best Tours & Experiences in Sri Lanka",
  description: "Discover the hidden wonders of Sri Lanka with Travelling Thrills. We offer tailor-made multi-day tours, day experiences, and unique adventures across the beautiful island.",
  keywords: [
    "Sri Lanka tours",
    "travel Sri Lanka",
    "best tours in Sri Lanka",
    "Ella tours",
    "Sri Lanka holiday packages",
    "Travelling Thrills",
    "Sri Lanka sightseeing"
  ],
  openGraph: {
    title: "Travelling Thrills | Explore Sri Lanka",
    description: "Discover the hidden wonders of Sri Lanka with Travelling Thrills. Tailor-made tours and unique adventures.",
    url: "/",
    siteName: "Travelling Thrills",
    images: [
      {
        url: "/logo.jpg", // Link එක share කරද්දි පේන පින්තූරය
        width: 1200,
        height: 630,
        alt: "Travelling Thrills Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travelling Thrills | Best Tours in Sri Lanka",
    description: "Discover the hidden wonders of Sri Lanka with Travelling Thrills.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* මෙන්න අපේ Navbar එක ආයෙත් ඇතුළත් කළා */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}