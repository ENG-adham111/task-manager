
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { PhoneIcon, MailIcon, WhatsAppIcon, GitHubIcon, LinkedInIcon } from './icons/ContactIcons';

const translations = {
  sectionTitle: { en: 'Contact Me', ar: 'تواصل معي' },
  sectionSubtitle: { en: 'Have a project in mind? Let\'s talk!', ar: 'هل لديك مشروع في ذهنك؟ لنتحدث!' },
  getInTouch: { en: 'Get In Touch', ar: 'ابقى على تواصل' },
  contactInfo: { en: 'Feel free to reach out to me via phone, WhatsApp, or follow me on my social media platforms.', ar: 'لا تتردد في التواصل معي عبر الهاتف أو واتساب، أو متابعتي على منصات التواصل الاجتماعي الخاصة بي.' },
  phone: { en: 'Phone', ar: 'الهاتف' },
  sendMessage: { en: 'Send a Message', ar: 'أرسل رسالة' },
  name: { en: 'Your Name', ar: 'اسمك' },
  email: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
  message: { en: 'Your Message', ar: 'رسالتك' },
  submit: { en: 'Send Message', ar: 'إرسال الرسالة' }
};

const Contact: React.FC = () => {
  const { language } = useAppContext();
  const lang = language as 'en' | 'ar';

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">{translations.sectionTitle[lang]}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{translations.sectionSubtitle[lang]}</p>
          <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-xl">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">{translations.getInTouch[lang]}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{translations.contactInfo[lang]}</p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                <a href="tel:01091569465" className={`font-semibold ${lang === 'ar' ? 'mr-4' : 'ml-4'} text-slate-700 dark:text-slate-200 hover:text-primary-light dark:hover:text-primary-dark transition-colors`}>01091569465</a>
              </div>
               <div className="flex items-center">
                <WhatsAppIcon className="w-6 h-6 text-green-500" />
                <a href="https://wa.me/201091569465" target="_blank" rel="noopener noreferrer" className={`font-semibold ${lang === 'ar' ? 'mr-4' : 'ml-4'} text-slate-700 dark:text-slate-200 hover:text-green-500 transition-colors`}>WhatsApp</a>
              </div>
            </div>

            <div className="mt-8 flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-all duration-300"><GitHubIcon /></a>
              <a href="#" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-all duration-300"><LinkedInIcon /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">{translations.sendMessage[lang]}</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">{translations.name[lang]}</label>
                <input type="text" id="name" placeholder={translations.name[lang]} className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-700 border-transparent rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none transition" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">{translations.email[lang]}</label>
                <input type="email" id="email" placeholder={translations.email[lang]} className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-700 border-transparent rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none transition" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="sr-only">{translations.message[lang]}</label>
                <textarea id="message" rows={4} placeholder={translations.message[lang]} className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-700 border-transparent rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-primary-light text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 dark:bg-primary-dark dark:hover:bg-indigo-500 transition-colors duration-300">
                {translations.submit[lang]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
