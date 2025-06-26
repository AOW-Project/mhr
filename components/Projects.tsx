"use client";

import { useState } from "react";

const projects = [
  { title: "Title ", image: "/images/projects/1.png" },
  { title: "Title ", image: "/images/projects/2.png" },
  { title: "Title ", image: "/images/projects/3.png" },
  { title: "Title ", image: "/images/projects/4.png" },
  { title: "Title ", image: "/images/projects/5.png" },
];

function ProjectCard({
  title,
  image,
  isCenter,
}: {
  title: string;
  image: string;
  isCenter?: boolean;
}) {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg shrink-0 transition-all duration-300
     ${isCenter
      ? "w-[220px] scale-100 opacity-100 z-10"
      : "w-[160px] scale-75 opacity-40 z-0"}

       bg-white md:w-[379px] md:h-[475px]`}
    >
      <div
        className={`h-[160px] md:h-[250px] w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-3 md:px-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-[14px] md:text-[32px] font-semibold text-black font-poppins">
            {title}
          </h3>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-[11px] h-[11px] md:w-4 md:h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[10px] md:text-[16px] font-poppins">Location</span>
          </div>
        </div>
        <p className="text-[12px] md:text-[20px] text-black font-semibold mb-1 font-poppins">
          Price
        </p>
        <p className="text-[10px] md:text-[13px] text-black leading-normal font-light font-poppins w-full md:w-[338px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1); // Center start

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const getCard = (offset: number) => {
    const index =
      (currentIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  return (
    <section className="pt-16 md:pt-32 pb-8 md:pb-20 bg-[#000000]">
      <div className="w-full">
        {/* Header Line */}
        <div className="relative flex items-center justify-center mb-4">
          <div
            className="w-full h-[5px] absolute top-1/2 transform -translate-y-1/2"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #ffffff 0%,
                  #ffffff 5%,
                  rgba(255, 255, 255, 0.8) 10%,
                  rgba(255, 255, 255, 0.5) 20%,
                  rgba(255, 255, 255, 0.2) 30%,
                  transparent 40%,
                  transparent 50%,
                  transparent 60%,
                  rgba(255, 255, 255, 0.2) 70%,
                  rgba(255, 255, 255, 0.5) 80%,
                  rgba(255, 255, 255, 0.8) 90%,
                  #ffffff 95%,
                  #ffffff 100%
                )
              `,
            }}
          />
          <div className="relative z-10 bg-[#000000] px-4 md:px-8">
            <h2 className="text-[20px] md:text-[40px] font-semibold text-center text-[#FFAE6A] font-poppins whitespace-nowrap">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[13px] md:text-[20px] text-white text-center font-normal font-poppins mb-10 md:mb-16 px-4">
          Showcasing The Best Deal Of Mystic Heavcen Realty
        </p>

        {/* MOBILE layout with 3 visible cards */}
      <div className="block md:hidden w-full flex justify-center items-center gap-1">
          <ProjectCard {...getCard(-1)} />
          <ProjectCard {...getCard(0)} isCenter />
          <ProjectCard {...getCard(1)} />
        </div>

        {/* DESKTOP grid (unchanged) */}
        <div className="hidden md:block max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-3 gap-2">
            {projects.slice(0, 3).map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                image={project.image}
                isCenter
              />
            ))}
          </div>
        </div>

        {/* Navigation - Mobile Only */}
        <div className="mt-6 flex justify-center items-center gap-4 md:hidden text-white text-[12px] font-poppins">
          <button onClick={prevSlide}>&lt;</button>
          <span className="font-medium">
            {currentIndex + 1} | {projects.length}
          </span>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  );
}
