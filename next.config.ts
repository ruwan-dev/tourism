import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Next.js වලට Static HTML හදන්න කියලා කියනවා
  images: {
    unoptimized: true, // GitHub Pages වල Image Server එකක් නැති නිසා මේක අනිවාර්යයි
  },
  basePath: '/tourism', // ඔයාගේ GitHub Repo එකේ නම (CSS/Images කැඩෙන එක නවත්වන්න)
  assetPrefix: '/tourism/', 
};

export default nextConfig;