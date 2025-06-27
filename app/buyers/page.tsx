"use client"
import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function AboutPage() {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Hero Section */}
    <section className="relative w-screen h-[217px] md:h-[750px] bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/images/buyers/slide.webp"
        alt="Buyers Slide"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Header */}
      <Header />

      {/* Hero Text - Centered */}
      <div className="relative z-20 text-center flex flex-col items-center w-full px-4 mt-6 md:mt-6">
        <p className="text-white text-[16px] md:text-[64px] font-semibold mb-1 leading-[20px] md:leading-[normal]">
          For Buyers
        </p>
        <h1 className="text-white text-[12px] md:text-[24px] font-normal leading-[16px] md:leading-[normal]">
          Your Guide to buying your dream home
        </h1>
      </div>
    </section>

 {/* Buying Guide Section */}
<section
  className="relative w-full h-auto md:h-[1450px] bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/images/buyers/tower.png')" }}
>
  {/* Title with gradient lines */}
  <div className="absolute top-10 md:top-16 left-0 right-0 z-10">
    <div className="flex items-center justify-center px-4">
      <img src="/images/contact/left.png" alt="Line Left" className="flex-grow h-[3px] sm:h-[4px]" />
      <h2 className="text-[15px] sm:text-[20px] md:text-[36px] font-semibold text-white px-4 whitespace-nowrap relative z-10">
        Buying Guide
      </h2>
      <img src="/images/contact/right.png" alt="Line Right" className="flex-grow h-[3px] sm:h-[4px]" />
    </div>
  </div>

  {/* Step Sections */}
  <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-4 px-4 flex flex-col items-start md:block">
    {/* Step 1 */}
    <div className="relative w-full md:w-[448px] text-left p-2 mb-6 md:absolute md:left-[40px] md:top-[140px]">
      <span className="font-semibold text-[12px] sm:text-[13px] md:text-[24px] text-pink-400">
        Step 1: Define Your Requirements
      </span>
      <p className="text-[10px] sm:text-[12px] md:text-[18px] mt-2 leading-snug sm:leading-normal">
        Decide on location, budget, and property type<br />
        (apartment, villa, townhouse)<br />
        <span className="block mt-2">
          Consider future investment value and lifestyle preferences
        </span>
      </p>
    </div>

    {/* Step 2 */}
    <div className="relative w-full md:w-[448px] text-left p-2 mb-6 pl-6 sm:pl-8 md:pl-8 md:absolute md:left-[450px] md:top-[320px]">
      <span className="font-semibold text-[12px] sm:text-[13px] md:text-[24px] text-pink-400">
        Step 2: Explore Properties
      </span>
      <p className="text-[10px] sm:text-[12px] md:text-[18px] mt-2 leading-snug sm:leading-normal">
        Browse listings from top developers like Sobha, Akada, Damac, and Nakheel<br />
        <span className="block mt-2">
          Schedule property viewings with our expert real estate agents.
        </span>
      </p>
    </div>

    {/* Step 3 */}
    <div className="relative w-full md:w-[448px] text-left p-2 mb-6 pl-10 sm:pl-12 md:pl-12 md:absolute md:right-[15px] md:top-[540px]">
      <span className="font-semibold text-[12px] sm:text-[13px] md:text-[24px] text-pink-400">
        Step 3: Secure Financing
      </span>
      <p className="text-[10px] sm:text-[12px] md:text-[18px] mt-2 leading-snug sm:leading-normal">
        Choose between a bank mortgage or developer payment plans<br />
        <span className="block mt-2">
          Submit required documents for loan approval
        </span>
      </p>
    </div>

    {/* Step 4 */}
    <div className="relative w-full md:w-[448px] text-left p-2 mb-6 md:absolute md:left-[40px] md:top-[700px]">
      <span className="font-semibold text-[12px] sm:text-[13px] md:text-[24px] text-pink-400">
        Step 4: Make an Offer & Sign the Agreement
      </span>
      <p className="text-[10px] sm:text-[12px] md:text-[18px] mt-2 leading-snug sm:leading-normal">
        Negotiate price and sign a Sale Purchase Agreement (SPA)<br />
        <span className="block mt-2">
          & Pay the initial deposit (usually 5-10% of the property price)
        </span>
      </p>
    </div>

    {/* Step 5 */}
    <div className="relative w-full md:w-[448px] text-left p-2 mb-6 pl-6 sm:pl-8 md:pl-8 md:absolute md:left-[450px] md:top-[900px]">
      <span className="font-semibold text-[12px] sm:text-[13px] md:text-[24px] text-pink-400">
        Step 5: Complete Legal & Payment Processes
      </span>
      <p className="text-[10px] sm:text-[12px] md:text-[18px] mt-2 leading-snug sm:leading-normal">
        Arrange property valuation and necessary approvals<br />
        <span className="block mt-2">
          Pay the remaining amount as per the agreed plan.
        </span>
      </p>
    </div>

    {/* Step 6 */}
    <div className="relative w-full md:w-[448px] text-left p-2 pl-10 sm:pl-12 md:pl-12 md:absolute md:right-[15px] md:top-[1150px]">
      <span className="font-semibold text-[12px] sm:text-[13px] md:text-[24px] text-pink-400">
        Step 6: Property Handover & Registration
      </span>
      <p className="text-[10px] sm:text-[12px] md:text-[18px] mt-2 leading-snug sm:leading-normal">
        Coordinate final inspections and prepare documentation<br />
        <span className="block mt-2">
          Finalize ownership transfer with DLD and receive keys.
        </span>
      </p>
    </div>
  </div>
</section>


<section className="relative w-full bg-black pt-10 md:pt-16 pb-6 md:pb-16 text-white pl-3 md:pl-10">
  {/* Gradient at the Top */}
  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent z-0" />

  <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-6">
    {/* Financing Options Title */}
    <h2 className="text-[13px] md:text-[24px] font-semibold text-pink-400 mb-3 md:mb-5">
      Financing Options
    </h2>

    {/* Financing Options Content */}
    <div className="mb-4 md:mb-6 text-[11px] md:text-[20px] font-normal font-inter leading-relaxed">
      <p className="mb-2">Easy Installment Plans - Spread payments over months or years</p>
      <p className="mb-2">Post-Handover Payment Options - Pay after moving in</p>
      <p className="mb-2">Zero Interest Plans - Some properties offer 0% interest financing</p>
    </div>

    {/* Need Assistance Title */}
    <h2 className="text-[13px] md:text-[24px] font-semibold text-pink-400 mb-3 md:mb-5 mt-5 md:mt-10">
      Need Assistance?
    </h2>
    <p className="mb-4 text-[11px] md:text-[20px] font-normal font-inter leading-relaxed">
      Our experts can guide you in choosing the best financing option based on your budget and needs.
    </p>

    {/* Working with Mystic Haven Realty Title */}
    <h2 className="text-[13px] md:text-[24px] font-semibold text-pink-400 mb-3 md:mb-5 mt-5 md:mt-10">
      Working with Mystic Haven Realty
    </h2>
    <div className="mb-2 text-[11px] md:text-[20px] font-normal font-inter leading-relaxed">
      <p className="mb-2">Exclusive Listings - Access to premium properties from Sobha, Akada, Damac, and Nakheel Expert</p>
      <p className="mb-2">Seamless Process - From property selection to final purchase</p>
      <p className="mb-2">Financing Assistance - Help with mortgages and payment plans</p>
    </div>
  </div>
</section>


<Footer/>
      </div> 
)
}