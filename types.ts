// Fix: Import ReactNode to be used in Service interface.
import { ReactNode } from 'react';

export type ID = string;

export type Category = 'Work' | 'Study' | 'Personal' | 'Urgent';
export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: ID;
  title: string;
  description?: string;
  category: Category;
  priority: Priority;
  deadline: string; // ISO string format
  progress: number; // 0-100
  completed: boolean;
  createdAt: string; // ISO string format
}

// Fix: Add Service type definition.
export interface Service {
  icon: ReactNode;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

// Fix: Add PricingPlan type definition.
export interface PricingPlan {
  name: { en: string; ar: string };
  price: string;
  features: {
    en: string[];
    ar: string[];
  };
  isPopular: boolean;
}

// Fix: Add Project type definition.
export interface Project {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  imageUrl: string;
  tags: string[];
  link: string;
}
