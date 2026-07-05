// src/components/WhatsAppButton.tsx
import React from 'react';

export default function WhatsAppButton() {
  // ඔයාගේ WhatsApp අංකය මෙතනට දෙන්න (උදා: 94712345678)
  const phoneNumber = "94771472672"; 
  
  // පාරිභෝගිකයාට යැවීමට අවශ්‍ය default පණිවිඩයක් මෙහි ලබා දිය හැක (අවශ්‍ය නම් පමණක්)
  const message = "Hello! I would like to know more about your tours."; 
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-transform duration-300 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.553 4.195 1.604 6.01L.034 23.992l6.096-1.597A11.954 11.954 0 0 0 12.03 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.986c-1.802 0-3.565-.486-5.111-1.405l-.367-.217-3.8.995.998-3.704-.237-.378A9.957 9.957 0 0 1 2.014 12.03c0-5.526 4.498-10.024 10.017-10.024 5.518 0 10.016 4.498 10.016 10.024 0 5.527-4.498 10.025-10.016 10.025zm5.503-7.514c-.302-.15-1.782-.878-2.062-.977-.279-.101-.482-.15-.685.151-.202.301-.782.978-.96 1.178-.176.2-.352.226-.653.076-1.226-.615-2.222-1.238-3.07-2.673-.203-.301.203-.276.495-.858.101-.2.05-.376-.025-.526-.076-.151-.685-1.654-.939-2.264-.247-.594-.497-.514-.685-.524-.176-.01-.377-.012-.58-.012-.202 0-.528.076-.805.376-.277.301-1.056 1.028-1.056 2.507 0 1.48 1.08 2.91 1.233 3.111.15.2 2.118 3.23 5.127 4.53 1.952.846 2.658.91 3.535.858.966-.057 2.932-1.2 3.344-2.357.412-1.155.412-2.14.288-2.342-.124-.2-.482-.3-.783-.45z"/>
      </svg>
    </a>
  );
}