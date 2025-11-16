
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
// Fix: import useLabs to make it available in the Main component.
import { LabProvider, useLabs } from './context/LabContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import LabsCatalog from './components/LabsCatalog';
import Leaderboard from './components/Leaderboard';
import LabEnvironment from './components/LabEnvironment';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LabProvider>
          <Main />
        </LabProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

const Main: React.FC = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = React.useState('dashboard');
  const { activeLabSession } = useLabs();

  const renderPage = () => {
    if (activeLabSession) {
      return <LabEnvironment />;
    }
    
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'labs':
        return <LabsCatalog />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <Dashboard setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user ? renderPage() : <LandingPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;