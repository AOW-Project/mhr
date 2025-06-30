"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Hero Section */}
<section
    className="relative w-screen h-[250px] md:h-[750px] flex items-center justify-center overflow-hidden"
>
    {/* Optimized Background Image */}
    <Image
        src="/images/partners/slide.webp"
        alt="Partners Background"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-center "
    />
    {/* Header */}
    <Header />

    {/* Hero Text */}
    <div className="relative z-20 text-center flex flex-col items-center w-full px-4 mt-4 md:mt-20">
        {/* Mobile font size changed to 14px, desktop remains 30px */}
        <p className="text-white text-[14px] md:text-[30px] font-normal mb-0 md:mb-2">Mystic Heaven Reality</p>
        {/* Mobile font size changed to 14px, desktop remains 6xl */}
        <h1 className="text-white text-[14px] md:text-6xl font-semibold">Our Partners</h1>
    </div>
</section>

    {/*partners*/}
      <section className="w-full h-[80px] md:h-[170px] bg-cover bg-center relative " > {/* Smaller height for mobile, original for desktop */}
    <div className="absolute inset-0 bg-black" />
    {/* Flex container for logos: keeps them horizontal on mobile, shrinks logos */}
    <div className="relative z-10 flex justify-around items-center h-full px-4 md:px-0 max-w-7xl mx-auto">
        <div className="flex items-center p-1 md:p-2 rounded-md shadow-md"> {/* Reduced padding for mobile logos */}
            <Image
                src="/images/partners/danube1.png"
                alt="Danube Properties Logo"
                width={250} // Original desktop width for Image component optimization
                height={134} // Original desktop height for Image component optimization
                className="w-20 h-auto object-contain md:w-[250px] md:h-[134px]" // Responsive size: w-20 for mobile, original for desktop
            />
        </div>
        <div className="flex items-center p-1 md:p-2 rounded-md shadow-md">
            <Image
                src="/images/partners/sobha1.png"
                alt="Sobha Realty Logo"
                width={214}
                height={77}
                className="w-16 h-auto object-contain md:w-[214px] md:h-[77px]" // Responsive size: w-16 for mobile, original for desktop
            />
        </div>
        <div className="flex items-center p-1 md:p-2 rounded-md shadow-md">
            <Image
                src="/images/partners/damac.png"
                alt="Damac Logo"
                width={260}
                height={73}
                className="w-20 h-auto object-contain md:w-[260px] md:h-[73px]" // Responsive size: w-20 for mobile, original for desktop
            />
        </div>
        <div className="flex items-center p-1 md:p-2 rounded-md shadow-md">
            <Image
                src="/images/partners/arada.png"
                alt="Arada Logo"
                width={293}
                height={44}
                className="w-24 h-auto object-contain md:w-[293px] md:h-[44px]" // Responsive size: w-24 for mobile, original for desktop
            />
        </div>
    </div>
</section>

      {/* Partner Cards Section */}
<section className="bg-black pt-6 pb-12 md:py-10 px-4 md:px-28">
  <div className="max-w-9xl mx-auto">
    {/* Grid gaps are responsive for this section */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-[12px] gap-y-[12px] md:gap-x-6 md:gap-y-10 justify-center mt-2">
      {[
        { name: "SOBHA REALTY", logo: "/images/partners/sobha.png" },
        { name: "DAMAC", logo: "/images/partners/damac.png" },
        { name: "ARADA", logo: "/images/partners/arada1.png" },
        { name: "EMAAR", logo: "/images/partners/emaar.png" },
        { name: "DANUBE PROPERTIES", logo: "/images/partners/danube.png" },
        { name: "ARADA", logo: "/images/partners/arada1.png" },
        { name: "EMAAR", logo: "/images/partners/emaar.png" },
        { name: "DANUBE PROPERTIES", logo: "/images/partners/danube.png" },
        { name: "ARADA", logo: "/images/partners/arada1.png" },
      ].map((partner, idx) => (
        <div key={idx}>
          {/* Desktop Card (unchanged) */}
          <div
            className="hidden md:block bg-white rounded-lg p-6 text-center space-y-4 border border-gray-300"
            style={{ height: "433px", width: "100%", maxWidth: "380px" }}
          >
            <div className="h-12 flex items-center justify-center mt-6">
              <Image src={partner.logo} alt={partner.name} width={157} height={56} />
            </div>
            <div className="pt-4">
              <p className="text-black text-[14px] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
            <div className="pt-4">
              <button
                className="bg-[#5E2D4F] text-white text-[16px] font-medium rounded-[94px]"
                style={{ width: "302px", height: "43px" }}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Mobile Card: Height is fixed (clamped), width increases, content consistently placed */}
          <div
            className="block md:hidden bg-white rounded-lg border border-gray-300 p-4 text-center flex flex-col justify-between" /* p-4 for overall card padding. flex-col & justify-between push content to top/bottom */
            style={{
              width: "clamp(152px, 44vw, 180px)",
              height: "clamp(190px, 55vw, 220px)", /* Mobile card height is fixed (clamped) */
            }}
          >
            <div className="flex-grow flex flex-col items-center justify-center">
              {/* Logo container: py-2 for top/bottom padding around the logo. h-8 and flex center the image within this container. */}
              <div className="py-2 h-8 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={108}
                  height={30}
                  className="object-contain"
                />
              </div>
              <p className="text-black text-[11px] mt-3 text-center leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Button block: placed at the bottom due to justify-between on parent, with a small top padding */}
            <div className="pt-2">
              <button
                className="bg-[#5E2D4F] text-white text-[12px] font-medium rounded-[94px] w-[80%] mx-auto"
                style={{ height: "31px" }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
   <Footer />
    </div>
  )
}