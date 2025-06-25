"use client"


import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

import Header from "@/components/Header"

export default function AboutPage() {
  
  return (
    <div className="font-poppins bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-screen h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/about/slide.webp"
        alt="About Slide"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-center "
      />

      {/* Header */}
      <Header />

      {/* Hero Text */}
      <div className="flex justify-center text-center px-4 md:px-0 w-full mt-10 z-10">
        <h1 className="text-[66px] font-semibold whitespace-nowrap text-white">
          Your Gateway To Luxury Living
        </h1>
      </div>
    </section>

      {/* About Content */}
    <section className="relative bg-slate-900 text-white min-h-[1880px] w-full overflow-visible">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/about/about-us.png"
      alt="About us background"
      fill
      className="object-cover"
      priority
    />
    {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 opacity-60" />
      </div>

      {/* Top & Bottom Outward Shadows */}
   
      <div className="pointer-events-none absolute top-[-100px] left-0 w-full h-[100px] z-20 bg-gradient-to-t from-black/90 to-transparent" />
    <div className="absolute -bottom-[40px] left-0 w-full h-[40px] bg-gradient-to-b from-black/60 via-white/10 to-transparent" />

        <div className="relative z-10">
          <div className="text-center pt-12 pb-8">
            <div className="flex items-center justify-center w-full">
              {/* Left gradient line */}
              <div
                className="flex-1 h-[3px]"
                style={{
                  backgroundImage: `linear-gradient(90deg, #ffffff 0%, #ffffff 70%, rgba(255, 255, 255, 0.5) 85%, transparent 100%)`,
                }}
              />

              {/* Text content */}
             <div className="px-6 md:px-12">
                <h2 className="text-[28px] md:text-[36px] font-semibold mb-3 text-white">About Us</h2>
                <p className="text-base md:text-[36px] font-normal text-white">Guiding Your Home</p>
              </div>


              {/* Right gradient line */}
              <div
                className="flex-1 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 15%, #ffffff 30%, #ffffff 100%)`,
                }}
              />
            </div>
          </div>

          {/* Content */}
         <div className="pt-12 pb-20 px-2 md:px-14 lg:px-24">

      {/* Wrapper for sections */}
      <div className="space-y-28 w-full">
    
    {/* Our Company - Left aligned */}
    <div className="flex justify-start mb-20">
      <div className="space-y-4 w-[480px] h-[287px]">
        <h3 className="text-2xl  md:text-[36px] font-semibold text-white mb-6">Our Company</h3>
        <p className="text-white leading-relaxed text-[18px] font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis,
           pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a 
           mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor 
           congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus 
           orci luctus et ultrices posuere cubilia curae; Sed turpis est, iaculis vel aliquet eget,
            commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisi nec lectus 
            feugiat pharetra vitae sit amet enim.
        </p>
      </div>
    </div>

    {/* Our Team - Right aligned */}
    <div className="flex justify-end mb-20">
      <div className="space-y-4 w-[480px] h-[287px]">
        <h3 className="text-2xl md:text-[36px] font-semibold text-white mb-6">Our Team</h3>
        <p className="text-white leading-relaxed text-[18px] font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis,
           pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a 
           mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor 
           congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus 
           orci luctus et ultrices posuere cubilia curae; Sed turpis est, iaculis vel aliquet eget,
            commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisi nec lectus 
            feugiat pharetra vitae sit amet enim.
        </p>
      </div>
    </div>

    {/* Our Approach - Left aligned */}
    <div className="flex justify-start mb-20">
      <div className="space-y-4 w-[480px] h-[287px]">
        <h3 className="text-2xl md:text-[36px] font-semibold text-white mb-6">Our Approach</h3>
        <p className="text-white leading-relaxed text-[18px] font-inter">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis,
           pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a 
           mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor 
           congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus 
           orci luctus et ultrices posuere cubilia curae; Sed turpis est, iaculis vel aliquet eget,
            commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisi nec lectus 
            feugiat pharetra vitae sit amet enim.
        </p>
      </div>
    </div>

    {/* Our Commitments - Right aligned */}
    <div className="flex justify-end mb-20">
      <div className="space-y-4 w-[480px] h-[287px]">
        <h3 className="text-2xl md:text-[36px] font-semibold text-white mb-6">Our Commitments</h3>
        <p className="text-white leading-relaxed text-[18px] font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis,
           pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a 
           mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor 
           congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus 
           orci luctus et ultrices posuere cubilia curae; Sed turpis est, iaculis vel aliquet eget,
            commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisi nec lectus 
            feugiat pharetra vitae sit amet enim.
        </p>
        </div>
      </div>

    </div>
  </div>

  </div>
  </section>

     
      {/* Contact Call-to-Action Section */}
      <section className="relative h-[300px] flex items-center justify-center mt-20 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className="relative w-full max-w-6xl h-full overflow-hidden rounded-lg shadow-xl">
          {/* Background Image */}
          <Image
            src="images/about/contact.png"
            alt="Contact background"
            fill
            className="object-cover object-center z-0"
            priority
          />

          {/* Overlay */}
          

          {/* Content Container */}
           <div className="relative z-20 text-white text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1200px] mx-auto pt-20">
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-tight mb-6">
              Your Dream Home Is Just A Step Away Let
              <br />
              Mystic Haven Realty Guide You
            </h2>

            <Link
              href="/contact"
              className="inline-block px-16 py-3 bg-[#5E2D4F] text-white rounded-[10px] font-bold shadow-md hover:bg-[#4a1f3d] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Projects Section */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-[36px] md:text-[28px] lg:text-[32px] font-semibold text-[#1c1c1c] mb-4">
            Explore New Off Plan Project
          </h2>
       <p className="max-w-7xl mx-auto text-black text-[24px] font-normal leading-relaxed mb-10 w-[1005px] h-[108px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
          pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus sit
          amet molestie quis, tempor congue quam.
        </p>


        <div className="bg-white py-16 px-8 md:px-16 rounded-xl shadow-md w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            <img src="/images/about/1.png" alt="..." className="w-[245px] h-[245px] object-cover rounded-xl" />
            <img src="/images/about/2.png" alt="..." className="w-[245px] h-[245px] object-cover rounded-xl" />
            <img src="/images/about/3.png" alt="..." className="w-[245px] h-[245px] object-cover rounded-xl" />
            <img src="/images/about/4.png" alt="..." className="w-[245px] h-[245px] object-cover rounded-xl" />
          </div>
        </div>
        </div>
      </section>

      <Footer/>

    </div>
  )
}
