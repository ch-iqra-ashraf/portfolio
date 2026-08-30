import React from "react";
import { aboutMeContent } from "../data";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#F7F3EC] text-[#1a1a1a] p-8 md:p-12 font-sans min-h-100 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-baseline space-x-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] font-['Dancing_Script']">
              {aboutMeContent.heading}
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl">
            {aboutMeContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Stat Cards */}
          {aboutMeContent.stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center min-h-35"
            >
              <span className="text-4xl md:text-5xl font-black text-[#E2542A] mb-2">
                {value}
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                {label}
              </span>
            </div>
          ))}

          {/* Tech-Focused (Span 2 columns on desktop) */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sm:col-span-2 flex flex-col justify-center min-h-35">
            <div className="flex items-center space-x-2 text-[#E2542A] mb-3">
              <h3 className="text-lg font-bold text-[#E2542A]">
                {aboutMeContent.techFocus.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {aboutMeContent.techFocus.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
