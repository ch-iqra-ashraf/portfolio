import { CssIcon, HtmlIcon, JsIcon, ReactIcon, TailwindIcon } from './components/Icons.jsx';
import chatWithAi from "./assets/projects/chat-with-ai.png";
import countryInfo from "./assets/projects/country-info.png";
import weatherWebsite from "./assets/projects/weather-website.png";
import calculator from "./assets/projects/calculator.png";
import rockPaperScissor from "./assets/projects/rock-paper-scissor.png";
import ticTacToe from "./assets/projects/tic-tac-toe.png";
import toDoApp from "./assets/projects/to-do-app.png";
import babyPlanetClone from "./assets/projects/baby-planet-clone.png";
import amazonClone from "./assets/projects/amazon-clone.png";
import mdstWebsite from "./assets/projects/mdst-website.png";
import vidify from "./assets/projects/vidify.png";
import currencyConvertor from "./assets/projects/currency-convertor.png";


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


export const projectsData = [
  {
    id: 1,
    name: "Chat with AI",
    description:
      "A real-time AI chat application built with React, React Query, and Firebase. Features instant messaging, cached query states for fast repeat interactions, and seamless integration with an AI backend for conversational responses.",
    skills: ["React", "React Query", "Firebase", "Tailwind CSS"],
    imageUrl: chatWithAi,
    projectUrl: "https://chat-with-ai-dun.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/chat-with-ai",
  },
  {
    id: 3,
    name: "Country Info",
    description:
      "An interactive country explorer built with React, pulling real-time data from a countries API — covering population, region, currency, and other key details in a searchable, filterable layout.",
    skills: ["React", "API Integration", "Tailwind CSS"],
    imageUrl: countryInfo,
    projectUrl: "https://country-info-xi-kohl.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/country_info",
  },
  {
    id: 4,
    name: "Weather Website",
    description:
      "A real-time weather tracking app built with React, using a weather API to display live conditions and forecasts by city, with a dynamic interface that adapts to the data returned.",
    skills: ["React", "API Integration", "Tailwind CSS"],
    imageUrl: weatherWebsite,
    projectUrl: "https://weather-react-app-gamma-black.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/weather-react-app-",
  },
  {
    id: 5,
    name: "Vidify Project",
    description:
      "A media/video discovery platform focused on clean browsing and search functionality, built with a strong emphasis on responsive layout and smooth navigation.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    imageUrl: vidify,
    projectUrl: "https://vidify-project.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/vidify-project",
  },
  {
    id: 6,
    name: "Calculator",
    description:
      "A fully functional calculator app built with React and Tailwind CSS, supporting standard arithmetic operations, keyboard input, and safe expression evaluation.",
    skills: ["React", "Tailwind CSS"],
    imageUrl: calculator,
    projectUrl: "https://calculator-react-zeta-ten.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/calculator",
  },
  
{
  id: 13,
  name: "Currency Converter",
  description: "A dynamic currency converter built with vanilla JavaScript, HTML, and Tailwind CSS, featuring real-time exchange rate fetching and a clean, responsive user interface.",
  skills: ["JavaScript", "HTML", "Tailwind CSS"],
  imageUrl: currencyConvertor,
  projectUrl: "https://currency-convertor-tan-beta.vercel.app/",
  codeUrl: "https://github.com/ch-iqra-ashraf/currency-convertor"
},



  {
    id: 7,
    name: "Rock Paper Scissor",
    description:
      "A classic Rock Paper Scissors game built with vanilla JavaScript and styled with Tailwind CSS, featuring score tracking and instant round results.",
    skills: ["JavaScript", "Tailwind CSS"],
    imageUrl: rockPaperScissor,
    projectUrl: "https://rock-paper-scissor-ashy-kappa.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/rock-paper-scissor",
  },
  {
    id: 8,
    name: "Tic Tac Toe",
    description:
      "An interactive Tic Tac Toe game built with JavaScript, featuring win/draw detection logic and a responsive Tailwind CSS interface.",
    skills: ["JavaScript", "Tailwind CSS"],
    imageUrl: ticTacToe,
    projectUrl: "https://tic-tac-toe-lake-iota.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/tic-tac-toe",
  },
  {
    id: 9,
    name: "To Do App",
    description:
      "A task management to-do app built with JavaScript, supporting task creation, completion toggling, and deletion, with a clean Tailwind CSS interface.",
    skills: ["JavaScript", "Tailwind CSS"],
    imageUrl: toDoApp,
    projectUrl: "https://to-do-app-cyan-nu.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/to-do-app",
  },
  {
    id: 10,
    name: "Baby Planet Website Clone",
    description:
      "A responsive storefront clone for a children's product brand, built with HTML and Tailwind CSS — focused on clean product grids and mobile-first layout.",
    skills: ["HTML", "Tailwind CSS"],
    imageUrl: babyPlanetClone,
    projectUrl: "https://mino-omega.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/baby-realms",
  },
  {
    id: 11,
    name: "Amazon Clone",
    description:
      "A pixel-focused clone of Amazon's storefront layout, built with HTML and Tailwind CSS as a practice project in replicating complex, high-traffic e-commerce UI.",
    skills: ["HTML", "Tailwind CSS"],
    imageUrl: amazonClone,
    projectUrl: "https://amazon-css.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/amazon-css",

  },
  {
    id: 12,
    name: "MDST Website",
    description:
      "A multi-page website for a modest fashion brand, built with React and React Router for client-side navigation, styled with Tailwind CSS for a polished, responsive experience.",
    skills: ["React", "React Router", "Tailwind CSS"],
    imageUrl: mdstWebsite,
    projectUrl: "https://mdst-react-three.vercel.app/",
    codeUrl:"https://github.com/ch-iqra-ashraf/mdst-react",
  },
];
