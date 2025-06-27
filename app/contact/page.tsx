"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"


export default function ContactPage() {
    return (
        <div className="font-poppins bg-white text-black" style={{ overflow: 'hidden' }}>
            {/* Hero Section */}
            <section className="relative w-screen h-[250px] md:h-[750px] flex items-center justify-center overflow-hidden">
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
                {/*
                    - `pt-4`: Moves the entire text block slightly up on mobile (reduced from pt-10).
                    - `md:pt-[120px]`: Ensures desktop padding remains unchanged.
                */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 md:px-0 w-full h-full pt-4 md:pt-[120px]">
                    {/*
                        - `mb-2`: Adds a small bottom margin (8px) for mobile between the headline and the button.
                        - `md:mb-6`: Ensures desktop margin remains unchanged.
                    */}
                    <h1 className="text-[14px] md:text-5xl font-medium mb-2 md:mb-6 text-white max-w-full md:max-w-[871px] leading-tight md:leading-[1]">
                        <span>Where Finding Home Feels like</span>
                        <span className="mt-0 md:mt-4 block">Destiny</span>
                    </h1>

                    {/*
                        - `mt-2`: Reintroduces a small top margin (8px) for mobile on the button itself.
                        - `md:mt-2`: Ensures desktop margin remains unchanged (as it was originally mt-2).
                    */}
                    <button className="w-[105px] h-[26px] mt-2 md:mt-2 text-white rounded-[100px] bg-[#F627B4] text-[11px] md:text-[20px] font-medium transition md:w-[282px] md:h-[50px]">
                        Let's Connect
                    </button>
                </div>
            </section>

            {/* Contact Page Content from PDF */}
        <section
            className="w-full h-auto md:h-[940px] mx-auto px-6 md:px-12 relative " // Main section with responsive height and padding
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
                    {/* H2 Heading: Set to 14px for mobile, desktop unchanged at 36px */}
                    <h2 className="text-[14px] md:text-[36px] font-semibold text-white px-4 whitespace-nowrap relative z-10 ">
                        Contact Us
                    </h2>
                    <img src="/images/contact/right.png" alt="Line Right" className="flex-grow h-[4px]" />
                </div>
            </div>

            {/* Content Container - retains its own padding and max-width for content alignment */}
            <div className="relative z-10 pt-[80px] md:pt-[120px] pb-16 md:pb-32 w-full max-w-[1133px] mx-auto px-2 md:px-2">
                {/* Intro Paragraph: Set to 11px for mobile, desktop unchanged at 24px. Top margin reduced for mobile. */}
                <p className="text-center text-[11px] md:text-[24px] text-white mt-2 md:mt-4 font-normal">
                    Get in touch with Mystic Haven Realty. We're here to help you find your dream home or the perfect investment property.
                </p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-14">
                    {/* Input Fields: Height reduced for mobile, desktop unchanged at 50px. Font size set to 11px for mobile, default 16px for desktop */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-transparent border border-[#CED4DA] px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[40px] md:h-[50px] text-[11px] md:text-base"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[40px] md:h-[50px] text-[11px] md:text-base"
                    />
                    <input
                        type="tel"
                        placeholder="Mobile"
                        className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[40px] md:h-[50px] text-[11px] md:text-base"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        className="bg-transparent border border-white px-4 rounded-md w-full text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[40px] md:h-[50px] text-[11px] md:text-base"
                    />
                    {/* Message Textarea: Height reduced for mobile, desktop unchanged at 186px. Font size set to 11px for mobile, default 16px for desktop */}
                    <textarea
                        placeholder="Message"
                        className="bg-transparent border border-white px-4 py-2 rounded-md w-full md:col-span-2 text-white placeholder-white focus:outline-none focus:border-[#5E2D4F] h-[120px] md:h-[186px] text-[11px] md:text-base"
                    />
                    {/* Submit Button: Dimensions reduced for mobile, desktop unchanged. Font size set to 14px for mobile */}
                    <button
                        type="submit"
                        className="bg-white mt-2 text-[#5E2D4F] font-bold px-6 md:px-10 rounded-md md:col-span-2 mx-auto transition w-11/12 md:w-[410px] h-[48px] md:h-[56px] text-[14px] md:text-[24px]"
                    >
                        Submit
                    </button>
                </form>
                {/* Reduce top margin of this div for mobile to decrease space below submit button */}
                <div className="text-center mt-8 md:mt-16">
                    {/* "Get In To Touch" Text: Auto width/height for mobile, desktop unchanged. Font size is already 16px for mobile (text-base) */}
                    <span className="text-white text-base md:text-[30px] inline-block w-auto h-auto md:w-[249px] md:h-[48px]">Get In To Touch</span>
                    {/* Social Icons: Reduced width/height to 34px for mobile, desktop unchanged at 70px */}
                    <div className="flex justify-center space-x-4 md:space-x-[29px] mt-2 md:mt-2">
                        <img src="/images/contact/insta.png" alt="Instagram" className="w-[34px] h-[34px] md:w-[70px] md:h-[70px]" />
                        <img src="/images/contact/linkdin.png" alt="LinkedIn" className="w-[34px] h-[34px] md:w-[70px] md:h-[70px]" />
                        <img src="/images/contact/facebook.png" alt="Facebook" className="w-[34px] h-[34px] md:w-[70px] md:h-[70px]" />
                        <img src="/images/contact/message.png" alt="Email" className="w-[34px] h-[34px] md:w-[70px] md:h-[70px]" />
                    </div>
                </div>
            </div>
        </section>
            <Footer />
        </div>
    );
}
