import { siteConfig } from '@/config/site';

export const navigation = [
  { path: '', zh: '首页', en: 'Home' },
  { path: 'about', zh: '关于', en: 'About' },
  { path: 'projects', zh: '项目', en: 'Projects' },
  ...(siteConfig.showPublications ? [{ path: 'research', zh: '科研', en: 'Research' }] : []),
  ...(siteConfig.showExperience ? [{ path: 'experience', zh: '经历', en: 'Experience' }] : []),
  ...(siteConfig.showBlog ? [{ path: 'blog', zh: '文章', en: 'Blog' }] : []),
  { path: 'resume', zh: '简历', en: 'Resume' }
];
