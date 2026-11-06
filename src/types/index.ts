
export interface NavigationItem {
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
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
}

export interface Skill {
  name: string;
  category: string;
}
