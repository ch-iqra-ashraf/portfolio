import React from "react";
import { projectsData } from "../data.js";
import { CodeIcon, EyeIcon } from "./Icons.jsx";

// Single project card
function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white border border-[#e5ddd0] shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(0,0,0,0.09)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden bg-[#f0ebe1]">
        <img
          src={project.imageUrl}
          alt={project.name}
          draggable="false"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
          {project.name}
        </h3>

        <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono uppercase tracking-wide text-[#9a9a9a] bg-[#faf7f2] border border-[#e5ddd0] rounded px-2 py-1"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="text-[11px] font-mono uppercase tracking-wide text-[#9a9a9a] px-2 py-1">
              +{project.skills.length - 3}
            </span>
          )}
        </div>

        {/* View + Code buttons */}
        <div className="mt-auto flex justify-between gap-6">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded transition-all duration-300"
          >
            View
            <EyeIcon />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#1a1a1a] border-b-2 border-[#1a1a1a] hover:border-[#d9552c] hover:text-[#d9552c] pb-1 transition-colors duration-300"
          >
            Code
            <CodeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

// Main Projects section
function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#faf7f2] text-[#1a1a1a] px-4 sm:px-8 md:px-16 py-16 md:py-20 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-2 font-['Dancing-script']">
            Featured Projects
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
