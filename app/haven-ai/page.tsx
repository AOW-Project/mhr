"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HavenAiForm from "@/components/HavenAiForm";
import Footer from "@/components/Footer";

export default function HeavenAiPage() {
  const [headerBg, setHeaderBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > 50 ? "#5E2D4F" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Form */}
      <section
        id="hero-section"
        className="relative w-screen h-[790px] bg-cover bg-center flex items-center justify-center"
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
            <img src="/images/quote.svg" alt="Quote" className="h-[40px] w-[35px] ml-6" />
          </header>
        </div>

        {/* Centered Form */}
        <div className="z-10 w-full max-w-2xl px-4">
          <HavenAiForm />
        </div>

    
      </section>

      <Footer/>
      
    </>
  );
}
