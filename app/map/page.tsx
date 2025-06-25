"use client"

import Image from "next/image"
import Link from "next/link"

import { useRouter } from "next/navigation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function LuxuryPropertiesPage() {
  

  return (
    <div className="bg-black text-white min-h-screen ">
      {/* HEADER */}
      <div
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8 transition-colors duration-500"
        
      >
       
      </div>
      <Header/>

      {/* TOP IMAGE */}
      <div className="pt-32">
        <Image
          src="/images/property/map/up.png"
          alt="Cityline"
          width={403}
          height={82}
          className="mx-auto"
        />
      </div>

      {/* SEARCH BAR */}
        <div className="flex justify-center">
        <div className="flex items-center bg-black border border-white rounded-[8px] px-4 py-3 w-[582px] h-[58px] text-white ml-[-40px]">
            <Image src="/images/property/map/search.png" alt="Search Icon" className="w-4 h-4 mr-3" />
            
            <input
            type="text"
            placeholder="Enter City, Community or Area"
            className="w-full outline-none bg-transparent text-[20px] text-white"
            />

            <div className="h-10 border-l border-white mx-3" />

            <select className="bg-black outline-none text-[20px]">
            <option>Villa</option>
            <option>Apartment</option>
            </select>
        </div>
        </div>



      {/* LUXURY PROPERTIES SECTION */}
   <div className="flex max-w-7xl mx-auto mt-10 gap-6 px-4 mb-10">
  {/* MAP CARD LEFT */}
  <div className="w-[600px] h-[730px] flex flex-col items-center ml-4"> {/* <-- Shifted right using ml-8 */}
    <div
      className="text-white text-center mb-4"
      style={{ width: '294px', height: '48px' }}
    >
      <h2 className="text-[30px] font-light">LUXURY PROPERTIES</h2>
    </div>

    <div className="relative w-[590px] h-[660px] rounded-xl overflow-hidden">
      <Image
        src="/images/property/map/map.png"
        alt="Map"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-4 left-8 z-10 flex items-center gap-2">
        <span className="text-[#FF5ACD] text-[19px] font-semibold">Dubai</span>
        <div className="h-6 border-l border-white mx-2" />
        <span className="text-white text-[19px] font-semibold">India</span>
      </div>
    </div>
  </div>



        {/* PROPERTY CARDS */}
<div className="grid grid-cols-2 gap-6 ml-4"> {/* Added ml-6 here */}
  {Array(4).fill(0).map((_, idx) => (
    <div key={idx} className="bg-white text-black rounded-xl overflow-hidden w-[280px] h-[365px]">
      <Image src={`/images/property/${idx + 1}.png`} alt={`Property ${idx + 1}`} width={279} height={185} objectFit="cover" layout="fill" />
      <div className="p-4 pr-4 pl-4 px-4">
        <p className="text-[14px] text-black mb-1 mt-0">124 Main Ad </p>
        <p className="text-[16px] text-black mb-3">New York, New York, NY</p>
        <div className="flex justify-between px-1">
          <p className="text-[16px] font-normal text-black">Villa</p>
          <p className="text-[17px] font-semibold text-black">$300000</p>
        </div>

        {/* Icons Row */}
        <div className="flex justify-around items-center w-[204px] mx-auto mt-3 h-[36px] bg-[#5E2D4F] rounded-md">
          {/* Call Icon */}
          <div className="flex justify-center items-center h-full w-1/3">
            <Image src="/images/property/map/call.png" className="w-[24px] h-[24px] object-contain" alt="Call" />
          </div>
          {/* Email Icon */}
          <div className="flex justify-center items-center h-full w-1/3 border-l border-r border-gray-400">
            <Image src="/images/property/map/message.png" className="w-[24px] h-[24px] object-contain" alt="Mail" />
          </div>
          {/* WhatsApp Icon */}
          <div className="flex justify-center items-center h-full w-1/3">
            <Image src="/images/property/map/whatsapp.png" className="w-[24px] h-[24px] object-contain" alt="WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}
