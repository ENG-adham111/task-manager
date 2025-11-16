
import React from 'react';
import { useAppContext } from '../context/AppContext';

const translations = {
  copyright: {
    en: "© 2025. All Rights Reserved.",
    ar: "© 2025. جميع الحقوق محفوظة."
  },
  developedBy: {
    en: "Developed by ADHAM AHMED",
    ar: "تم التطوير بواسطة ادهم احمد"
  }
};

const Footer: React.FC = () => {
  const { language } = useAppContext();
  const lang = language as 'en' | 'ar';

  return (
    <footer className="bg-dark-bg text-slate-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-start">
          <p className="text-sm">
            {translations.copyright[lang]}
          </p>
          <p className="text-sm mt-2 sm:mt-0">
            {translations.developedBy[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
