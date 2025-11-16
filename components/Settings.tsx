import React from 'react';
import Card from './ui/Card';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from './icons';

const Settings: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className="animate-fade-in-up">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Settings</h1>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">Customize your ProTask experience.</p>
      </header>

      <div className="space-y-6 max-w-2xl">
        <Card>
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>
            <div className="flex items-center justify-between">
                <p>Theme</p>
                <div className="flex items-center space-x-2 bg-light-bg-secondary dark:bg-dark-bg p-1 rounded-full">
                    <button
                        onClick={() => theme !== 'light' && toggleTheme()}
                        className={`p-2 rounded-full ${theme === 'light' ? 'bg-white text-primary shadow' : 'text-dark-text-secondary'}`}
                    >
                        <SunIcon className="w-5 h-5"/>
                    </button>
                    <button
                        onClick={() => theme !== 'dark' && toggleTheme()}
                        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-dark-bg-secondary text-primary shadow' : 'text-dark-text-secondary'}`}
                    >
                        <MoonIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </Card>
         <Card>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="flex items-center justify-between">
                <p>Enable Desktop Notifications</p>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">(Coming Soon)</p>
            </div>
        </Card>
         <Card>
            <h2 className="text-xl font-semibold mb-4">Data</h2>
            <div className="flex items-center justify-between">
                <p>Cloud Sync</p>
                 <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">(Coming Soon)</p>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
