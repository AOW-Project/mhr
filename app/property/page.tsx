"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"
import { useRouter } from 'next/navigation';


export default function Hero() {
  const [headerBg, setHeaderBg] = useState("transparent")
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > 50 ? "#5E2D4F" : "transparent")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative w-screen h-[750px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/property/slide2.png')" }}
      >
        {/* Header */}
        <div
          className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8 transition-colors duration-500"
          style={{ backgroundColor: headerBg }}
        >
          <header className="flex justify-between items-center text-white text-[16.92px] max-w-7xl mx-auto">
            <Image src="/images/mhr- logo.svg" alt="Logo" width={60} height={80} />
            <nav className="flex space-x-6 items-center">
              <Link href="/">Home</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/property">▸ Properties</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/about">About Us</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/buyers">For Buyers</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/partners">Partners</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/contact">Contact Us</Link>
            </nav>
            <Image
              src="/images/quote.svg"
              alt="Quote"
              width={35}
              height={40}
              className="ml-6"
            />
          </header>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center  pt-6 h-full text-white text-center px-4 md:px-0">
          <p className="text-[24px] font-normal mb-2">Mystic Heaven Reality</p>
          <h1 className="text-[48px] md:text-5xl font-normal mb-6">View Properties</h1>
        </div>

        {/* HavenAI + View Properties Map */}
        <div className="relative z-30 flex flex-col items-center -mt-24">
          <div className="bg-white flex items-center justify-center rounded-t-[10px] shadow-md" style={{ width: "247px", height: "65px" }}>
            <button
              onClick={() => router.push('/haven-ai')}
              className="text-[#5E2D4F] text-[20px] font-semibold flex items-center gap-2"
            >
              HavenAI
              <img src="/images/property/ai.png" alt="AI Icon" className="w-5 h-5" />
            </button>
          </div>
        <button
          onClick={() => router.push('/map')} // ✅ navigate to /map
          className="bg-[#5E2D4F] text-white rounded-[10px] text-[24px] font-semibold flex items-center justify-center gap-2"
          style={{ width: "450px", height: "77px" }}
        >
          <img src="/images/property/map.png" alt="Map Icon" className="w-6 h-6" />
          View Properties Map
        </button>
        </div>
      </section>

      {/* Properties Section */}
     <section className="bg-black px-8 md:px-20 py-12 font-poppins">
  <div className="flex flex-col md:flex-row gap-12 mt-16 pb-8">
    {/* Filters */}
    <aside className="w-full md:w-[358px] h-[820px] bg-white p-6 rounded-lg shadow-md">
      <div className="pl-4"> {/* Added padding container */}
        <h2 className="text-[21px] font-medium mb-6">Filters</h2>

        <div className="mb-5">
          <label className="block text-[17px] font-medium mb-3">Location</label>
        </div>
        <hr className="my-5 w-[159px] border-t-2 border-gray-600" />

        <div className="mb-5">
          <label className="block text-[17px] max-w-[50%] font-medium mb-3">Price Range</label>
          <input 
            type="range" 
            min="300000" 
            max="500000" 
            className="w-full mb-1 accent-black" 
          />
          <div className="text-[17px] flex justify-between text-black px-1">
            <span>$300000</span>
            <span>$500000</span>
          </div>
        </div>
        <hr className="my-5 w-[300px] border-t-1 border-gray-600" />

        <div className="mb-5">
          <p className="text-[17px] font-medium mb-3">Property Type</p>
          {["Apartments", "Villa", "Farm House", "Plot/Land"].map((type) => (
            <div key={type} className="flex items-center mb-2 text-[15px]">
              <input type="checkbox" id={type} className="mr-3 h-4 w-4 accent-black" />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>
        <hr className="my-5 w-[300px] border-t-1 border-gray-600" />

        <div className="mb-5">
          <p className="text-[17px] font-medium mb-3">Bedroom</p>
          {["1", "2", "3", "4+"].map((num) => (
            <div key={num} className="flex items-center mb-2 text-[15px]">
              <input type="checkbox" id={`bed-${num}`} className="mr-3 h-4 w-4 accent-black" />
              <label htmlFor={`bed-${num}`}>{num}</label>
            </div>
          ))}
        </div>
        <hr className="my-5 w-[300px] border-t-1 border-gray-600" />

        <div>
          <p className="text-[17px] font-medium mb-3">Availability</p>
          {["Under Construction", "Ready to Move", "Resale"].map((status) => (
            <div key={status} className="flex items-center mb-2 text-[15px]">
              <input type="checkbox" id={status} className="mr-3 h-4 w-4 accent-black" />
              <label htmlFor={status}>{status}</label>
            </div>
          ))}
        </div>
      </div>
    </aside>

          {/* Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-[8px]">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-white rounded-xl w-[381px] h-[460px] shadow-md overflow-hidden flex flex-col"
              >
                <div className="w-full h-[252px] relative">
                  <Image
                    src={`/images/property/${id}.png`}
                    alt={`Property ${id}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 px-8">
                  <div>
                    <p className="text-[17px] text-black mb-1">124 Main Ad </p>
                    <p className="text-[17px] text-black mb-12">New York, New York,  NY</p>
                    <div className="flex justify-between px-1 mb-4">
                        <p className="text-[17px] font-semibold text-black">$300000</p>
                        <p className="text-[17px] font-semibold text-black">Villa</p>
                        </div>
                  </div>
                  <button
                    className="bg-[#5E2D4F] text-white text-[16px] font-medium rounded-[94px] mt-10"
                    style={{ width: "320px", height: "43px", margin: "0 auto" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
