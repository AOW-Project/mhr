"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 100)
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

  return (
    <div
      className={`fixed top-0 left-0 w-screen z-50 px-6 md:px-20 py-8 transition-colors duration-500 ${
        scrolled ? "bg-[#5E2D4F]" : "bg-transparent"
      }`}
    >
      <header className="flex justify-between items-center text-white text-[16.92px] max-w-7xl mx-auto">
        <Image src="/images/mhr- logo.svg" alt="Logo" width={60} height={80} priority />
        <nav className="flex items-center">
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
        <Image src="/images/quote.svg" alt="Quote" width={35} height={40} className="ml-6" />
      </header>
    </div>
  )
}
