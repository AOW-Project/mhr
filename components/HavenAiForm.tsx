'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsHouseDoor, BsGeoAlt } from 'react-icons/bs';
import { FaUsers, FaUser } from 'react-icons/fa';
import Image from 'next/image';

const steps = [
  {
    label: 'Where Do You Want To Live?',
    input: true,
    icon: <BsGeoAlt className="text-white text-lg" />,
    subLabel: 'Location',
    placeholder: "Type A City Or Area... Like 'Whitefield' Or 'Indiranagar'",
  },
  {
    label: 'What Are You Looking For?',
    options: [
      { label: 'Apartments', icon: '/images/ai/aprtment.png' },
      { label: 'Villa', icon: '/images/ai/villa.png' },
      { label: 'Commercial', icon: '/images/ai/commercial.png' },
      { label: 'Plot', icon: '/images/ai/plot.png' },
    ],
    icon: <BsHouseDoor className="text-white text-lg" />,
  },
  {
    label: 'Who’s Moving In?',
    options: [
      { label: 'Solo', icon: '/images/ai/solo.png' },
      { label: 'Couple', icon: '/images/ai/couple.png' },
      { label: 'Families', icon: '/images/ai/family.png' },
      { label: 'Elders', icon: '/images/ai/elders.png' },
    ],
    icon: <FaUsers className="text-white text-lg" />,
  },
  {
    label: 'What Fits Your Lifestyle?',
    type: 'lifestyle_tags',
    lifestyleTags: [
      'Peaceful & Green',
      'Walk To Cafes/Stores',
      'Metro Nearby',
      'Close To Good Schools',
      'Near Offices/Tech Parks',
      'Low Noise, Less Traffic',
    ],
    icon: <FaUser className="text-white text-lg" />,
  },
];

export default function HeavenAiForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [selectedDropdown, setSelectedDropdown] = useState('Low Noise, Less Traffic');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setFormData({ ...formData, [step]: option });
    setTimeout(() => {
      if (step < steps.length - 1) setStep(step + 1);
    }, 300);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0) {
      const locationInput = (e.target as any).elements.location_input.value;
      const cityAreaInput = (e.target as any).elements.city_area_input.value;
      setFormData({ ...formData, [step]: { location: locationInput, cityArea: cityAreaInput } });
    }

    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      alert('Form submitted!');
      console.log("Final Form Data:", formData);
      console.log("Selected Dropdown (Lifestyle Step):", formData[3]?.selectedDropdown);
      console.log("Selected Tags (Lifestyle Step):", formData[3]?.selectedTags);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 mt-28">
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <div className="text-center mb-6 z-10">
        <h1 className="text-[37px] md:text-4xl font-semibold text-[#FF6DD2]">
          HavenAI <span className="inline-block ml-1"><img src="/images/ai.png" alt="AI icon" /></span>
        </h1>
        <p className="text-white text-[24px] font-semibold text-base mt-2">Smart Search For Smart Living</p>
      </div>

      {steps[step] && (
        <div
          className="w-[920px] h-[550px] p-10 pb-4 rounded-xl border border-white text-white z-10 flex flex-col justify-between"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                {steps[step]?.label ?? 'Step'}
              </h2>

              {/* Progress Bar */}
              <div className="flex justify-between items-center w-full mb-10 px-10 mx-auto">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 flex-1 mx-1 rounded-full transition-all duration-300 ${
                      index <= step ? 'bg-[#B1007B]' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Step Content */}
              {steps[step].input ? (
                <form onSubmit={handleInputSubmit} className="flex flex-col items-center gap-4 mt-4">
                  <input
                    type="text"
                    name="location_input"
                    placeholder="Enter Location"
                    className="w-[770px] h-[100px] px-4 py-3 rounded-md mt-4 text-white bg-transparent border border-white placeholder-white focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="city_area_input"
                    placeholder={steps[0].placeholder}
                    className="w-[770px] h-[100px] px-4 py-3 rounded-md text-white bg-transparent border border-white placeholder-white focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#B1007B] mt-10 px-6 py-2 text-white font-semibold w-[291px] h-[56px] rounded-full"
                  >
                    Next
                  </button>
                </form>
              ) : steps[step].type === 'lifestyle_tags' ? (
                <>
                  <div className="border border-white rounded-xl p-8 mx-auto w-[700px] h-[320px] flex flex-col items-center">
                    <label className="block mb-6 text-white font-semibold text-lg">
                      Pick Up The Things That Describe Your Dream Neighborhood
                    </label>

                    <select
                      className="w-[450px] h-[50px] px-4 py-2 rounded-md text-white bg-transparent border focus:outline-none mb-6"
                      onChange={(e) => {
                        setSelectedDropdown(e.target.value);
                        setFormData({ ...formData, [step]: { ...formData[step], selectedDropdown: e.target.value } });
                      }}
                      value={selectedDropdown}
                    >
                      {steps[step].lifestyleTags?.map((tag: string) => (
                        <option key={tag} value={tag} className="text-black">
                          {tag}
                        </option>
                      ))}
                    </select>

                    <div className="grid grid-cols-3 gap-4 mb-10 w-[600px] mx-auto">
                      {steps[step].lifestyleTags?.map((tag: string) => (
                        <button
                          key={tag}
                          type="button"
                          className={`rounded-full text-white py-2 px-4 ${
                            selectedTags.includes(tag) ? 'bg-[#B1007B]' : 'bg-transparent'
                          }`}
                          onClick={() => {
                            const updatedTags = selectedTags.includes(tag)
                              ? selectedTags.filter((t: string) => t !== tag)
                              : [...selectedTags, tag];
                            setSelectedTags(updatedTags);
                            setFormData({ ...formData, [step]: { ...formData[step], selectedTags: updatedTags } });
                          }}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (step < steps.length - 1) {
                        setStep((prev) => prev + 1);
                      } else {
                        alert('Form submitted!');
                        console.log("Final Form Data:", formData);
                        console.log("Selected Dropdown (Lifestyle Step):", formData[3]?.selectedDropdown);
                        console.log("Selected Tags (Lifestyle Step):", formData[3]?.selectedTags);
                      }
                    }}
                    className="bg-[#B1007B] px-6 py-3 text-white font-semibold w-[200px] rounded-full hover:bg-pink-600 mt-8"
                  >
                    Match
                  </button>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-6 mb-10 pl-14 pt-6">
                    {steps[step].options.map(({ label, icon }: any) => (
                      <button
                        key={label}
                        onClick={() => handleOptionClick(label)}
                        className={`flex items-center w-[340px] h-[80px] border rounded-md px-4 mt-4 ${
                          formData[step] === label ? 'border-[#B1007B]' : 'border-white'
                        }`}
                      >
                        <div className="mr-4">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              formData[step] === label ? 'bg-[#B1007B] border-[#B1007B]' : 'border-white'
                            }`}
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <Image
                            src={icon}
                            alt={label}
                            className={`w-10 h-10 ${formData[step] === label ? 'filter brightness-150' : 'brightness-100'}`}
                          />
                          <span
                            className={`text-lg font-semibold ${
                              formData[step] === label ? 'text-white' : 'text-white opacity-70'
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => formData[step] && setStep(step + 1)}
                    className="bg-[#B1007B] px-6 py-2 mt-4 text-white font-semibold w-[291px] h-[56px] rounded-full hover:bg-pink-600"
                  >
                    Next
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
