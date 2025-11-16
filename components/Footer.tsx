import React from 'react';
import { ShieldCheckIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-start">
          <div className="flex items-center text-sm text-light-text-secondary dark:text-dark-text-secondary">
             <ShieldCheckIcon className="w-5 h-5 mr-2 text-primary" />
            <span>© {new Date().getFullYear()} SafeHack Labs. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-sm">
            <a href="#" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors">
              Terms of Service
            </a>
             <span className="text-gray-300 dark:text-gray-600">|</span>
            <a href="#" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors">
              Ethical Use Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
