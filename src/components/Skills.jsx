import React from 'react';
import { skillsData, skillCategories } from '../data';

// 1. Asset Imports
import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import javascript from '../assets/svg/javascript.svg';
import react from '../assets/svg/react.svg';
import tailwind from '../assets/svg/tailwind.svg';
import vitejs from '../assets/svg/vitejs.svg';
import firebase from '../assets/svg/firebase.svg';
import bootstrap from '../assets/svg/bootstrap.svg';

// 2. Icon Dictionary Mapping
const skillIcons = {
    html: html,
    css: css,
    javascript: javascript,
    react: react,
    tailwind: tailwind,
    vitejs: vitejs,
    firebase: firebase,
    bootstrap: bootstrap,
};

// 3. Sub-component to render individual icons safely
function SkillIcon({ skill }) {
    const skillID = skill.toLowerCase();
    const icon = skillIcons[skillID];

    if (!icon) {
        return (
            <div className="flex h-full w-full items-center justify-center text-center font-bold">
                {skill.toUpperCase()}
            </div>
        );
    }

    return <img src={icon} alt={skill} className="pointer-events-none h-12.5" />;
}

// 4. Main Skills Component — icon marquee + categorized progress bars, one file
function Skills() {
    return (
        <div id="skills" className="flex flex-col items-center justify-start px-8 bg-[#faf7f2] text-[#1a1a1a]">
            {/* --- Marquee section --- */}
            <div className="flex items-center justify-center">
                <h2 className="text-center text-5xl font-bold font-['Dancing_Script']">Skills</h2>
            </div>

            <div className="mt-10 w-full overflow-hidden">
                <div className="group w-full overflow-hidden">
                    <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused]">
                        {/* Render the list twice back-to-back so the loop is seamless */}
                        {skillsData.map((skill, id) => (
                            <div
                                key={`a-${id}`}
                                className="mx-6 flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-xl bg-neutral-50 p-6 shadow-[0px_10px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out hover:scale-[1.15]"
                            >
                                <SkillIcon skill={skill} />
                                <h3 className="mt-4 text-center text-lg font-medium text-neutral-800">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                        {skillsData.map((skill, id) => (
                            <div
                                key={`b-${id}`}
                                className="mx-6 flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-xl bg-neutral-50 p-6 shadow-[0px_10px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out hover:scale-[1.15]"
                            >
                                <SkillIcon skill={skill} />
                                <h3 className="mt-4 text-center text-lg font-medium text-neutral-800">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Progress bar section --- */}
            <div className="mt-13 w-full max-w-6xl">
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-2 font-['Dancing_Script']">
                        Skills Breakdown
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="flex flex-col h-full">
                            <h4 className="text-xs font-bold text-[#9a9a9a] uppercase tracking-wider mb-6 border-b border-[#e5ddd0] pb-1">
                                {category.title}
                            </h4>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="w-full">
                                        <div className="flex justify-between items-center text-sm mb-2">
                                            <span className="font-semibold text-[#3a3a3a]">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-[#9a9a9a] font-mono">
                                                {skill.percentage}
                                            </span>
                                        </div>

                                        <div className="w-full bg-[#e5ddd0] h-1.5 rounded-full overflow-hidden">
                                            <div
                                                className="bg-[#d9552c] h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: skill.percentage }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;