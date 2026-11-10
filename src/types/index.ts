
export interface NavigationItem {
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  year?: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
