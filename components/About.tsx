import React from 'react';
import { useAppContext } from '../context/AppContext';
import { CodeIcon } from './icons/GeneralIcons';

const translations = {
  sectionTitle: { en: 'About Me', ar: 'عني' },
  bio: {
    en: "A passionate Front-End Developer with a knack for creating dynamic, user-friendly web applications. I thrive on turning complex problems into beautiful, intuitive interfaces. My expertise lies in the modern JavaScript ecosystem, particularly with React, and I'm always eager to learn and adapt to new technologies to deliver the best possible results.",
    ar: "مطور واجهات أمامية شغوف ولدي موهبة في إنشاء تطبيقات ويب ديناميكية وسهلة الاستخدام. أزدهر في تحويل المشاكل المعقدة إلى واجهات جميلة وبديهية. تكمن خبرتي في النظام البيئي الحديث لجافاسكريبت، خاصة مع React، وأنا دائمًا حريص على التعلم والتكيف مع التقنيات الجديدة لتقديم أفضل النتائج الممكنة."
  },
  skillsTitle: { en: 'My Skills', ar: 'مهاراتي' }
};

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript', 'AI Web Builders'];

const About: React.FC = () => {
  const { language } = useAppContext();

  return (
    <section id="about" className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
            {translations.sectionTitle[language as 'en' | 'ar']}
          </h2>
          <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-purple-500 rounded-full blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1634902379024-338a6a655995?q=80&w=1887&auto=format&fit=crop"
                alt="Adham Ahmed"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-light-card dark:border-dark-card"
              />
            </div>
          </div>
          <div className="lg:col-span-3 text-center lg:text-start rtl:lg:text-right">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {translations.bio[language as 'en' | 'ar']}
            </p>
            <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
              {translations.skillsTitle[language as 'en' | 'ar']}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center bg-slate-200 dark:bg-dark-card text-slate-700 dark:text-slate-200 rounded-full px-4 py-2 text-sm font-medium">
                  <CodeIcon className="w-4 h-4 me-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;