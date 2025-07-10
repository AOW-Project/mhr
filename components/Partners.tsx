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

  {/* Mobile View */}
  {/* ✅ Responsive Full-width stats section */}
<div className="block md:hidden w-full px-4">
  <div className="bg-[#5E2D4F] flex flex-row justify-between items-center px-4 py-3 mb-4 rounded-lg w-full">
    <div className="text-center">
      <h3 className="text-[10px] font-normal text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Successful Projects
      </h3>
      <p className="text-sm font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        1000+
      </p>
    </div>
    <div className="text-center">
      <h3 className="text-[10px] font-normal text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Happy Clients
      </h3>
      <p className="text-sm font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        5000+
      </p>
    </div>
    <div className="text-center">
      <h3 className="text-[10px] font-normal text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Properties Sold
      </h3>
      <p className="text-sm font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        10000+
      </p>
    </div>
  </div>

    {/* Title and Description */}
    <div className="px-4 mb-4 text-center">
      <h1 className="text-[24px] font-bold text-[#5E2D4F] mb-4" style={{
        fontWeight: "700",
        textShadow: "1px 1px 4px #D4B8CC, 0 4px 10px rgba(0, 0, 0, 0.1)",
        color: "#5E2D4F",
      }}>
        Mystic Haven Realty
      </h1>
      <p className="text-[14px] font-normal text-black leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
        Mystic Haven Realty is a trusted channel partner, helping buyers find apartments, villas, and luxury homes
        from top developers like Sobha, Akada, Damac, and Nakheel. We make property buying easy, transparent, and
        hassle-free by offering expert guidance and exclusive access to premium real estate.
      </p>
    </div>

    {/* Property Grid */}
    <section className="px-4 md:px-12 mb-4">
      <div className="grid grid-cols-2 gap-[12px] w-full mx-auto">
        <div className="grid gap-[12px]">
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[158/89] w-full">
            <img src="/images/partners/1.png" alt="Property 1" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[158/95] w-full">
            <img src="/images/partners/2.png" alt="Property 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid gap-[12px]">
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[158/56] w-full">
            <img src="/images/partners/3.png" alt="Property 3" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[158/130] w-full">
            <img src="/images/partners/4.png" alt="Property 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Our Partners */}
    <section className="text-center px-4 mt-4 mb-2">
      <h2 className="text-[20px] font-semibold text-black mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
        Our Partners
      </h2>
      <img src="/images/partners/Frame 4.png" alt="Partners" className="w-full h-[100px] object-contain" />
    </section>

    {/* Consultation Form */}
    <section className="px-4">
      <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <h3 className="text-[18px] font-bold text-black mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Get Consultation
        </h3>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required className="w-full h-[40px] border border-black rounded-[10px] p-2 text-[13px] placeholder-gray-500" style={{ fontFamily: "Poppins, sans-serif" }} />
          <input type="email" name="email" placeholder="Email" required className="w-full h-[40px] border border-black rounded-[10px] p-2 text-[13px] placeholder-gray-500" style={{ fontFamily: "Poppins, sans-serif" }} />
          <input type="tel" name="mobile1" placeholder="Mobile" required className="w-full h-[40px] border border-black rounded-[10px] p-2 text-[13px] placeholder-gray-500" style={{ fontFamily: "Poppins, sans-serif" }} />
          <input type="tel" name="mobile2" placeholder="Alternate Mobile" required className="w-full h-[40px] border border-black rounded-[10px] p-2 text-[13px] placeholder-gray-500" style={{ fontFamily: "Poppins, sans-serif" }} />
          <textarea name="message" placeholder="Message" className="w-full h-[80px] border border-black rounded-[10px] p-2 text-[13px] resize-none placeholder-gray-500" style={{ fontFamily: "Poppins, sans-serif" }} />
          <button type="submit" className="w-full bg-[#5E2D4F] text-white py-2 px-4 rounded-full text-[13px] font-medium hover:bg-[#4A2340] transition-all" style={{ fontFamily: "Poppins, sans-serif" }}>
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>

      {/* Desktop Version Below (Unchanged) */}
        <div className="hidden md:block">
      <section className="bg-white text-black py-8">
        <div className="flex flex-col md:flex-row items-center max-w-[1200px] mx-auto gap-6 md:gap-16 min-h-[323px] px-4">
          <div className="hidden md:flex flex-shrink-0 w-[280px] h-[321px] justify-center items-center">
            <img
              src="/images/partners/mhr.png"
              alt="Mystic Haven Realty Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-grow flex flex-col justify-center items-center text-center w-full">
            <h1
              className="text-[30px] md:text-[40px] font-bold mb-4 md:mb-6 text-[#5E2D4F] font-poppins text-center relative z-10"
              style={{
                fontWeight: "700",
                textShadow: "1px 1px 4px #D4B8CC, 0 4px 10px rgba(0, 0, 0, 0.1)",
                color: "#5E2D4F",
              }}
            >
              Mystic Haven Realty
            </h1>

            <p className="text-[16px] md:text-[20px] font-normal leading-relaxed mb-4 md:mb-6 text-black font-Poppins text-center">
              Mystic Haven Realty is a trusted channel partner, helping buyers find apartments, villas, and luxury homes
              from top developers like Sobha, Akada, Damac, and Nakheel. We make property buying easy, transparent, and
              hassle-free by offering expert guidance and exclusive access to premium real estate
            </p>
            <div className="bg-[#5E2D4F] flex flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-lg w-full md:w-[90%] min-h-[130px] gap-4">
              <div className="text-center flex-1">
                <h3 className="text-[14px] md:text-[15px] font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Successful Projects
                </h3>
                <p className="text-[18px] md:text-[21px] font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  1000+
                </p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-[14px] md:text-[15px] font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Happy Clients
                </h3>
                <p className="text-[18px] md:text-[21px] font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  5000+
                </p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-[14px] md:text-[15px] font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Properties Sold
                </h3>
                <p className="text-[18px] md:text-[21px] font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  10000+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[100px]">
            <div className="grid gap-4" style={{ gridTemplateRows: "1fr 1fr" }}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/partners/1.png" alt="Modern Apartment" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/partners/2.png" alt="Waterfront Buildings" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid gap-4" style={{ gridTemplateRows: "1fr 2fr" }}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/partners/3.png" alt="Dubai City Skyline" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/partners/4.png" alt="Modern Entrance" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pt-8 pb-2 text-center bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-black mb-4 md:mb-0" style={{ fontFamily: "Poppins, sans-serif" }}>
            Our Partners
          </h2>
          <div className="flex justify-center mx-auto overflow-hidden">
            <img
              src="/images/partners/Frame 4.png"
              alt="Partner Logos"
              className="w-full md:w-[1200px] h-auto md:h-[180px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Consultation and Contact Section */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 md:h-[450px]">
            <div className="md:col-span-2">
              <div className="bg-white w-full md:w-[95%] rounded-lg shadow-md border border-gray-200 p-4 flex flex-col h-full">
                <img src="/images/partners/map (1).png" alt="Location Map" className="w-full h-[220px] object-cover rounded-lg mb-4" />
                <h3 className="text-[24px] md:text-[32px] font-semibold text-[#5E2D4F] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Title
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <img src="/images/partners/map.png" alt="Location" className="w-4 h-4 mt-0.5" />
                    <div className="text-[14px] md:text-[16px] font-medium text-[#404040]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Address
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/partners/call.png" alt="Phone" className="w-4 h-4" />
                    <span className="text-[14px] md:text-[16px] text-[#404040]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      12345 - 67890
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/partners/mes.png" alt="Email" className="w-4 h-4" />
                    <span className="text-[14px] md:text-[16px] text-[#404040]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Mail
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 h-full p-4 md:p-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Get Consultation
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full md:w-[320px] h-[50px] md:h-[61px] border border-black rounded-[10px] p-3 text-[16px] md:text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full md:w-[320px] h-[50px] md:h-[61px] border border-black rounded-[10px] p-3 text-[16px] md:text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <input
                      type="tel"
                      name="mobile1"
                      placeholder="Mobile"
                      required
                      className="w-full md:w-[300px] h-[50px] md:h-[61px] border border-black rounded-[10px] p-3 text-[16px] md:text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                    <input
                      type="tel"
                      name="mobile2"
                      placeholder="Alternate Mobile"
                      required
                      className="w-full md:w-[300px] h-[50px] md:h-[61px] border border-black rounded-[10px] p-3 text-[16px] md:text-[20px] placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full md:w-[320px] h-[100px] md:h-[130px] border border-black rounded-[10px] p-3 text-[16px] md:text-[20px] resize-none placeholder-gray-500 focus:ring-1 focus:ring-[#5E2D4F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div className="pt-4 md:pt-8">
                  <button
                    type="submit"
                    className="w-full bg-[#5E2D4F] text-white py-3 px-6 rounded-full text-[16px] md:text-[20px] font-medium hover:bg-[#4A2340] transition-all"
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
</div>
  )
}

