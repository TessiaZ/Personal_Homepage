import type { SiteMode } from '@/types';

export const siteConfig = {
  mode: 'hybrid' as SiteMode,
  language: 'zh-CN' as const,
  darkMode: true,
  showBlog: true,
  showPublications: true,
  showExperience: true,
  showSkills: true,
  showContact: true,
  projectFilter: true,
  analytics: false,
  siteUrl: 'https://example.github.io',
  title: 'Teresa Zhang · AI Research & Engineering',
  description: 'A bilingual academic portfolio for research, engineering, and thoughtful AI products.'
};

export const visualConfig = {
  style: 'editorial-playful' as const,
  accentPalette: 'academic-green' as const,
  heroStyle: 'collage' as 'portrait' | 'collage' | 'illustration',
  sectionLayout: 'asymmetric' as const,
  cardStyle: 'editorial' as const,
  showDecorations: true,
  showPersonalLookbook: true,
  animation: {
    enabled: true,
    intensity: 'medium' as const,
    textReveal: true,
    imageReveal: true,
    cardTilt: true,
    parallax: true,
    marquee: true,
    floatingShapes: true,
    journeyPath: true,
    pageTransition: true
  }
};

export const modeSections = {
  academic: ['research', 'publications', 'projects', 'education', 'experience'],
  career: ['projects', 'experience', 'skills', 'resume', 'contact'],
  hybrid: ['about', 'projects', 'research', 'experience', 'blog']
} satisfies Record<SiteMode, string[]>;
