import React from "react";
import { heroContent, techStack } from "../data.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import webDeveloperAnimation from "../assets/web-developer.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full bg-[#faf7f2] text-[#1a1a1a] flex flex-col justify-center px-4 sm:px-8 sm:py-5 md:px-16 md:py-2 font-sans selection:bg-[#d9552c] selection:text-white"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-[1.05] font-['Dancing_Script']">
            {heroContent.name}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-[#3a3a3a] mb-5 max-w-xl font-['Dancing_Script']">
            {heroContent.tagline}
          </p>

          <p className="text-[#6b6b6b] text-sm sm:text-base max-w-md leading-relaxed mb-9 font-['Dancing_Script']">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded transition-all duration-300 block"
            >
              {heroContent.primaryCta}
            </a>
            <a
              href="/my-cv.pdf"
              download="My_CV.pdf"
              className="font-bold text-xs uppercase tracking-widest text-[#1a1a1a] border-b-2 border-[#1a1a1a] hover:border-[#d9552c] hover:text-[#d9552c] pb-1 transition-colors duration-300"
            >
              {heroContent.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center w-full max-w-xl aspect-square mx-auto">
          <DotLottieReact
            data={webDeveloperAnimation}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
