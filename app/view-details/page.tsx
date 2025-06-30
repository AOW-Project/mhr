"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function ViewDetailsPage() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (date && time) {
      setConfirmed(true);
    }
  };

  const handleReset = () => {
    setShowModal(false);
    setDate("");
    setTime("");
    setConfirmed(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[250px] md:h-[426px] bg-cover bg-center relative" // Reduced height for mobile
        style={{
          backgroundImage: "url('/images/view-details/slide.png')",
        }}
      >
        <h2 className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-[20px] md:text-[36px] font-light text-center"> {/* Adjusted font size and bottom spacing */}
          Luxury 2 - Bedroom Villa
        </h2>
      </div>

      {/* Description */}
      <div className="px-6 md:px-20 pt-4 md:pt-12 pb-4 md:pb-6 text-center"> {/* Adjusted padding for mobile */}
        <h3 className="text-[28px] md:text-[36px] font-semibold mb-3 md:mb-4">Description</h3> {/* Reduced font size and margin */}
        <p className="text-[16px] md:text-[24px] text-gray-300 max-w-7xl mx-auto leading-6 md:leading-8"> {/* Reduced font size and line height */}
          This stunning 3 bedroom villa offers a breathtaking sea view, a private pool, and cutting edge smart home features. Located in the heart of Dubai, it provides unparalleled luxury and comfort.
        </p>
      </div>

      {/* Image + Info */}
      <div className="px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 pb-8 md:pb-12 mt-4 md:mt-6"> {/* Changed flex-col for mobile, adjusted gap and margin */}
        <div className="w-full md:w-[580px] h-[280px] md:h-[523px]"> {/* Adjusted width and height for mobile */}
          <Image
            src="/images/view-details/image1.png"
            alt="Property Image"
            width={580} // Still provide desktop width for Next/Image optimization
            height={523} // Still provide desktop height for Next/Image optimization
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-6 md:gap-12 flex-1 justify-between w-full"> {/* Adjusted gap and width */}
          <div>
            <p className="text-[22px] md:text-[28px] font-semibold mb-6 md:mb-10 text-white">$500000.00</p> {/* Adjusted font size and margin */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-24 text-gray-300 text-[14px] md:text-base mb-0"> {/* Adjusted gap-x, gap-y and font size */}
              <p className="flex items-center gap-2 md:gap-8"> {/* Adjusted gap */}
                <img src="/images/view-details/location.png" className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                Dubai
              </p>
              <p className="flex items-center gap-2 md:gap-8"> {/* Adjusted gap */}
                <img src="/images/view-details/bed.png" className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                3 Bedrooms
              </p>
              <p className="flex items-center gap-2 md:gap-8">1500 sq ft</p> {/* Adjusted gap */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 md:gap-2 text-white mt-4 md:mt-0 pt-0"> {/* Adjusted gap-x and margin-top */}
            <div>
              <h4 className="font-normal text-[24px] md:text-[32px] mb-2 md:mb-3 px-0 md:px-4">Features</h4> {/* Reduced font size and removed horizontal padding */}
              <ul className="space-y-3 md:space-y-5 text-[16px] md:text-[20px]"> {/* Adjusted space-y and font size */}
                {["Swimming Pool", "Sea View", "Private Pool", "Smart Home Tech"].map((item) => (
                  <li key={item} className="flex items-center gap-2 md:gap-3"> {/* Adjusted gap */}
                    <img src="/images/view-details/tick.png" className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-normal text-[24px] md:text-[32px] mb-2 md:mb-3 px-0 md:px-4">Amenities</h4> {/* Reduced font size and removed horizontal padding */}
              <ul className="space-y-3 md:space-y-5 text-[16px] md:text-[20px]"> {/* Adjusted space-y and font size */}
                {["Gym", "Security", "Parking", "Gardens"].map((item) => (
                  <li key={item} className="flex items-center gap-2 md:gap-3"> {/* Adjusted gap */}
                    <img src="/images/view-details/tick.png" className="w-4 h-4 md:w-5 md:h-5" /> {/* Adjusted icon size */}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 md:mt-2 w-full flex justify-center md:block"> {/* Adjusted margin-top and added flex for centering on mobile */}
            <button
              className="bg-[#83005B] hover:bg-[#952a82] text-white px-4 py-3 md:py-2 w-full max-w-[418px] h-[56px] md:h-[66px] rounded-[5px] text-[18px] md:text-[20px] font-semibold ml-0 md:ml-6" // Adjusted width, height, font size, and margin
              onClick={() => setShowModal(true)}
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-6 md:px-20 mb-8 md:mb-20 mt-6 md:mt-10"> {/* Adjusted margin for mobile */}
        <div className="w-full md:w-[1177px] h-[300px] md:h-[502px] max-w-full mx-auto rounded-xl overflow-hidden bg-black relative"> {/* Adjusted height for mobile */}
          <Image
            src="/images/view-details/Basemap image.png"
            alt="Map / Location"
            width={1177} // Still provide desktop width for Next/Image optimization
            height={502} // Still provide desktop height for Next/Image optimization
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/images/view-details/basemap.png"
              alt="Property Icon"
              width={80} // Reduced icon size for mobile
              height={80} // Reduced icon size for mobile
              className="md:w-[130px] md:h-[130px]" // Desktop sizes
            />
          </div>
        </div>
      </div>

      {/* Visit Scheduler Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-lg p-6 md:p-8 w-full max-w-md shadow-xl text-center"> {/* Adjusted padding */}
            {!confirmed ? (
              <>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Schedule Your Visit</h2> {/* Adjusted font size */}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border px-3 py-2 mb-3 md:mb-4 rounded text-base" // Adjusted margin and font size
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border px-3 py-2 mb-4 md:mb-6 rounded text-base" // Adjusted margin and font size
                />
                <button
                  onClick={handleConfirm}
                  className="bg-[#83005B] hover:bg-[#952a82] text-white px-4 py-2 rounded w-full text-base" // Adjusted font size
                >
                  Confirm Visit
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Visit Scheduled</h2> {/* Adjusted font size */}
                <p className="mb-4 md:mb-6 text-base">Your visit on <strong>{date}</strong> at <strong>{time}</strong> has been scheduled.</p> {/* Adjusted margin and font size */}
                <button
                  onClick={handleReset}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded w-full text-base" // Adjusted font size
                >
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}