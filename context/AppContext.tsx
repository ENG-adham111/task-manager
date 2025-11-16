
// Fix: Import React to make React.FC and React.ReactNode available.
import React, { createContext, useContext } from 'react';

interface AppContextType {
  theme: string;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// The AppProvider is implemented directly in App.tsx to avoid exporting another component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // This is a placeholder as the actual provider is in App.tsx
    return <>{children}</>;
};