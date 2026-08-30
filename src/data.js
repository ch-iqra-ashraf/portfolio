import { CssIcon, HtmlIcon, JsIcon, ReactIcon, TailwindIcon } from './components/Icons.jsx';


export const heroContent = {
  eyebrow: 'Frontend Developer',
  name: 'Iqra Ashraf',
  tagline: 'Specializing in React.js & modern web applications',
  description:
    'Results-driven frontend developer with hands-on experience building responsive, performance-optimized, and visually appealing web applications.',
  primaryCta: 'View My Work',
  secondaryCta: 'Download CV \u2192',
  techStackLabel: 'Tech Stack',

};

export const techStack = [
  { name: 'HTML5', Component: HtmlIcon },
  { name: 'CSS3', Component: CssIcon },
  { name: 'JavaScript', Component: JsIcon },
  { name: 'React', Component: ReactIcon },
  { name: 'Tailwind', Component: TailwindIcon },
];

export const aboutMeContent = {
  heading: 'About Me',
  paragraphs: [
    'Frontend Developer with hands-on experience designing and shipping responsive, high-performance web applications across e-commerce, media, and utility platforms.',
    'I build interactive UIs with React.js and React Query — integrating RESTful APIs, managing async state, and translating UI/UX designs into clean, maintainable code — while collaborating with design and development teams to deliver accessible, production-ready digital products.',
  ],
  stats: [
    { value: '5', label: 'Months Internship' },
    { value: '10+', label: 'Projects Completed' },
  ],
  techFocus: {
    title: 'Tech-Focused',
    description: 'Dedicated to modern frontend architectures.',
  },
};

export const skillCategories = [
  {
    title: 'Frontend Core',
    skills: [
      { name: 'JavaScript (ES6+)', percentage: '90%' },
      { name: 'React.js & React Query', percentage: '80%' },
      { name: 'RESTful API Integration', percentage: '80%' },
    ],
  },
  {
    title: 'Styling & UI',
    skills: [
      { name: 'Tailwind CSS', percentage: '90%' },
      { name: 'Hero UI Library', percentage: '80%' },
      { name: 'Responsive Design', percentage: '95%' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', percentage: '85%' },
      { name: 'VS Code & DevTools', percentage: '90%' },
      { name: 'NPM & JSON handling', percentage: '80%' },
    ],
  },
];
 


export const skillsData = [
    'HTML',
    'CSS',
    'Tailwind',
    'ViteJS',
    'Javascript',
    'React',
    'Firebase',
]
