import Image from "next/image"

const Footer = () => {
  return (
   <footer className="bg-[#5E2D4F] text-white w-full font-poppins text-base pt-8 pb-8 px-8 md:px-12 lg:px-16 md:pt-12 sm:pt-10">
     {/* ^^^^^ Changed from pt-16 to pt-8 for mobile */}

     <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:gap-x-12 gap-y-6">
       {/* Column 1 */}
       <div className="flex flex-col basis-1/4 min-w-0 items-start">
         <Image
           src="/images/mhr- logo.svg"
           alt="Mystic Heaven Realty Logo"
           width={35}
           height={35}
           className="mb-3 sm:mb-2 md:w-[70px] md:h-[80.5px]"
         />
         <h4 className="font-medium text-sm mb-2 leading-tight sm:text-base md:text-lg md:mb-3">
               Company Info
             </h4>
         <ul className="space-y-0.5 text-gray-200 text-xs md:text-base md:space-y-1">
           <li>About Mystic Haven Realty</li>
           <li>Our Mission</li>
           <li>Trusted Channel Partner</li>
         </ul>
       </div>

       {/* Column 2 */}
       <div className="flex flex-col basis-1/6 min-w-0 items-start">
         <h4 className="font-medium text-sm mb-2 leading-tight sm:text-base md:text-lg md:mb-3">Quick Links</h4>
         <ul className="space-y-0.5 text-gray-200 text-xs md:text-base md:space-y-1">
           <li>Home</li>
           <li>Properties</li>
           <li>About Us</li>
           <li>For Buyers</li>
           <li>Partners</li>
           <li>Contact Us</li>
         </ul>
       </div>

       {/* Column 3 */}
       <div className="flex flex-col basis-1/4 min-w-0 items-start">
         <h4 className="font-medium text-sm mb-2 leading-tight sm:text-base md:text-lg md:mb-3">Contact Information</h4>
         <div className="space-y-0.5 text-gray-200 text-xs md:text-base md:space-y-1">
           <p>Office Address : [Your Address Here]</p>
           <p>Phone: [Your Number]</p>
           <p>Email: [Your Email]</p>
         </div>
       </div>

       {/* Column 4 */}
       <div className="flex flex-col basis-1/4 min-w-0 items-start">
         <h4 className="font-medium text-sm mb-2 leading-tight sm:text-base md:text-lg md:mb-3">Follow Us</h4>
         <p className="text-gray-200 text-xs md:text-base">Facebook | Instagram | LinkedIn | Twitter</p>
       </div>
     </div>

     <p className="text-center mt-8 pt-8 text-xs text-gray-300 md:mt-8 md:pt-3 sm:mt-4 sm:pt-2 md:text-sm">
       © 2025 Mystic Haven Realty. All Rights Reserved.
     </p>
   </footer>
  )
}

export default Footer