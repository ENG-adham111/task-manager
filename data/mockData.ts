import { User, Lab, LabDifficulty, LabCategory, LeaderboardEntry } from '../types';

export const MOCK_USER: User = {
  id: 'user-001',
  name: 'Alex C.',
  email: 'alex@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=alex',
  role: 'user',
  points: 1250,
  completedLabs: ['lab-001', 'lab-002'],
};

export const MOCK_LABS: Lab[] = [
  {
    id: 'lab-001',
    title: 'SQL Injection - Beginner',
    difficulty: 'Beginner',
    category: 'Web',
    description: 'Learn the basics of SQL injection by exploiting a vulnerable login form. Retrieve hidden data from the database.',
    points: 100,
    tags: ['SQLi', 'Database', 'Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'lab-002',
    title: 'Cross-Site Scripting (XSS) - Stored',
    difficulty: 'Beginner',
    category: 'Web',
    description: 'Inject a malicious script into a comment section that gets stored on the server and executed by other users.',
    points: 150,
    tags: ['XSS', 'JavaScript', 'Client-Side'],
    imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'lab-003',
    title: 'Insecure Direct Object References (IDOR)',
    difficulty: 'Intermediate',
    category: 'Web',
    description: "Manipulate URL parameters to access resources you're not authorized to view, such as other users' profiles.",
    points: 200,
    tags: ['IDOR', 'Authorization', 'Access Control'],
    imageUrl: 'https://images.unsplash.com/photo-1585028442843-e75b7a1b7e53?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'lab-004',
    title: 'Basic Buffer Overflow',
    difficulty: 'Advanced',
    category: 'Reverse Engineering',
    description: 'Exploit a simple C program with a buffer overflow vulnerability to execute arbitrary code.',
    points: 350,
    tags: ['Binary Exploitation', 'BoF', 'Memory'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
  },
   {
    id: 'lab-005',
    title: 'Network Traffic Analysis',
    difficulty: 'Intermediate',
    category: 'Forensics',
    description: 'Analyze a captured network traffic file (.pcap) to find hidden flags and sensitive information.',
    points: 250,
    tags: ['Wireshark', 'PCAP', 'Networking'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'lab-006',
    title: 'JWT Secret Key Brute-Force',
    difficulty: 'Advanced',
    category: 'Web',
    description: 'Exploit a weakly signed JSON Web Token (JWT) by brute-forcing the secret key to escalate privileges.',
    points: 400,
    tags: ['JWT', 'Brute-Force', 'Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1631103732128-f5ed1284d7e0?q=80&w=2070&auto=format&fit=crop',
  }
];

export const MOCK_FLAGS: Record<string, string> = {
    'lab-001': 'SHL{d4t4b4s3_0wn3d}',
    'lab-002': 'SHL{xss_m4st3r_a1ert}',
    'lab-003': 'SHL{1d0r_is_insecure}',
    'lab-004': 'SHL{st4ck_sm4sh3d_!}',
    'lab-005': 'SHL{n3tw0rk_sn1ff3r}',
    'lab-006': 'SHL{jwt_cr4ck3d_secr3t}',
};

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
    { rank: 1, user: { id: 'user-007', name: 'ZeroCool', avatarUrl: 'https://i.pravatar.cc/150?u=zerocool' }, points: 5800 },
    { rank: 2, user: { id: 'user-002', name: 'AcidBurn', avatarUrl: 'https://i.pravatar.cc/150?u=acidburn' }, points: 5100 },
    { rank: 3, user: { id: 'user-003', name: 'Trinity', avatarUrl: 'https://i.pravatar.cc/150?u=trinity' }, points: 4500 },
    { rank: 4, user: { id: 'user-004', name: 'Neo', avatarUrl: 'https://i.pravatar.cc/150?u=neo' }, points: 3200 },
    { rank: 5, user: { id: 'user-001', name: 'Alex C.', avatarUrl: MOCK_USER.avatarUrl }, points: 1250 },
    { rank: 6, user: { id: 'user-005', name: 'Ghost', avatarUrl: 'https://i.pravatar.cc/150?u=ghost' }, points: 900 },
    { rank: 7, user: { id: 'user-006', name: 'NoobMaster', avatarUrl: 'https://i.pravatar.cc/150?u=noobmaster' }, points: 450 },
];
