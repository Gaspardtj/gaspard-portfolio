
import type { Project } from "../types";
import { images } from "./images";

export const projects: Project[] = [
  {
    id: 3,
    title: "Meditrack",
    role: "Developer",
    description: "A system that helps drug shop and pharmacy owners track sales and business data, bringing day-to-day business information into one place.",
    highlights: [],
    technologies: [],
    githubUrl: "https://github.com/Gaspardtj/meditrack",
  },
  {
    id: 1,
    title: "AgriLink",
    year: "2025",
    role: "Developer",
    description:
      "A Progressive Web App connecting Kenyan smallholder farmers directly with buyers, addressing agricultural market access and price exploitation.",
    highlights: [
      "Developed responsive React components.",
      "Integrated Supabase authentication, database and backend logic.",
      "Integrated Gemini API for AI-driven price predictions.",
      "Collaborated using Git, GitHub and GitHub Actions.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "Vercel",
      "GitHub Actions",
    ],
    // AgriLink
    image: images.agrilink,

  },
  {
    id: 2,
    title: "Library Management System",
    year: "2024",
    role: "Developer",
    description:
      "A Java desktop application designed to automate book cataloguing, member registration and borrowing records.",
    highlights: [
      "Designed and implemented the desktop application.",
      "Applied inheritance and encapsulation.",
      "Used modular object-oriented class design.",
    ],
    technologies: ["Java", "Object-Oriented Programming"],
    // Library Management System
    image: images.library,
  },
];
