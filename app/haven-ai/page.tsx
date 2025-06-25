"use client";


import HavenAiForm from "@/components/HavenAiForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HeavenAiPage() {
 

  return (
    <>
      {/* Hero Section with Form */}
      <section
        id="hero-section"
        className="relative w-screen h-[790px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/property/slide2.png')" }}
      >
        {/* Header */}
       <Header/>

        {/* Centered Form */}
        <div className="z-10 w-full max-w-2xl px-4">
          <HavenAiForm />
        </div>

    
      </section>

      <Footer/>
      
    </>
  );
}
