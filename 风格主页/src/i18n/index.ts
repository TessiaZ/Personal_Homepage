import type { Locale } from '@/types';

export const ui = {
  zh: { viewProjects: '查看项目', resume: '查看简历', contact: '联系我', selectedProjects: '精选项目', research: '研究成果', experience: '实践经历', skills: '技能领域', posts: '最近文章', all: '全部', empty: '暂时没有内容', back: '返回', readMore: '阅读详情', updated: '最后更新：2026 年 8 月' },
  en: { viewProjects: 'View projects', resume: 'View résumé', contact: 'Contact me', selectedProjects: 'Selected projects', research: 'Research', experience: 'Experience', skills: 'Skills', posts: 'Recent writing', all: 'All', empty: 'Nothing here yet', back: 'Back', readMore: 'Read more', updated: 'Last updated: August 2026' }
};

export const t = (locale: Locale) => ui[locale];
export const local = <T extends { zh: string; en: string }>(value: T, locale: Locale) => value[locale];
export const localePath = (locale: Locale, path = '') =>
  `${import.meta.env.BASE_URL}${locale}/${path}`.replace(/\/+$/, '/');
export const otherLocale = (locale: Locale): Locale => locale === 'zh' ? 'en' : 'zh';
