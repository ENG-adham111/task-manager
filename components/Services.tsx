
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { WebsiteIcon, LandingPageIcon, StoreIcon, AIIcon, PortfolioIcon, GymIcon, CheckIcon } from './icons/ServiceIcons';
import type { Service, PricingPlan } from '../types';

const translations = {
    sectionTitle: { en: 'My Services', ar: 'خدماتي' },
    sectionSubtitle: { en: 'Crafting digital experiences that perform and impress.', ar: 'صياغة تجارب رقمية تتميز بالأداء والإبهار.' },
    pricingTitle: { en: 'Flexible Pricing', ar: 'أسعار مرنة' },
    popular: { en: 'Most Popular', ar: 'الأكثر شيوعاً' },
    choosePlan: { en: 'Choose Plan', ar: 'اختر الخطة' }
};

const services: Service[] = [
  { icon: <WebsiteIcon />, title: { en: 'Website Development', ar: 'تطوير المواقع' }, description: { en: 'Full-cycle website development from scratch.', ar: 'تطوير مواقع الويب من الصفر بشكل كامل.' } },
  { icon: <LandingPageIcon />, title: { en: 'Landing Pages', ar: 'صفحات الهبوط' }, description: { en: 'High-converting pages for your campaigns.', ar: 'صفحات عالية التحويل لحملاتك الإعلانية.' } },
  { icon: <StoreIcon />, title: { en: 'Online Store Creation', ar: 'إنشاء متاجر إلكترونية' }, description: { en: 'Feature-rich e-commerce solutions.', ar: 'حلول تجارة إلكترونية غنية بالميزات.' } },
  { icon: <AIIcon />, title: { en: 'AI Website Automation', ar: 'أتمتة المواقع بالذكاء الاصطناعي' }, description: { en: 'Integrate AI for smarter web functionality.', ar: 'دمج الذكاء الاصطناعي لوظائف ويب أكثر ذكاءً.' } },
  { icon: <PortfolioIcon />, title: { en: 'Portfolio Websites', ar: 'مواقع البورتفوليو' }, description: { en: 'Showcase your work with a stunning portfolio.', ar: 'اعرض أعمالك ببورتفوليو مذهل.' } },
  { icon: <GymIcon />, title: { en: 'Gym Management Systems', ar: 'أنظمة إدارة الجيم' }, description: { en: 'Custom systems for managing gym operations.', ar: 'أنظمة مخصصة لإدارة عمليات الصالات الرياضية.' } },
];

const pricingPlans: PricingPlan[] = [
  {
    name: { en: 'Basic Plan', ar: 'الخطة الأساسية' },
    price: '800 EGP',
    features: {
      en: ['1-3 Pages Website', 'Responsive Design', 'Basic SEO', '1 Week Delivery'],
      ar: ['موقع من 1-3 صفحات', 'تصميم متجاوب', 'تهيئة أساسية لمحركات البحث', 'تسليم خلال أسبوع']
    },
    isPopular: false,
  },
  {
    name: { en: 'Pro Plan', ar: 'الخطة المتقدمة' },
    price: '1500 EGP',
    features: {
      en: ['Up to 10 Pages', 'Advanced Animations', 'E-commerce Ready', 'Content Management System'],
      ar: ['موقع حتى 10 صفحات', 'حركات متقدمة', 'جاهز للتجارة الإلكترونية', 'نظام إدارة محتوى']
    },
    isPopular: true,
  },
];

const Services: React.FC = () => {
    const { language } = useAppContext();
    const lang = language as 'en' | 'ar';

    return (
        <section id="services" className="py-20 md:py-32 bg-slate-100 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">{translations.sectionTitle[lang]}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{translations.sectionSubtitle[lang]}</p>
                    <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mt-4 rounded"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className="inline-block p-4 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{service.title[lang]}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{service.description[lang]}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">{translations.pricingTitle[lang]}</h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`w-full max-w-sm bg-light-card dark:bg-dark-card rounded-lg shadow-lg p-8 transition-transform duration-300 ${plan.isPopular ? 'border-2 border-primary-light dark:border-primary-dark transform scale-105' : 'border border-transparent'}`}>
                            {plan.isPopular && <div className="text-center text-sm font-bold bg-primary-light text-white py-1 px-4 rounded-full -mt-12 mb-6 inline-block">{translations.popular[lang]}</div>}
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center">{plan.name[lang]}</h3>
                            <div className="text-4xl font-extrabold text-center my-6 text-slate-900 dark:text-white">{plan.price}</div>
                            <ul className={`space-y-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                {plan.features[lang].map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckIcon className={`w-5 h-5 ${lang === 'ar' ? 'ml-3' : 'mr-3'} text-green-500`} />
                                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full mt-8 py-3 px-6 font-semibold rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-primary-light text-white hover:bg-indigo-700' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
                                {translations.choosePlan[lang]}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
