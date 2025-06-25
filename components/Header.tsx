"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/property" },
    { name: "About Us", href: "/about" },
    { name: "For Buyers", href: "/buyers" },
    { name: "Partners", href: "/partners" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Calculate dynamic top for mobile menu based on mobile header height
  // Initial mobile header height: py-8 (32px top + 32px bottom) + 29px (logo height) = 93px
  // Scrolled mobile header height: py-4 (16px top + 16px bottom) + 29px (logo height) = 61px
  const mobileHeaderHeight = scrolled ? (16 * 2 + 29) : (32 * 2 + 29); 

  return (
    <div
      className={`fixed top-0 left-0 w-screen z-50 px-6 md:px-20 transition-all duration-500 ${
        scrolled ? "bg-[#5E2D4F]" : "bg-transparent"
      }
      // Conditional padding: py-4 for mobile when scrolled, py-8 otherwise (mobile) and always py-8 for desktop
      ${scrolled ? "py-4 md:py-8" : "py-8"}
      `}
    >
      <header className="flex justify-between items-center text-white text-[16.92px] max-w-7xl mx-auto">
        {/* Logo: Specific sizes for mobile and desktop */}
        <Image
          src="/images/mhr- logo.svg"
          alt="Logo"
          // Set mobile size as default, then override for desktop
          width={24}
          height={29}
          className="w-[24px] h-[29px] md:w-[60px] md:h-[80px]" 
          priority
        />

        {/* Desktop Nav - hidden in mobile */}
        <nav className="hidden md:flex items-center">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <div className="px-3">
                <Link href={item.href} className="relative">
                  <span className={pathname === item.href ? "text-white " : ""}>
                    {pathname === item.href ? "▸" : ""} {item.name}
                  </span>
                </Link>
              </div>
              {index < navItems.length - 1 && (
                <span className="h-4 border-l border-white mx-1" />
              )}
            </div>
          ))}
        </nav>

        {/* Right: Quote on desktop, hamburger on mobile */}
        <div className="flex items-center">
          <Image
            src="/images/quote.svg"
            alt="Quote"
            width={35}
            height={40}
            className="ml-6 hidden md:block"
          />
          <button
            className="md:hidden text-white ml-4"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden fixed left-0 w-full bg-[#5E2D4F] z-40 transition-all duration-500"
             style={{ top: `${mobileHeaderHeight}px` }} // Dynamically adjust top based on mobileHeaderHeight
        >
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-white text-[16px] pl-4 relative ${
                  pathname === item.href
                    ? "border-l-2 border-white"
                    : "pl-[14px]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}