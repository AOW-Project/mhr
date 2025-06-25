"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8 transition-colors duration-500 ${
        scrolled ? "bg-[#5E2D4F]" : "bg-transparent"
      }`}
    >
      <header className="flex justify-between items-center text-white text-[16.92px] max-w-7xl mx-auto">
        <Image src="/images/mhr- logo.svg" alt="Logo" width={60} height={80} priority />
        <nav className="flex space-x-6 items-center">
          <Link href="/">Home</Link>
          <span className="h-4 border-l border-white" />
          <Link href="/property">Properties</Link>
          <span className="h-4 border-l border-white" />
          <Link href="/about">▸ About Us</Link>
          <span className="h-4 border-l border-white" />
          <Link href="/buyers">For Buyers</Link>
          <span className="h-4 border-l border-white" />
          <Link href="/partners">Partners</Link>
          <span className="h-4 border-l border-white" />
          <Link href="/contact">Contact Us</Link>
        </nav>
        <Image src="/images/quote.svg" alt="Quote" width={35} height={40} className="ml-6" />
      </header>
    </div>
  )
}
