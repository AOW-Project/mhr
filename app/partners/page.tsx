"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"


export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="font-poppins bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative w-full h-[750px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/partners/slide.png')" }}
      >
        {/* Header */}
        <div 
  className={`fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8 transition-all duration-500 ${
    scrolled ? "bg-[#5E2D4F]" : "bg-transparent shadow-none"
  }`}
  style={{
    transform: scrolled ? 'translateY(0)' : 'translateY(2px)'
  }}
>
          <header className="flex justify-center items-center text-white text-[16.92px] max-w-7xl mx-auto">
            <nav className="flex space-x-6 items-center">
              <Link href="/">Home</Link>
              <span className="h-4 border-l border-white" />
               <Link href="/property">Properties</Link>
            <span className="h-4 border-l border-white" />
              <Link href="/about">About Us</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/buyers">For Buyers</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/partners">▸ Partners</Link>
              <span className="h-4 border-l border-white" />
              <Link href="/contact">Contact Us</Link>
            </nav>
          </header>
        </div>

        {/* Dark Overlay for text readability */}
        

        {/* Hero Text - Centered */}
        <div className="relative z-20 text-center flex flex-col items-center mt-20">
          <p className="text-white text-[30px] font-normal mb-2">Mystic Heaven Reality</p>
          <h1 className="text-white text-[48px] md:text-6xl font-semibold">Our Partners</h1>
        </div>
      </section>


    {/*partners*/}

      <section className="w-full h-[170px] bg-cover bg-center relative " >
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 flex justify-around items-center h-full px-4 md:px-0 max-w-7xl mx-auto">
          <div className="flex items-center  p-2 rounded-md shadow-md">
            <Image
              src="/images/partners/danube1.png" // Replace with actual logo path
              alt="Danube Properties Logo"
              width={250}
              height={134}
              className="mr-2"
            />
           
          </div>
          <div className="flex items-center p-2 rounded-md shadow-md">
            <Image
              src="/images/partners/sobha1.png" // Replace with actual logo path
              alt="Sobha Realty Logo"
              width={214}
              height={77}
              className="mr-2"
            />
            
          </div>
          <div className="flex items-center p-2 rounded-md shadow-md">
            <Image
              src="/images/partners/damac.png" // Replace with actual logo path
              alt="Damac Logo"
              width={260}
              height={73}
              className="mr-2"
            />
        
          </div>
          <div className="flex items-center  p-2 rounded-md shadow-md">
            <Image
              src="/images/partners/arada.png" // Replace with actual logo path
              alt="Arada Logo"
              width={293}
              height={44}
              className="mr-2"
            />

          </div>
        </div>
      </section>


      {/* Partner Cards Section */}
    <section className="bg-black py-10 px-28 pb-20">
  <div className="max-w-9xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-center mt-2">
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
        <div
          key={idx}
          className="bg-white rounded-lg p-6 text-center space-y-4 border border-gray-300"
          style={{ height: "433px", width: "100%", maxWidth: "380px" }}
        >
          <div className="h-12 flex items-center justify-center mt-6">
            <Image src={partner.logo} alt={partner.name} width={150} height={60} />
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
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}