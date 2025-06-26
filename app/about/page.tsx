"use client"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutPage() {
  return (
      <div className="font-poppins bg-white text-black">
  {/* Hero Section */}
  <section
    className="relative w-screen h-[217px] md:h-[750px] bg-cover bg-center flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: "url('/images/about/slide.webp')" }}
  >
    {/* Header */}
    <Header />

    {/* Hero Text */}
    <div className="flex justify-center text-center px-4 md:px-0 w-full mt-6 md:mt-10 z-10">
      <h1 className="text-[16px] md:text-[66px] font-semibold text-white leading-[20px] md:leading-[normal]">
        Your Gateway To Luxury Living
      </h1>
    </div>
  </section>
      {/* About Content */}
<section className="relative bg-slate-900 text-white w-full overflow-visible">
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

  {/* Gradient Overlays */}
  <div className="pointer-events-none absolute top-[-100px] left-0 w-full h-[100px] z-20 bg-gradient-to-t from-black/90 to-transparent" />
  <div className="absolute -bottom-[40px] left-0 w-full h-[40px] bg-gradient-to-b from-black/60 via-white/10 to-transparent" />

  <div className="relative z-10">
    {/* Heading */}
    <div className="text-center pt-6 pb-6 md:pt-12 md:pb-8">
      <div className="flex items-center justify-center w-full">
        <div
          className="flex-1 h-[2px] md:h-[3px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffffff 0%, #ffffff 70%, rgba(255, 255, 255, 0.5) 85%, transparent 100%)",
          }}
        />
        <div className="px-4 md:px-12">
          <h2 className="text-[24px] md:text-[36px] font-semibold mb-2 md:mb-3 text-white">
            About Us
          </h2>
          <p className="text-sm md:text-[36px] font-normal text-white">
            Guiding Your Home
          </p>
        </div>
        <div
          className="flex-1 h-[2px] md:h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 15%, #ffffff 30%, #ffffff 100%)",
          }}
        />
      </div>
    </div>

    {/* Content Blocks */}
    <div className="pt-8 pb-10 md:pt-12 md:pb-20 px-4 md:px-14 lg:px-24">
      <div className="space-y-10 md:space-y-14 w-full">

        {/* Our Company - Left */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-start">
          <div className="w-[90%] md:w-[480px] self-start md:self-auto space-y-3 md:space-y-4 text-left">
            <h3 className="text-[18px] md:text-[36px] font-semibold text-white mb-3 md:mb-6">
              Our Company
            </h3>
            <p className="text-[14px] md:text-[18px] leading-relaxed font-inter text-white">
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

        {/* Our Team - Right */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-end md:justify-end">
          <div className="w-[90%] md:w-[480px] self-end md:self-auto space-y-3 md:space-y-4 text-left">
            <h3 className="text-[18px] md:text-[36px] font-semibold text-white mb-3 md:mb-6">
              Our Team
            </h3>
            <p className="text-[14px] md:text-[18px] leading-relaxed font-inter text-white">
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

        {/* Our Approach - Left */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-start">
          <div className="w-[90%] md:w-[480px] self-start md:self-auto space-y-3 md:space-y-4 text-left">
            <h3 className="text-[18px] md:text-[36px] font-semibold text-white mb-3 md:mb-6">
              Our Approach
            </h3>
            <p className="text-[14px] md:text-[18px] leading-relaxed font-inter text-white">
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

        {/* Our Commitments - Right */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-end md:justify-end">
          <div className="w-[90%] md:w-[480px] self-end md:self-auto space-y-3 md:space-y-4 text-left">
            <h3 className="text-[18px] md:text-[36px] font-semibold text-white mb-3 md:mb-6">
              Our Commitments
            </h3>
            <p className="text-[14px] md:text-[18px] leading-relaxed font-inter text-white">
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

<section className="relative h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center mt-10 md:mt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
  <div className="relative w-full max-w-6xl h-full overflow-hidden rounded-lg shadow-xl">
    {/* Background Image */}
    <Image
      src="images/about/contact.png"
      alt="Contact background"
      fill
      className="object-cover object-center z-0"
      priority
    />
    {/* Content Container */}
    <div className="relative z-20 text-white text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1200px] mx-auto pt-8 sm:pt-12 md:pt-20">
      {/*
        H2 Font Size:
        - text-base for mobile (even smaller).
        - sm:text-[28px], md:text-[32px], lg:text-[36px] preserve desktop font sizes.
      */}
      <h2 className="text-base sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-tight mb-4 md:mb-6">
        Your Dream Home Is Just A Step Away Let
        <br />
        Mystic Haven Realty Guide You
      </h2>

      <Link
        href="/contact"
        // Button Font Size: text-xs for mobile (already smallest, maintaining this).
        // md:text-base preserves desktop button font size.
        className="inline-block px-8 py-2 md:px-16 md:py-3 bg-[#5E2D4F] text-white rounded-[10px] font-bold shadow-md hover:bg-[#4a1f3d] transition-colors text-xs md:text-base"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>
{/* Explore Projects Section */}
<section className="bg-white py-10 md:py-20 px-4 md:px-8 lg:px-12">
  <div className="max-w-[1200px] mx-auto text-center px-4 md:px-6 lg:px-8">
    <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-[#1c1c1c] mb-4">
      Explore New Off Plan Project
    </h2>
    <p className="mx-auto text-black text-[14px] md:text-[20px] lg:text-[24px] font-normal leading-relaxed mb-8 md:mb-10 max-w-[1005px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
      pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus sit
      amet molestie quis, tempor congue quam.
    </p>

    <div className="bg-white py-6 px-3 md:py-16 md:px-8 rounded-xl shadow-md w-full max-w-[1400px] mx-auto"> {/* Reduced py- from 8 to 6 and px- from 4 to 3 for mobile */}
      {/*
        Image Grid: grid-cols-4 for mobile, lg:grid-cols-4 for desktop.
        Gap: Reduced to gap-1 for mobile (even tighter), sm:gap-8 for desktop.
      */}
      <div className="grid grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-8 place-items-center">
        {/*
          Individual Images:
          - w-[60px] h-[60px] for mobile (even smaller).
          - sm:w-[245px] sm:h-[245px] preserves your original desktop image size.
        */}
        <img src="/images/about/1.png" alt="..." className="w-[60px] h-[60px] sm:w-[245px] sm:h-[245px] object-cover rounded-xl" />
        <img src="/images/about/2.png" alt="..." className="w-[60px] h-[60px] sm:w-[245px] sm:h-[245px] object-cover rounded-xl" />
        <img src="/images/about/3.png" alt="..." className="w-[60px] h-[60px] sm:w-[245px] sm:h-[245px] object-cover rounded-xl" />
        <img src="/images/about/4.png" alt="..." className="w-[60px] h-[60px] sm:w-[245px] sm:h-[245px] object-cover rounded-xl" />
      </div>
    </div>
  </div>
</section>
      <Footer/>
    </div>
  )
}
