import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TaskProvider } from './context/TaskContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Pomodoro from './components/Pomodoro';
import Settings from './components/Settings';
import { AddIcon } from './components/icons';
import TaskModal from './components/TaskModal';

type Page = 'dashboard' | 'tasks' | 'pomodoro' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'tasks':
        return <Tasks />;
      case 'pomodoro':
        return <Pomodoro />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  }, [currentPage]);

  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="flex h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {renderPage()}
          </main>
          <button
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-8 right-8 bg-primary hover:bg-primary-focus text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300 z-50"
            aria-label="Add new task"
          >
            <AddIcon />
          </button>
          <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
