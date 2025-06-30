"use client";

import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Hero() {
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative w-screen h-[217px] md:h-[750px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/property/slide2.webp')" }}
      >
        <Header />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-0 pt-10 md:pt-4">
          <p className="text-[16px] md:text-[24px] font-normal mb-0.5 md:mb-2">
            Mystic Heaven Reality
          </p>
          <h1 className="text-[16px] md:text-[48px] font-normal mb-1 md:mb-6">
            View Properties
          </h1>
        </div>

        {/* HavenAI + View Properties Map */}
        <div className="relative z-30 flex flex-col items-center -mt-8 md:-mt-24">
          <div className="flex items-center justify-center rounded-t-[10px] shadow-md w-[132px] h-[35px] md:w-[247px] md:h-[65px]">
            <button
              onClick={() => router.push("/haven-ai")}
              className="text-[#5E2D4F] bg-white text-[10px] md:text-[20px] font-semibold flex items-center justify-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-t-[5px] w-full h-full"
            >
              HavenAI
              <img
                src="/images/property/ai.png"
                alt="AI Icon"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </button>
          </div>

          <button
            onClick={() => router.push("/map")}
            className="bg-[#5E2D4F] text-white rounded-[10px] text-[11px] md:text-[24px] font-semibold flex items-center justify-center gap-2 w-[282px] h-[41px] md:w-[450px] md:h-[77px] mt-0"
          >
            <img
              src="/images/property/map.png"
              alt="Map Icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            View Properties Map
          </button>
        </div>
      </section>

      {/* Recently Searched Section */}
      <section className="bg-black px-4 md:px-20 py-4 md:py-10 font-poppins">
        <h2 className="text-white text-[15px] md:text-[36px] font-normal mb-4 md:mb-8 mt-12 md:mt-14">
          Recently Searched
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 !pb-0 mb-0">
          {[...Array(6)].map((_, index) => (
            <div
              key={`recently-searched-${index}`}
              className="bg-white rounded-[4px] md:rounded-xl w-full h-[223px] md:w-[381px] md:h-[468px] shadow-md overflow-hidden flex flex-col"
            >
              <div className="w-full h-[100px] md:h-[252px] relative">
                <img
                  src={`/images/property/${(index % 4) + 1}.png`}
                  alt={`Recently Searched Property ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-2 flex flex-col justify-between flex-1 px-3 md:p-4 md:px-8">
                <div>
                  <p className="text-[12px] text-black mb-0 md:text-[17px] md:mb-1">
                    124 Main Ad
                  </p>
                  <p className="text-[10px] text-black mb-1 md:text-[17px] md:mb-10">
                    New York, New York, NY
                  </p>

                  <div className="flex justify-between px-0 mt-6 md:mt-0 mb-2 md:mb-1">
                    <p className="text-[12px] font-semibold text-black md:text-[17px]">
                      $300000
                    </p>
                    <p className="text-[12px] font-semibold text-black md:text-[17px]">
                      Villa
                    </p>
                  </div>
                </div>

                {/* View Details Buttons (with routing) */}
                <button
                  onClick={() => router.push("/view-details")}
                  className="bg-[#5E2D4F] text-white text-[10px] font-medium rounded-[94px] mt-1 mb-2 block md:hidden w-[113px] h-[22px] mx-auto"
                >
                  View Details
                </button>
                <button
                  onClick={() => router.push("/view-details")}
                  className="bg-[#5E2D4F] text-white text-[16px] font-medium rounded-[94px] mt-2 hidden md:block w-full h-[47px]"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section className="bg-black px-4 md:px-20 pt-0 md:pt-0 pb-4 md:pb-6 font-poppins">
        <h2 className="text-white text-[15px] md:text-[36px] font-normal mb-4 md:mb-8 mt-0 md:mt-0">
          Recommended
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-0 pb-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={`recommended-${index}`}
              className="bg-white rounded-[4px] md:rounded-xl w-full h-[223px] md:w-[381px] md:h-[468px] shadow-md overflow-hidden flex flex-col"
            >
              <div className="w-full h-[100px] md:h-[252px] relative">
                <img
                  src={`/images/property/${(index % 4) + 1}.png`}
                  alt={`Recommended Property ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-2 flex flex-col justify-between flex-1 px-3 md:p-4 md:px-8">
                <div>
                  <p className="text-[12px] text-black mb-0 md:text-[17px] md:mb-1">
                    124 Main Ad
                  </p>
                  <p className="text-[10px] text-black mb-1 md:text-[17px] md:mb-10">
                    New York, New York, NY
                  </p>

                  <div className="flex justify-between px-0 mt-6 md:mt-0 mb-2 md:mb-1">
                    <p className="text-[12px] font-semibold text-black md:text-[17px]">
                      $300000
                    </p>
                    <p className="text-[12px] font-semibold text-black md:text-[17px]">
                      Villa
                    </p>
                  </div>
                </div>

                {/* View Details Buttons (with routing) */}
                <button
                  onClick={() => router.push("/view-details")}
                  className="bg-[#5E2D4F] text-white text-[10px] font-medium rounded-[94px] mt-1 mb-2 block md:hidden w-[113px] h-[22px] mx-auto"
                >
                  View Details
                </button>
                <button
                  onClick={() => router.push("/view-details")}
                  className="bg-[#5E2D4F] text-white text-[16px] font-medium rounded-[94px] mt-2 hidden md:block w-full h-[47px]"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
