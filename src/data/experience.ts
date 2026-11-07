
import type { Experience } from "../types";
import { images } from "./images";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Co-Founder",
    organization: "Nzuri Tech Solutions",
    period: "2025 - Present",
    description:
      "Early-stage technology venture focused on digital transformation for organizations across Uganda and Kenya.",
    highlights: [
      "Contributing to product strategy and technical planning.",
      "Supporting investor-facing documentation.",
      "Working within a five-person founding team.",
    ],
  },
  {
    id: 2,
    role: "Digital Skills Trainer",
    organization: "ANGAZA",
    period: "2025",
    description:
      "Volunteer digital skills trainer working with secondary school students in Kenya.",
    highlights: [
      "Trained over 200 students across four schools.",
      "Developed progressive lesson plans.",
      "Delivered practical computer literacy sessions.",
    ],
    image: images.angaza,
  },
  {
    id: 3,
    role: "Millennium Fellow",
    organization: "Millennium Fellowship",
    period: "2025",
    description:
      "Participated in a six-month leadership and social impact program aligned with the UN Sustainable Development Goals.",
    highlights: [
      "Developed project management skills.",
      "Practiced stakeholder engagement.",
      "Strengthened community organizing skills.",
    ],
    image: images.millennium,
  },
  {
    id: 4,
    role: "Delegate",
    organization: "German-African Young Leaders in Sustainability",
    period: "2025",
    description:
      "Collaborated with German and African peers on real-world corporate sustainability challenges.",
    highlights: [
      "Cross-cultural collaboration.",
      "Design thinking.",
      "Strategic problem solving.",
    ],
    image: images.sustainability,
  },
  {
    id: 5,
    role: "Youth Mentor",
    organization: "Educate!",
    period: "2024",
    description:
      "Volunteered to mentor secondary school students on leadership, entrepreneurship and goal setting.",
    highlights: [
      "Leadership mentoring.",
      "Entrepreneurship education.",
      "Student guidance.",
    ],
  },
  {
    id: 6,
    role: "Biology Tutor",
    organization: "CIYOTA",
    period: "2020 - 2021",
    description:
      "Provided biology tutoring to secondary school learners.",
    highlights: [
      "Conceptual understanding.",
      "Exam preparation.",
    ],
  },
];
