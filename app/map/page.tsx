"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function LuxuryPropertiesPage() {
  return (
    <div className="bg-black text-white min-h-screen ">
      {/* HEADER */}
      {/* The Header component itself needs to handle its responsiveness internally. */}
      <div
        className="fixed top-0 left-0 w-screen z-50 px-4 md:px-20 py-4 md:py-8 transition-colors duration-500" // Adjusted horizontal padding for mobile
      >
      </div>
      <Header />
      {/* TOP IMAGE */}
      <div className="pt-24 md:pt-32"> {/* Adjusted top padding for mobile */}
        <Image
          src="/images/property/map/up.png"
          alt="Cityline"
          width={200} // Reduced width for mobile
          height={40} // Reduced height for mobile
          className="mx-auto md:w-[403px] md:h-[82px]" // Desktop sizes
        />
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center px-4 md:px-0"> {/* Added horizontal padding for mobile */}
        <div className="flex items-center bg-black border border-white rounded-[8px] px-3 py-2 w-full max-w-[582px] h-[48px] md:h-[58px] text-white ml-0 md:ml-[-40px]"> {/* Adjusted width, height, ml, and padding for mobile */}
          <img src="/images/property/map/search.png" alt="Search Icon" className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" /> {/* Adjusted icon size */}

          <input
            type="text"
            placeholder="Enter City, Community or Area"
            className="w-full outline-none bg-transparent text-[14px] md:text-[20px] text-white" // Adjusted font size
          />

          <div className="h-8 md:h-10 border-l border-white mx-2 md:mx-3" /> {/* Adjusted height and margin */}

          <select className="bg-black outline-none text-[14px] md:text-[20px]"> {/* Adjusted font size */}
            <option>Villa</option>
            <option>Apartment</option>
          </select>
        </div>
      </div>
      {/* LUXURY PROPERTIES SECTION */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8 md:mt-10 gap-4 md:gap-6 px-4 mb-10"> {/* Changed to flex-col for mobile, adjusted gap and margin */}
        {/* MAP CARD LEFT */}
        <div className="w-full md:w-[600px] h-auto md:h-[730px] flex flex-col items-center ml-0 md:ml-4"> {/* Adjusted width, height, and ml for mobile */}
          <div
            className="text-white text-center mb-2 md:mb-4" // Adjusted margin
            style={{ width: 'auto', height: 'auto' }} // Removed fixed width/height for mobile, allowing content to dictate
          >
            <h2 className="text-[24px] md:text-[30px] font-light">LUXURY PROPERTIES</h2> {/* Adjusted font size */}
          </div>

          <div className="relative w-full md:w-[590px] h-[300px] md:h-[660px] rounded-xl overflow-hidden"> {/* Adjusted width and height for mobile */}
            <Image
              src="/images/property/map/map.png"
              alt="Map"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-2 left-4 md:top-4 md:left-8 z-10 flex items-center gap-1 md:gap-2"> {/* Adjusted position and gap */}
              <span className="text-[#FF5ACD] text-[16px] md:text-[19px] font-semibold">Dubai</span> {/* Adjusted font size */}
              <div className="h-4 md:h-6 border-l border-white mx-1 md:mx-2" /> {/* Adjusted height and margin */}
              <span className="text-white text-[16px] md:text-[19px] font-semibold">India</span> {/* Adjusted font size */}
            </div>
          </div>
        </div>
        {/* PROPERTY CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 ml-0 md:ml-4 w-full">
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="bg-white text-black rounded-xl overflow-hidden w-full md:w-[280px] h-auto md:h-[365px]"> {/* Adjusted width and height for mobile */}
              <Image src={`/images/property/${idx + 1}.png`} alt={`Property ${idx + 1}`} width={279} height={185} objectFit="cover" className="w-full h-auto" /> {/* Made image responsive */}
              <div className="p-3 md:p-4"> {/* Adjusted padding */}
                <p className="text-[12px] md:text-[14px] text-black mb-0 md:mb-1 mt-0">124 Main Ad </p> {/* Adjusted font size */}
                <p className="text-[14px] md:text-[16px] text-black mb-2 md:mb-3">New York, New York, NY</p> {/* Adjusted font size */}
                <div className="flex justify-between px-0 md:px-1"> {/* Adjusted padding */}
                  <p className="text-[14px] md:text-[16px] font-normal text-black">Villa</p> {/* Adjusted font size */}
                  <p className="text-[15px] md:text-[17px] font-semibold text-black">$300000</p> {/* Adjusted font size */}
                </div>

                {/* Icons Row */}
                <div className="flex justify-around items-center w-full max-w-[204px] mx-auto mt-2 md:mt-3 h-[32px] md:h-[36px] bg-[#5E2D4F] rounded-md"> {/* Adjusted width and height */}
                  {/* Call Icon */}
                  <div className="flex justify-center items-center h-full w-1/3">
                    <img src="/images/property/map/call.png" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] object-contain" alt="Call" /> {/* Adjusted icon size */}
                  </div>
                  {/* Email Icon */}
                  <div className="flex justify-center items-center h-full w-1/3 border-l border-r border-gray-400">
                    <img src="/images/property/map/message.png" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] object-contain" alt="Mail" /> {/* Adjusted icon size */}
                  </div>
                  {/* WhatsApp Icon */}
                  <div className="flex justify-center items-center h-full w-1/3">
                    <img src="/images/property/map/whatsapp.png" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] object-contain" alt="WhatsApp" /> {/* Adjusted icon size */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 md:mt-20"> {/* Adjusted margin for mobile */}
        <Footer />
      </div>
    </div>
  )
}