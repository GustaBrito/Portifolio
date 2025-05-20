export interface Project {
  id: number;
  title: string;
  description: string;
  deployUrl: string;
  githubUrl: string;
  image: string;
  badges?: string[];
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
}

