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
      className="relative w-screen h-[670px] bg-cover bg-center overflow-visible"
      style={{ backgroundImage: "url('/images/carousel/slide.png')" }}
    >
      {/* HEADER */}
      <div
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8 transition-colors duration-500"
        style={{ backgroundColor: headerBg }}
      >
        <Header/>
      </div>

      {/* TOP DETECTION MARKER */}
      <div ref={heroTopRef} className="absolute top-0 h-[1px] w-full" />

      {/* HERO TEXT */}
      <div className="absolute top-[48%] left-20 transform -translate-y-1/2 z-10">
        <h2 className="text-white text-[40px] font-Poppins">Mystic Haven Reality</h2>
        <h1 className="text-white text-[48px] font-bold mt-2 font-Poppins">
          Your Dream <span className="text-[#FF96DD]">Home</span>, Awaits
        </h1>
      </div>

      {/* SIDE IMAGE STACK */}
      <div className="absolute right-40 top-[150px] hidden lg:flex flex-col items-center gap-2 z-10">
        <Image src="/images/carousel/1.png" alt="V1" width={100} height={120} className="rounded-md" />
        <Image src="/images/carousel/2.png" alt="V2" width={100} height={120} className="rounded-md" />
        <Image src="/images/carousel/3.png" alt="V3" width={100} height={120} className="rounded-md" />
        <span className="text-white text-sm">More</span>
      </div>

      {/* TABS + SEARCH BAR */}
      <div ref={tabRef} className="absolute bottom-0 left-20 z-30 transform translate-y-1/2">
        <motion.div
          animate={controls}
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[650px]"
        >
          {/* TABS */}
          <div className="flex w-fit shadow-lg">
            <button className="px-12 py-5 text-base font-semibold bg-[#5E2D4F] text-white rounded-tl-lg">Dubai</button>
            <button className="px-12 py-5 text-base font-semibold bg-white text-black rounded-tr-lg">India</button>
          </div>

          {/* SEARCH BAR */}
          <div className="bg-white rounded-b-xl rounded-tr-xl shadow-2xl">
            <div className="flex items-center px-5 py-5 gap-3">
              <div className="flex items-center w-full border border-black rounded-lg px-4 py-2">
                <span className="text-gray-500 text-xl">
                  <img src="/images/search.png" alt="Search" />
                </span>
                <input
                  type="text"
                  placeholder="Enter City , Community or Area"
                  className="flex-grow px-2 text-gray-800 text-base outline-none placeholder-gray-500"
                />
              </div>
              <button className="border border-black rounded-lg px-5 py-2.5 text-base text-black font-medium hover:bg-gray-100 whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
