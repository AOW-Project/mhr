"use client"

function ProjectCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-[379px] h-auto md:h-[475px]">
      <div
        className="h-[200px] md:h-[235px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 md:px-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[18px] md:text-[32px] text-black font-poppins">
            {title}
          </h3>
          <div className="flex items-center text-gray-600">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[12px] md:text-[16px] font-poppins">Location</span>
          </div>
        </div>
        <p className="text-black text-[14px] md:text-[20px] font-semibold mb-2 font-poppins">Price</p>
        <p className="text-[11px] md:text-[13px] text-black leading-relaxed font-light font-poppins text-left w-full md:w-[338px] h-[100px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
}


export default function Projects() {
  return (
    <section className="py-32 pb-20 bg-[#000000]">
      <div className="w-full ">
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
      ></div>

          <div className="relative z-10 bg-[#000000] px-8">
            <h2 className="text-[40px] font-semibold opacity-100 text-center text-[#FFAE6A] whitespace-nowrap font-poppins">
              Featured Projects
            </h2>
          </div>
        </div>
        <p className="text-center text-white mb-16 text-[20px] font-normal font-poppins">
          Showcasing The Best Deal Of Mystic Haven Realty
        </p>
         <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <ProjectCard title="Title" image="/images/projects/1.png" />
            <ProjectCard title="Title" image="/images/projects/2.png" />
            <ProjectCard title="Title" image="/images/projects/3.png" />
          </div>
          </div>
      </div>
    </section>
  )
}



