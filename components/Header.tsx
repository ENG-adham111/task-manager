
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';

const translations = {
    about: { en: 'About', ar: 'عني' },
    services: { en: 'Services', ar: 'الخدمات' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    contact: { en: 'Contact', ar: 'تواصل معي' }
};

const Header: React.FC = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext();

  const navLinks = [
    { href: '#about', key: 'about' },
    { href: '#services', key: 'services' },
    { href: '#projects', key: 'projects' },
    { href: '#contact', key: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md shadow-slate-900/5 dark:shadow-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary-light dark:text-primary-dark tracking-wider">
              {language === 'ar' ? 'ادهم احمد' : 'Adham Ahmed'}
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.key} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300 font-medium">
                {translations[link.key][language as 'en' | 'ar']}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-semibold border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Language"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-card"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
