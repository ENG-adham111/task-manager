import { useContext } from 'react';
import { LabContext } from '../context/LabContext';

export const useLabs = () => {
  const context = useContext(LabContext);
  if (context === undefined) {
    throw new Error('useLabs must be used within a LabProvider');
  }
  return context;
};
