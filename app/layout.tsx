// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Poppins import කිරීම
import "./globals.css";

// 2. Font එක setup කිරීම
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  title: "Travelling Thrills",
  description: "Explore the best tours in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. මෙතනදී poppins.className ලබා දීම */}
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}