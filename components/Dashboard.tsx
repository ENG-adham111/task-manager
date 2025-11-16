import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLabs } from '../context/LabContext';
import Card from './ui/Card';
import Button from './ui/Button';
import LabCard from './LabCard';
import { MOCK_LEADERBOARD } from '../data/mockData';

interface DashboardProps {
    setCurrentPage: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
    const { user } = useAuth();
    const { labs } = useLabs();
    
    if (!user) return null;

    const userRank = MOCK_LEADERBOARD.find(entry => entry.user.id === user.id)?.rank || 'N/A';
    const newLabs = labs.slice(0, 2);

  return (
    <div className="animate-fade-in-up space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Welcome back, {user.name}!</h1>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">Ready to tackle your next challenge?</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
            <h3 className="font-semibold text-light-text-secondary dark:text-dark-text-secondary">Your Points</h3>
            <p className="text-4xl font-extrabold text-primary">{user.points.toLocaleString()}</p>
        </Card>
        <Card>
            <h3 className="font-semibold text-light-text-secondary dark:text-dark-text-secondary">Global Rank</h3>
            <p className="text-4xl font-extrabold text-secondary">#{userRank}</p>
        </Card>
        <Card>
            <h3 className="font-semibold text-light-text-secondary dark:text-dark-text-secondary">Labs Completed</h3>
            <p className="text-4xl font-extrabold text-accent">{user.completedLabs.length}</p>
        </Card>
      </div>

      <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">New Labs</h2>
            <Button variant="secondary" size="sm" onClick={() => setCurrentPage('labs')}>View All Labs</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newLabs.map(lab => <LabCard key={lab.id} lab={lab} />)}
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
