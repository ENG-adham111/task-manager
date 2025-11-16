
import React from 'react';
import { useAppContext } from '../context/AppContext';

const translations = {
    title: {
        en: "ADHAM AHMED – Front-End Web Developer",
        ar: "ادهم احمد – مطور واجهات أمامية"
    },
    subtitle: {
        en: "I build stunning, fast, and modern websites using the latest web technologies.",
        ar: "أقوم ببناء مواقع ويب مذهلة وسريعة وحديثة باستخدام أحدث تقنيات الويب."
    },
    hireMe: {
        en: "Hire Me",
        ar: "وظفني"
    },
    viewProjects: {
        en: "View Projects",
        ar: "شاهد المشاريع"
    }
};

const Hero: React.FC = () => {
    const { language } = useAppContext();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
             <div className="absolute inset-0 bg-light-bg dark:bg-dark-bg bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
             <div className="absolute inset-0 bg-radial-gradient from-transparent to-light-bg dark:to-dark-bg"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-purple-500 dark:from-primary-dark dark:to-purple-400">
                           {translations.title[language as 'en' | 'ar']}
                        </span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {translations.subtitle[language as 'en' | 'ar']}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3 bg-primary-light text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 dark:bg-primary-dark dark:hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
                        >
                            {translations.hireMe[language as 'en' | 'ar']}
                        </a>
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3 bg-light-card dark:bg-dark-card text-slate-700 dark:text-slate-200 font-semibold rounded-lg shadow-md hover:bg-slate-200 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-300"
                        >
                            {translations.viewProjects[language as 'en' | 'ar']}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
