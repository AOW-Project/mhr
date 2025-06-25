"use client"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"

export default function AboutPage() {
   const [scrolled, setScrolled] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY
        setScrolled(offset > 100) // toggle at 100px
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  

  return (
    <div className="font-poppins bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative w-full h-[750px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/buyers/slide.png')" }}
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
           <header className="flex justify-between items-center text-white text-[16.92px] max-w-7xl mx-auto">
                        <Image src="/images/mhr- logo.svg" alt="Logo" width={60} height={80} />
                        <nav className="flex space-x-6 items-center">
                            <Link href="/">Home</Link>
                            <span className="h-4 border-l border-white" />
                            <Link href="/property">Properties</Link>
                             <span className="h-4 border-l border-white" />
                            <Link href="/about">About Us</Link>
                           <span className="h-4 border-l border-white" />
                            <Link href="/buyers">▸ For Buyers</Link>
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
    
        {/* Hero Text - Centered */}
        <div className="relative z-20 text-center flex flex-col items-center mt-26">
          <p className="text-white text-[64px] font-semibold mb-1">For Buyers</p>
          <h1 className="text-white text-[24px] md:text-2xl font-normal">Your Guide to buying your dream home</h1>
        </div>
      </section>
      {/* Buying Guide Section */}
       <section
        className="relative w-full h-[1450px] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/buyers/tower.png')" }}
      >
  {/* Optional: Dark Overlay */}


  {/* Title */}
   <div className="absolute top-10 md:top-16 left-0 right-0 z-10">
                    <div className="flex items-center justify-center">
                        <img src="/images/contact/left.png" alt="Line Left" className="flex-grow h-[4px]" />
                        <h2 className="text-[36px] md:text-3xl font-semibold text-white px-4 whitespace-nowrap relative z-10 ">
                            Buying Guide
                        </h2>
                        <img src="/images/contact/right.png" alt="Line Right" className="flex-grow h-[4px]" />
                    </div>
                </div>

  {/* Steps Positioned Vertically */}
    <div className="relative z-10 max-w-7xl mx-auto text-[24px] font-light leading-snug">
    <div className="absolute left-[40px] top-[140px] w-[448px] h-[129px] p-4">
      
        <span className="font-semibold text-pink-400">Step 1: Define Your Requirements</span>
       <p className="text-[18px] mt-2 "> Decide on location, budget, and property type<br />
        (apartment, villa, townhouse)<br  />
        <span className="block mt-4">Consider future investment value and lifestyle preferences</span>
      </p>  
      
    </div>

    <div className="absolute left-[450px] top-[320px] w-[448px] h-[129px] p-4">
    
        <span className="font-semibold text-pink-400">Step 2: Explore Properties</span>
        <p className="text-[18px] mt-2" >
        Browse listings from top developers like Sobha, Akada, Damac, and Nakheel<br />
        
       <span className="block mt-4">Schedule property viewings with our expert real estate agents.</span> 
      </p>
    </div>

    <div className="absolute right-[15px] top-[540px] w-[448px] h-[129px] p-4 text-left">
    
        <span className="font-semibold text-pink-400">Step 3: Secure Financing</span><br />
        <p className="text-[18px] mt-2" >
        Choose between a bank mortgage or developer payment plans<br />
        <span className="block mt-4">Submit required documents for loan approval</span>
      </p>
    </div>

    <div className="absolute left-[40px] top-[700px] w-[448px] h-[129px] p-4">
      
        <span className="font-semibold text-pink-400">Step 4: Make an Offer & Sign the Agreement</span><br />
         <p className="text-[18px] mt-2" >
        Negotiate price and sign a Sale Purchase Agreement(SPA)<br />
        <span className="block mt-4">& Pay the intial deposit (usually 5-10% of the property price)</span>
      </p>
    </div>

    <div className="absolute left-[450px] top-[900px] w-[448px] h-[129px] p-4">
      
        <span className="font-semibold text-pink-400">Step 5: Complete Legal & Payment Processes</span><br />
         <p className="text-[18px] mt-2" >
        Arrange property valuation and necessary approvals.<br />
        <span className="block mt-4">Pay the remaining amount as per the agreed plan.</span>
      </p>
    </div>

    <div className="absolute right-[15px] top-[1150px] w-[448px] h-[129px] p-4 text-left">
      
        <span className="font-semibold text-pink-400">Step 6: Property Handover & Registration</span><br />
         <p className="text-[18px] mt-2" >
        Arrange property valuation and necessary approvals.<br />
          <span className="block mt-4">Pay the remaining amount as per the agreed plan.</span> 
      </p>
    </div>
  </div>
  </section>

<section className="relative w-full bg-black py-16 text-white pl-10">
  {/* Blending Gradient at the Top */}
  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent z-0" />


  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <h2 className="text-[36px] md:text-3xl font-semibold text-pink-400 mb-4">Financing Options</h2>
    <div className="mb-6 text-[16px] font-noraml font-inter">
      <p className="mb-4">Easy Installment Plans - Spread payments over months or years</p>
      <p className="mb-4">Post-Handover Payment Options - Pay after moving in</p>
      <p className="mb-4">Zero Interest Plans - Some properties offer 0% interest financing</p>
    </div>
    <h2 className="text-[36px] md:text-3xl font-semibold text-pink-400 mb-4 mt-8">Need Assistance?</h2>
    <p className="mb-4 text-[16px] font-noraml font-inter">
      Our experts can guide you in choosing the best financing option based on your budget and needs.
    </p>
    <h2 className="text-[36px] md:text-3xl font-semibold text-pink-400 mb-4 mt-8">Working with Mystic Haven Realty</h2>
    <div className="mb-2 text-[16px] font-noraml font-inter">
      <p className="">Exclusive Listings - Access to premium properties from Sobha, Akada, Damac, and Nakheel Expert</p>
      <p className="mb-4">Seamless Process - From property selection to final purchase</p>
      <p className="mb-4">Financing Assistance - Help with mortgages and payment plans</p>
    </div>
  </div>
</section>


      <Footer/>
      </div>
      
)
}