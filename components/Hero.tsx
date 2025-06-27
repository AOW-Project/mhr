"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Header from "./Header"

export default function Hero() {
  const [headerBg, setHeaderBg] = useState("transparent")
  const controls = useAnimation()

  const { ref: heroTopRef, inView: isHeroTopInView } = useInView({ threshold: 0.4 })
  const { ref: tabRef, inView: tabInView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    controls.start(tabInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 })
  }, [tabInView, controls])

  useEffect(() => {
    setHeaderBg(isHeroTopInView ? "transparent" : "#5E2D4F")
  }, [isHeroTopInView])

  return (
    <section
      id="hero-section"
      className="relative w-screen h-[300px] md:h-[670px] overflow-visible"
    >
      <Image
        src="/images/carousel/slide.webp"
        alt="Hero Image"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-center -z-10"
      />

      {/* HEADER */}
      <div
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8 transition-colors duration-500"
        style={{ backgroundColor: headerBg }}
      >
        <Header />
      </div>

      {/* TOP DETECTION MARKER */}
      <div ref={heroTopRef} className="absolute top-0 h-[1px] w-full" />

      {/* HERO TEXT */}
      <div className="absolute top-1/2 w-full transform -translate-y-1/2 z-10 flex justify-center md:justify-start px-4 md:px-20">
        <div className="text-center md:text-left">
          {/* Mobile version - smaller, but still 2 lines */}
          <div className="md:hidden">
            <h2 className="text-white text-[20px] font-Poppins font-semibold">
              Mystic Haven Realty
            </h2>
            <h1 className="text-white text-[22px] font-bold font-Poppins mt-1">
              Your Dream <span className="text-[#FF96DD]">Home</span>, Awaits
            </h1>
          </div>

          {/* Desktop version - original */}
          <div className="hidden md:block">
            <h2 className="text-white text-[40px] font-Poppins">Mystic Haven Realty</h2>
            <h1 className="text-white text-[48px] font-bold mt-2 font-Poppins">
              Your Dream <span className="text-[#FF96DD]">Home</span>, Awaits
            </h1>
          </div>
        </div>
      </div>

      {/* SIDE IMAGE STACK */}
      <div className="absolute right-4 md:right-40 top-[150px] hidden lg:flex flex-col items-center gap-2 z-10">
        <Image src="/images/carousel/1.png" alt="V1" width={100} height={120} className="rounded-md" />
        <Image src="/images/carousel/2.png" alt="V2" width={100} height={120} className="rounded-md" />
        <Image src="/images/carousel/3.png" alt="V3" width={100} height={120} className="rounded-md" />
        <span className="text-white text-sm">More</span>
      </div>

      {/* TABS + SEARCH BAR */}
<div
  ref={tabRef}
  className="absolute bottom-2 md:bottom-0 left-2 md:left-20 z-30 transform translate-y-1/2"
>
  <motion.div
    animate={controls}
    initial={{ x: -300, opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-[92vw] md:w-[650px]"
  >
    {/* TABS */}
    <div className="flex w-fit shadow-lg">
      <button className="px-4 py-2.5 md:px-12 md:py-5 text-sm md:text-base font-semibold bg-[#5E2D4F] text-white rounded-tl-lg">
        Dubai
      </button>
      <button className="px-4 py-2.5 md:px-12 md:py-5 text-sm md:text-base font-semibold bg-white text-black rounded-tr-lg">
        India
      </button>
    </div>

    {/* SEARCH BAR */}
    <div className="bg-white rounded-b-xl rounded-tr-xl shadow-2xl">
      <div className="flex items-center flex-wrap md:flex-nowrap px-2 md:px-5 py-2 md:py-5 gap-2 md:gap-3">
        <div className="flex items-center flex-grow border border-black rounded-lg px-2 md:px-4 py-1.5">
          <span className="text-gray-500 text-lg md:text-xl">
            <img
              src="/images/search.png"
              alt="Search"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </span>
          <input
            type="text"
            placeholder="Enter City , Community or Area"
            className="flex-grow px-1 md:px-2 text-sm md:text-base text-gray-800 outline-none placeholder-gray-500"
          />
        </div>
        <button className="border border-black rounded-lg px-3 md:px-5 py-2 text-sm md:text-base text-black font-medium hover:bg-gray-100 whitespace-nowrap">
          Search
        </button>
      </div>
    </div>
  </motion.div>
</div>

    </section>
  )
}
