export type ID = string;

export type UserRole = 'user' | 'admin';
export type LabDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type LabCategory = 'Web' | 'Network' | 'Reverse Engineering' | 'Forensics';

export interface User {
  id: ID;
  name: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
  points: number;
  completedLabs: ID[];
}

export interface Lab {
  id: ID;
  title: string;
  difficulty: LabDifficulty;
  category: LabCategory;
  description: string;
  points: number;
  tags: string[];
  imageUrl: string;
}

export interface LabSession {
  sessionId: ID;
  lab: Lab;
  user: User;
  startTime: number; // Unix timestamp
  status: 'active' | 'completed' | 'expired';
}

export interface FlagSubmission {
  labId: ID;
  flag: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  points: number;
}
