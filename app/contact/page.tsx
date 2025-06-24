"use client"

import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 100); // toggle at 100px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="font-poppins bg-white text-black" style={{ overflow: 'hidden' }}>
            {/* Hero Section */}
            <section
                id="hero-section"
                className="relative w-screen h-[750px] bg-cover bg-center overflow-visible"
                style={{ backgroundImage: "url('/images/contact/slide.png')" }}
            >
                {/* HEADER */}
                <div
                    className={`fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-8  ${
                        scrolled ? "bg-[#5E2D4F]" : "bg-transparent"
                    }`}
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
                            <Link href="/buyers">For Buyers</Link>
                            <span className="h-4 border-l border-white" />
                            <Link href="/partners">Partners</Link>
                            <span className="h-4 border-l border-white" />
                            <Link href="/contact">▸ Contact Us</Link>
                        </nav>
                        <img src="/images/quote.svg" alt="Quote" className="h-[40px] w-[35px] ml-6" />
                    </header>
                </div>

                {/* Hero Text */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 md:px-0 w-full h-full pt-30">
                    <h1 className="text-[54px] md:text-5xl font-medium mb-6 text-white w-[871px] text-center leading-[1] flex flex-col items-center justify-center">
                        <span>Where Finding Home Feels like</span>
                        <span className="mt-4">Destiny</span>
                    </h1>

                    <button className="w-[282px] h-[50px] mt-2 text-white rounded-[100px] bg-[#F627B4] text-[20px] font-medium transition">
                        Lets Connect
                    </button>
                </div>
            </section>

            {/* Contact Page Content from PDF */}
            <section
                className="w-full h-auto md:h-[940px] mx-auto px-6 md:px-12 relative " // Main section with its own padding
                style={{
                    backgroundImage: "url('/images/contact/contact.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                {/* Horizontal Lines & Heading Wrapper - positioned absolutely, spanning full width of the SECTION */}
                <div className="absolute top-10 md:top-16 left-0 right-0 z-10">
                    <div className="flex items-center justify-center">
                        <img src="/images/contact/left.png" alt="Line Left" className="flex-grow h-[4px]" />
                        <h2 className="text-[36px] md:text-4xl font-semibold text-white px-4 whitespace-nowrap relative z-10 ">
                            Contact Us
                        </h2>
                        <img src="/images/contact/right.png" alt="Line Right" className="flex-grow h-[4px]" />
                    </div>
                </div>

                {/* It retains its own padding and max-width for content alignment */}
                <div className="relative z-10 pt-[80px] md:pt-[120px] pb-16 md:pb-32 w-full max-w-[1133px] mx-auto px-2 md:px-2">
                    <p className="text-center text-[24px] text-white mt-4 font-normal">
                        Get in touch with Mystic Haven Realty. We're here to help you find your dream home or the perfect investment property.
                    </p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-14">
                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent  border border-[#CED4DA] px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px]"
                        />
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px]"
                        />
                        {/* Mobile Input */}
                        <input
                            type="tel"
                            placeholder="Mobile"
                            className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px]"
                        />
                        {/* Location Input */}
                        <input
                            type="text"
                            placeholder="Location"
                            className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px]"
                        />
                        {/* Message Textarea */}
                        <textarea
                            placeholder="Message"
                            className="bg-transparent border border-white px-4 py-2 rounded-md w-full md:col-span-2 text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[186px]"
                        />
                        <button
                            type="submit"
                            className="bg-white mt-2 text-[#5E2D4F] text-[24px] font-bold px-6 md:px-10 rounded-md md:col-span-2 mx-auto  transition w-[410px] h-[56px]"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="text-center mt-14 md:mt-16">
                        <span className="text-white text-base md:text-[30px] inline-block w-[249px] h-[48px]">Get In To Touch</span>
                        <div className="flex justify-center space-x-[29px] mt-2 md:mt-2">
                            <img src="/images/contact/insta.png" alt="Instagram" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />
                            <img src="/images/contact/linkdin.png" alt="LinkedIn" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />
                            <img src="/images/contact/facebook.png" alt="Facebook" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />
                            <img src="/images/contact/message.png" alt="Email" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
