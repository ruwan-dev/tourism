// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 pt-12 pb-6 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide">TRAVELLING THRILLS</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your go-to travel agency for sustainable tourism and off-the-beaten-path adventures in Sri Lanka. Explore the authentic beauty with us.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-amber-500 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/#multiday" className="hover:text-white transition">Multi-Day Tours</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold text-amber-500 mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400 mb-2">📍 Ella, Sri Lanka</p>
          <p className="text-sm text-gray-400 mb-4">✉️ info@travellingthrills.com</p>
          
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-amber-500 transition">🌐</a> {/* Facebook placeholder */}
            <a href="#" className="hover:text-amber-500 transition">📸</a> {/* Instagram placeholder */}
            <a href="#" className="hover:text-amber-500 transition">🐦</a> {/* Twitter placeholder */}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-blue-900 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Travelling Thrills. All rights reserved. | Sustainable Tourism Sri Lanka.
      </div>
    </footer>
  );
}