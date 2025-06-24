'use client';

import { useState } from 'react';
import Footer from './Footer';

const properties = [
  { name: 'Danube', image: '/images/ai/danube.png' },
  { name: 'Arada', image: '/images/ai/arada.png' },
  { name: 'Sobha', image: '/images/ai/sobha.png' },
  { name: 'Danube', image: '/images/ai/danube.png' },
  { name: 'Arada', image: '/images/ai/arada.png' },
  { name: 'Sobha', image: '/images/ai/sobha.png' },
];

export default function MatchResultsPage() {
  const [budget, setBudget] = useState(70);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <img src="/logo.svg" alt="Logo" className="h-10" />
        <nav className="hidden md:flex space-x-6 text-white/80 text-sm">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">About Us</a>
          <a href="#">For Owners</a>
          <a href="#">Partners</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="md:hidden text-white">☰</button>
      </div>

      {/* HeavenAI Title */}
      <div className="text-center mb-10">
        <h1 className="text-[37px] md:text-4xl font-semibold text-[#B1007B]">
          HeavenAI <img src="/images/ai.png" alt="AI icon" className="inline-block w-6 ml-1" />
        </h1>
        <p className="text-white text-[24px] font-semibold mt-2">Smart Search For Smart Living</p>
      </div>

      {/* Budget Slider */}
      <div className="bg-white/10 border border-white rounded-xl py-6 px-8 mb-14 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white text-lg font-medium">Let's Set Your Budget</span>
          <span className="bg-[#D60087] text-white px-4 py-1 rounded-full font-semibold">
            ₹{budget}L
          </span>
        </div>

        <input
          type="range"
          min={50}
          max={90}
          step={10}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full accent-[#D60087]"
        />

        <div className="flex justify-between text-sm text-white/80 mt-2">
          <span>₹50L</span>
          <span>₹70L</span>
          <span>₹90Cr</span>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {properties.map((property, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl border border-white/20">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-[260px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-md text-sm font-semibold">
              {property.name}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
     <Footer/>
     </div>
  );
}
