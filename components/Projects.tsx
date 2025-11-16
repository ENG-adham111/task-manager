import React from 'react';
import { useAppContext } from '../context/AppContext';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons/GeneralIcons';

const translations = {
  sectionTitle: { en: 'My Projects', ar: 'مشاريعي' },
  sectionSubtitle: { en: 'A selection of my recent work.', ar: 'مجموعة من أعمالي الأخيرة.' },
  livePreview: { en: 'Live Preview', ar: 'معاينة مباشرة' }
};

const projects: Project[] = [
  {
    title: { en: 'Gym Management System', ar: 'نظام إدارة جيم' },
    description: { en: 'A comprehensive system for managing memberships, classes, and staff.', ar: 'نظام شامل لإدارة العضويات، الفصول الدراسية، والموظفين.' },
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Dashboard'],
    link: '#',
  },
  {
    title: { en: 'AI-Powered Website', ar: 'موقع مدعوم بالذكاء الاصطناعي' },
    description: { en: 'A smart website that personalizes user experience using AI.', ar: 'موقع ذكي يقوم بتخصيص تجربة المستخدم باستخدام الذكاء الاصطناعي.' },
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    tags: ['AI', 'React', 'Next.js'],
    link: '#',
  },
  {
    title: { en: 'Modern Portfolio Site', ar: 'موقع بورتفوليو عصري' },
    description: { en: 'A sleek and animated portfolio to showcase creative work.', ar: 'بورتفوليو أنيق ومتحرك لعرض الأعمال الإبداعية.' },
    imageUrl: 'https://images.unsplash.com/photo-1559028006-44a3a5f031d8?q=80&w=1935&auto=format&fit=crop',
    tags: ['React', 'Framer Motion', 'UI/UX'],
    link: '#',
  },
  {
    title: { en: 'Business Landing Page', ar: 'صفحة هبوط لشركة' },
    description: { en: 'A high-converting landing page designed for a marketing campaign.', ar: 'صفحة هبوط عالية التحويل مصممة لحملة تسويقية.' },
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    tags: ['HTML', 'Tailwind CSS', 'Marketing'],
    link: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { language } = useAppContext();
  const lang = language as 'en' | 'ar';

  return (
    <div className="group rounded-lg overflow-hidden bg-light-card dark:bg-dark-card shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title[lang]} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{project.title[lang]}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 h-16">{project.description[lang]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary-light dark:text-primary-dark hover:underline">
          {translations.livePreview[lang]}
          <ExternalLinkIcon className={`w-4 h-4 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`} />
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { language } = useAppContext();
  const lang = language as 'en' | 'ar';

  return (
    <section id="projects" className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">{translations.sectionTitle[lang]}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{translations.sectionSubtitle[lang]}</p>
          <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(p => <ProjectCard key={p.title.en} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;