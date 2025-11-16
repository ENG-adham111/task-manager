import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Button from './ui/Button';
import AuthModal from './AuthModal';
import { SunIcon, MoonIcon, ShieldCheckIcon, ChevronDownIcon, LogOutIcon, DashboardIcon, TargetIcon, TrophyIcon } from './icons';

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon className="w-5 h-5" /> },
    { id: 'labs', label: 'Labs', icon: <TargetIcon className="w-5 h-5" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <TrophyIcon className="w-5 h-5" /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm border-b border-gray-200 dark:border-dark-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2" onClick={() => user && setCurrentPage('dashboard')}>
                <ShieldCheckIcon className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-light-text dark:text-dark-text tracking-tight">SafeHack Labs</span>
              </a>
              {user && (
                 <nav className="hidden md:flex md:items-center md:space-x-4">
                    {navItems.map(item => (
                        <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id ? 'text-primary bg-primary/10' : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-primary'}`}>
                           {item.icon}
                           <span className="ml-2">{item.label}</span>
                        </button>
                    ))}
                 </nav>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-dark-border"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5"/> : <MoonIcon className="w-5 h-5"/>}
              </button>
              {user ? (
                <div className="relative" ref={profileRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2">
                    <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full border-2 border-primary" />
                    <span className="hidden sm:inline text-sm font-medium">{user.name}</span>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProfileOpen && (
                     <div className="absolute right-0 mt-2 w-48 bg-light-card dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-md shadow-lg py-1 animate-fade-in">
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-dark-border">
                            <p className="text-sm font-semibold">{user.name}</p>
                            <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{user.points} points</p>
                        </div>
                       <button
                         onClick={logout}
                         className="w-full text-left px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border flex items-center"
                       >
                         <LogOutIcon className="w-4 h-4 mr-2" />
                         Logout
                       </button>
                     </div>
                  )}
                </div>
              ) : (
                <Button variant="primary" size="sm" onClick={() => setIsAuthModalOpen(true)}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;
