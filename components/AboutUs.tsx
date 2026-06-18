// src/components/AboutUs.tsx
export default function AboutUs() {
  return (
    <section className="py-16 bg-white border-t">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">About Us</h2>
        <p className="text-amber-600 font-medium mb-6">Welcome to Travelling Thrills</p>
        
        <div className="text-gray-600 space-y-4 text-justify md:text-center leading-relaxed">
          <p>
            Your go-to travel agency for best travel experience in Sri Lanka. We specially focusing on sustainable tourism and off the beaten path tours in Sri Lanka.
          </p>
          <p>
            We believe that travel should be a force for good, and that’s why we specialize in sustainable tourism. Our tours are designed to have a positive impact on the environment, the local community, and the economy. We work closely with local communities and businesses to ensure that our tours benefit everyone involved.
          </p>
          <p>
            At Travelling Thrills, we also specialize in off the beaten path tours. We believe that the best way to experience Sri Lanka is to step off the main tourist trail and explore the hidden gems that are often overlooked by mainstream travel. Our tours take you to the heart of Sri Lanka, where you can experience the authentic culture, traditions, and way of life of the local people.
          </p>
        </div>
        
        <button className="mt-8 bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-md transition shadow-md">
          Contact Us to Plan Your Adventure
        </button>
      </div>
    </section>
  );
}