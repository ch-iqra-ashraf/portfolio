import React, { useState, useEffect } from "react";
import { projectsData } from "../data.js";

// Single project card
function ProjectCard({ project, onOpen }) {
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

        <button
          onClick={() => onOpen(project)}
          className="mt-auto w-full text-center bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded transition-all duration-300"
        >
          Click More
        </button>
      </div>
    </div>
  );
}

// Modal showing full project detail
function ProjectModal({ project, onClose }) {
  // Close on Escape key + lock background scroll — but only while a
  // project is actually selected, since this component is always
  // mounted (with project = null) even when the modal is closed.
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#faf7f2] rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#1a1a1a] text-white hover:bg-[#d9552c] transition-colors duration-300"
        >
          <span className="text-lg leading-none">&times;</span>
        </button>

        {/* Image */}
        <div className="w-full h-40 sm:h-48 overflow-hidden rounded-t-2xl bg-[#f0ebe1]">
          <img
            src={project.imageUrl}
            alt={project.name}
            draggable="false"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a1a1a] mb-3">
            {project.name}
          </h2>

          <p className="text-[#3a3a3a] text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <h4 className="text-xs font-bold text-[#9a9a9a] uppercase tracking-wider mb-2">
            Skills Used
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono uppercase tracking-wide text-[#3a3a3a] bg-white border border-[#e5ddd0] rounded px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded transition-all duration-300"
          >
            View Project &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

// Main Projects section
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="w-full bg-[#faf7f2] text-[#1a1a1a] px-4 sm:px-8 md:px-16 py-16 md:py-20 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-2 font-['Dancing-script'] ">
            Featured Projects
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}

export default Projects;
