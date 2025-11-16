import React from 'react';
import { DashboardIcon, TasksIcon, TimerIcon, SettingsIcon } from './icons';

type Page = 'dashboard' | 'tasks' | 'pomodoro' | 'settings';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-primary text-white'
          : 'text-dark-text-secondary hover:bg-dark-bg-secondary hover:text-dark-text'
      }`}
    >
      {icon}
      <span className="ml-4 font-semibold">{label}</span>
    </button>
  );
};


const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'tasks', label: 'Tasks', icon: <TasksIcon /> },
    { id: 'pomodoro', label: 'Pomodoro', icon: <TimerIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <aside className="w-64 bg-light-card dark:bg-dark-bg-secondary p-4 flex-shrink-0 flex flex-col shadow-lg">
      <div className="text-2xl font-bold text-primary mb-10 px-2 pt-2">
        ProTask
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={currentPage === item.id}
            onClick={() => setCurrentPage(item.id as Page)}
          />
        ))}
      </nav>
      <div className="mt-auto text-center text-xs text-light-text-secondary dark:text-dark-text-secondary">
        <p>&copy; 2024 ProTask Manager</p>
      </div>
    </aside>
  );
};

export default Sidebar;
