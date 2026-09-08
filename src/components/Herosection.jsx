import React from "react";
import { heroContent, techStack } from "../data.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import webDeveloperAnimation from "../assets/web-developer.json";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full bg-[#faf7f2] text-[#1a1a1a] flex flex-col justify-center px-4 sm:px-6 md:px-0 py-8 sm:py-10 md:py-16 font-sans selection:bg-[#d9552c] selection:text-white"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Mobile-only compact animation, shown above text for visual anchor */}
        <div className="flex lg:hidden justify-center items-center w-40 h-40 sm:w-56 sm:h-56 mx-auto order-first">
          <DotLottieReact
            data={webDeveloperAnimation}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 sm:mb-5 leading-[1.05] font-['Dancing_Script']">
            {heroContent.name}
          </h1>

          <p className="text-base sm:text-xl md:text-2xl font-semibold leading-snug text-[#3a3a3a] mb-3 sm:mb-5 max-w-xl font-['Dancing_Script']">
            {heroContent.tagline}
          </p>

          <p className="text-[#6b6b6b] text-sm sm:text-base max-w-md leading-relaxed mb-6 sm:mb-9 font-['Dancing_Script']">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
            <a
              href="/my-cv.pdf"
              download="My_CV.pdf"
              className="w-full sm:w-auto text-center bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-[11px] sm:text-xs uppercase tracking-widest px-5 py-2.5 sm:px-7 sm:py-3.5 rounded transition-all duration-300 block"
            >
              {heroContent.secondaryCta}
            </a>
            <a
              href="#projects"
              className="font-bold text-[11px] sm:text-xs uppercase tracking-widest text-[#1a1a1a] border-b-2 border-[#1a1a1a] hover:border-[#d9552c] hover:text-[#d9552c] pb-1 transition-colors duration-300"
            >
              {heroContent.primaryCta}
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-5 mt-6 sm:mt-10">
            <a
              href="https://github.com/ch-iqra-ashraf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#181717] hover:opacity-70 transition-opacity duration-300"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/iqraashraf-webdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0A66C2] hover:opacity-70 transition-opacity duration-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:iqraaashraf97@gmail.com"
              aria-label="Email"
              className="text-[#D93025] hover:opacity-70 transition-opacity duration-300"
            >
              <MailIcon />
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