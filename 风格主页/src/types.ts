export type Locale = 'zh' | 'en';
export type SiteMode = 'academic' | 'career' | 'hybrid';
export type LocalizedText = { zh: string; en: string };
export type LinkSet = { github?: string; demo?: string; paper?: string; doi?: string; project?: string };

export interface Project {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  year: number;
  type: 'AI Engineering' | 'Research' | 'Product' | 'Course Project' | 'Open Source';
  role: LocalizedText;
  tags: string[];
  featured: boolean;
  cover: string;
  links: LinkSet;
  sections: Array<{ title: LocalizedText; body: LocalizedText }>;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'Published' | 'Accepted' | 'Under Review' | 'Preprint' | 'In Preparation';
  summary: LocalizedText;
  contribution: LocalizedText;
  links: LinkSet;
}

export interface Experience {
  organization: LocalizedText;
  role: LocalizedText;
  period: string;
  location: LocalizedText;
  category: 'Research Experience' | 'Internship Experience' | 'Product Experience' | 'Campus Experience' | 'Leadership & Activities';
  context: LocalizedText;
  achievements: LocalizedText[];
  skills: string[];
}

export interface Post {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  category: 'Research Notes' | 'Engineering' | 'AI Product' | 'Learning Journey';
  tags: string[];
  readingTime: number;
  content: LocalizedText;
}
