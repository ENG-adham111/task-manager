
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { User } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { MOCK_USER } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// Fix: Export AuthContext so it can be used by the useAuth hook in hooks/useAuth.ts
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>('safehack-user', null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    // Simulate API call
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            // In a real app, you'd verify credentials against a backend
            if (email && pass) {
                setUser(MOCK_USER);
            }
            setIsLoading(false);
            resolve();
        }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};