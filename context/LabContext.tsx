
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { Lab, LabSession, FlagSubmission } from '../types';
import { MOCK_LABS, MOCK_FLAGS } from '../data/mockData';
import { useAuth } from './AuthContext';

interface LabContextType {
  labs: Lab[];
  activeLabSession: LabSession | null;
  startLab: (labId: string) => void;
  stopLab: () => void;
  submitFlag: (submission: FlagSubmission) => boolean;
  isLoading: boolean;
}

// Fix: Export LabContext so it can be used by the useLabs hook in hooks/useLabs.ts
export const LabContext = createContext<LabContextType | undefined>(undefined);

export const LabProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [labs] = useState<Lab[]>(MOCK_LABS);
  const [activeLabSession, setActiveLabSession] = useState<LabSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const startLab = (labId: string) => {
    if (!user) return;
    const labToStart = labs.find(lab => lab.id === labId);
    if (labToStart) {
      setIsLoading(true);
      // Simulate provisioning environment
      setTimeout(() => {
        const newSession: LabSession = {
          sessionId: crypto.randomUUID(),
          lab: labToStart,
          user,
          startTime: Date.now(),
          status: 'active',
        };
        setActiveLabSession(newSession);
        setIsLoading(false);
      }, 1500);
    }
  };

  const stopLab = () => {
    // Simulate de-provisioning
    setActiveLabSession(null);
  };

  const submitFlag = (submission: FlagSubmission): boolean => {
    const correctFlag = MOCK_FLAGS[submission.labId];
    if (correctFlag && correctFlag === submission.flag) {
      // In a real app, update user points in the backend
      alert(`Correct! You earned ${activeLabSession?.lab.points} points.`);
      stopLab();
      return true;
    } else {
      alert('Incorrect flag. Try again!');
      return false;
    }
  };


  return (
    <LabContext.Provider value={{ labs, activeLabSession, startLab, stopLab, submitFlag, isLoading }}>
      {children}
    </LabContext.Provider>
  );
};

export const useLabs = () => {
  const context = useContext(LabContext);
  if (context === undefined) {
    throw new Error('useLabs must be used within a LabProvider');
  }
  return context;
};