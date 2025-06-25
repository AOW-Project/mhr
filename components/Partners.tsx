"use client"

import type React from "react"
import Image from "next/image"

export default function HomePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    console.log("Form submitted:", data)
    alert("Thank you for your consultation request!")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="col-span-3 py-10 bg-white rounded-lg shadow-md border border-gray-200 h-full overflow-hidden">
      {/* Header Section */}
      <section className="bg-white text-black py-8">
        <div className="flex flex-row items-center max-w-[1200px] mx-auto gap-16 min-h-[323px]">
          <div className="flex-shrink-0 w-[280px] h-[321px] flex justify-center items-center ">
            <img
              src="/images/partners/mhr.png"
              alt="Mystic Haven Realty Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-grow flex flex-col justify-center items-center text-center w-full">
            <h1
              className="text-[40px] font-black font-bold mb-6 text-[#5E2D4F] w-full font-poppins text-center relative z-10"
              style={{
                fontWeight: "700",
                textShadow: "1px 1px 4px #D4B8CC, 0 4px 10px rgba(0, 0, 0, 0.1)",
                color: "#5E2D4F",
              }}
            >
              Mystic Haven Reality
            </h1>

            <p className="text-[20px] font-normal leading-relaxed mb-6 text-black w-full font-Poppins text-center">
              Mystic Haven Realty is a trusted channel partner, helping buyers find apartments, villas, and luxury homes
              from top developers like Sobha, Akada, Damac, and Nakheel. We make property buying easy, transparent, and
              hassle-free by offering expert guidance and exclusive access to premium real estate
            </p>
            <div className="bg-[#5E2D4F] flex justify-between items-center p-6 rounded-lg w-[90%] min-h-[130px]">
              <div className="text-center flex-1">
                <h3 className="text-[15px] font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Successful Projects
                </h3>
                <p className="text-[21px] font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  1000+
                </p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-[15px] font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Happy Clients
                </h3>
                <p className="text-[21px] font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  5000+
                </p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-[15px] font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Properties Sold
                </h3>
                <p className="text-[21px] font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  10000+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images Grid Section - FIXED WITH PROPER SPACING */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 gap-8 min-h-[100px]">
            {/* Left column - equal heights */}
            <div className="grid gap-6" style={{ gridTemplateRows: "1fr 1fr" }}>
              {/* Top left - Modern apartment building (equal height) */}
              <div className="overflow-hidden rounded-lg shadow-lg min-h-[100px]">
                <img
                  src="/images/partners/1.png"
                  alt="Modern Apartment Building with Balconies"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom left - Waterfront buildings (equal height) */}
              <div className="overflow-hidden rounded-lg shadow-lg min-h-[100px]">
                <img
                  src="/images/partners/2.png"
                  alt="Waterfront High-rise Buildings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right column - unequal heights */}
            <div className="grid gap-8" style={{ gridTemplateRows: "1fr 2fr" }}>
              {/* Top right - City skyline (smaller height) */}
              <div className="overflow-hidden rounded-lg shadow-lg min-h-[50px]">
                <img src="/images/partners/3.png" alt="Dubai City Skyline" className="w-full h-full object-cover" />
              </div>
              {/* Bottom right - Building entrance (larger height) */}
              <div className="overflow-hidden rounded-lg shadow-lg min-h-[180px]">
                <img
                  src="/images/partners/4.png"
                  alt="Modern Building Entrance Courtyard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - REDUCED BOTTOM PADDING */}
      <section className="pt-8 pb-2 text-center bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[48px] font-semibold text-black mb-0" style={{ fontFamily: "Poppins, sans-serif" }}>
            Our Partners
          </h2>
          <div
            className="flex justify-center gap-[200px] mx-auto text-center overflow-hidden"
            style={{ maxWidth: "1500px", height: "200px" }}
          >
            <img
              src="/images/partners/Frame 4.png"
              alt="Partner Logos"
              className="w-[1200px] h-[180px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Consultation and Contact Section - EQUAL HEIGHTS */}
      <section className="pt-4 pb-16 bg-white ">
        <div className="max-w-[1200px] mx-auto ">
          <div className="grid grid-cols-5 gap-0 h-[450px]">
            {/* Left Side: Map and Contact Info - 2 columns */}
            <div className="col-span-2 flex flex-col h-full">
              <div className="col-span-2 bg-white w-[95%] rounded-lg shadow-md border border-gray-200 p-4 flex flex-col h-full ">
                <img
                  src="/images/partners/map (1).png"
                  alt="Location Map"
                  className="w-full h-[220px] object-cover rounded-lg mb-4"
                />
                <h3
                  className="text-[32px] font-semibold text-[#5E2D4F] mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Title
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <img src="/images/partners/map.png" alt="Location" className="w-4 h-4 mt-0.5" />
                    <div
                      className="text-[16px] font-medium text-[#404040]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Address
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/partners/call.png" alt="Phone" className="w-4 h-4" />
                    <span className="text-[16px] text-[#404040]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      12345 - 67890
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/partners/mes.png" alt="Email" className="w-4 h-4" />
                    <span className="text-[16px] text-[#404040]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Mail
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side: Form - 3 columns */}
            <div className="col-span-3 px-10 py-10 bg-white rounded-lg shadow-md border border-gray-200 h-full w-[700px]">
              <h3 className="text-[32px] font-bold text-black mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Get Consultation
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-[320px] h-[61px] border border-black rounded-[10px] p-3 text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-[320px] h-[61px] border border-black rounded-[10px] p-3 text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-4">
                    <input
                      type="tel"
                      name="mobile1"
                      placeholder="Mobile"
                      required
                      className="w-[300px] h-[61px] border border-black rounded-[10px] p-3 text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                    <input
                      type="tel"
                      name="mobile2"
                      placeholder="Alternate Mobile"
                      required
                      className="w-[300px] h-[61px] border border-black rounded-[10px] p-3 text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-[320px] h-[130px] border border-black rounded-[10px] p-3 text-[20px] resize-none placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full bg-[#5E2D4F] text-white py-3 px-6 rounded-full text-[20px] font-medium hover:bg-[#4A2340] transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Submit
                    </button>
                  </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
