"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

export default function ContactPage() {
    return (
        <div className="font-poppins bg-white text-black" style={{ overflow: 'hidden' }}>
            {/* Hero Section */}
            <section className="relative w-screen h-[750px] flex items-center justify-center overflow-hidden sm:h-[400px]">
                {/* Optimized Background Image */}
                <Image
                    src="/images/contact/slide.webp"
                    alt="Contact Slide"
                    fill
                    priority
                    quality={70}
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Header */}
                <Header />

                {/* Hero Text */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 md:px-0 w-full h-full pt-30 sm:pt-16 sm:px-2">
                    <h1 className="text-[54px] md:text-5xl font-medium mb-6 text-white max-w-[871px] leading-[1] sm:text-[28px] sm:mb-3 sm:max-w-[300px]">
                        <span>Where Finding Home Feels like</span>
                        <span className="mt-4 block sm:mt-2">Destiny</span>
                    </h1>

                    <button className="w-[282px] h-[50px] mt-2 text-white rounded-[100px] bg-[#F627B4] text-[20px] font-medium transition sm:w-[180px] sm:h-[40px] sm:text-[14px] sm:mt-1">
                        Let's Connect
                    </button>
                </div>
            </section>
            {/* Contact Page Content from PDF */}
            <section
                className="w-full h-auto md:h-[940px] mx-auto px-6 md:px-12 relative sm:h-[600px]"
                style={{
                    backgroundImage: "url('/images/contact/contact.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                {/* Horizontal Lines & Heading Wrapper - positioned absolutely, spanning full width of the SECTION */}
                <div className="absolute top-10 md:top-16 left-0 right-0 z-10 sm:top-6">
                    <div className="flex items-center justify-center">
                        <img src="/images/contact/left.png" alt="Line Left" className="flex-grow h-[4px]" />
                        <h2 className="text-[36px] md:text-4xl font-semibold text-white px-4 whitespace-nowrap relative z-10 sm:text-[20px]">
                            Contact Us
                        </h2>
                        <img src="/images/contact/right.png" alt="Line Right" className="flex-grow h-[4px]" />
                    </div>
                </div>

                {/* It retains its own padding and max-width for content alignment */}
                <div className="relative z-10 pt-[80px] md:pt-[120px] pb-16 md:pb-32 w-full max-w-[1133px] mx-auto px-2 md:px-2 sm:pt-[40px] sm:pb-8 sm:px-1">
                    <p className="text-center text-[24px] text-white mt-4 font-normal sm:text-[14px] sm:mt-2">
                        Get in touch with Mystic Haven Realty. We're here to help you find your dream home or the perfect investment property.
                    </p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-14 sm:grid-cols-1 sm:gap-2 sm:pt-2">
                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent border border-[#CED4DA] px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px] sm:h-[35px] sm:px-2"
                        />
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px] sm:h-[35px] sm:px-2"
                        />
                        {/* Mobile Input */}
                        <input
                            type="tel"
                            placeholder="Mobile"
                            className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px] sm:h-[35px] sm:px-2"
                        />
                        {/* Location Input */}
                        <input
                            type="text"
                            placeholder="Location"
                            className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[50px] sm:h-[35px] sm:px-2"
                        />
                        {/* Message Textarea */}
                        <textarea
                            placeholder="Message"
                            className="bg-transparent border border-white px-4 py-2 rounded-md w-full md:col-span-2 text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[186px] sm:h-[100px] sm:px-2"
                        />
                        <button
                            type="submit"
                            className="bg-white mt-2 text-[#5E2D4F] text-[24px] font-bold px-6 md:px-10 rounded-md md:col-span-2 mx-auto transition w-[410px] h-[56px] sm:w-[200px] sm:h-[40px] sm:text-[16px] sm:px-3"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="text-center mt-14 md:mt-16 sm:mt-6">
                        <span className="text-white text-base md:text-[30px] inline-block w-[249px] h-[48px] sm:text-[16px] sm:w-[150px] sm:h-[30px]">Get In To Touch</span>
                        <div className="flex justify-center space-x-[29px] mt-2 md:mt-2 sm:space-x-[10px] sm:mt-1">
                            <img src="/images/contact/insta.png" alt="Instagram" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] sm:w-[30px] sm:h-[30px]" />
                            <img src="/images/contact/linkdin.png" alt="LinkedIn" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] sm:w-[30px] sm:h-[30px]" />
                            <img src="/images/contact/facebook.png" alt="Facebook" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] sm:w-[30px] sm:h-[30px]" />
                            <img src="/images/contact/message.png" alt="Email" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] sm:w-[30px] sm:h-[30px]" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}