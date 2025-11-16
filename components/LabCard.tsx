import React from 'react';
import { Lab, LabDifficulty } from '../types';
import { useLabs } from '../hooks/useLabs';
import Button from './ui/Button';
import Card from './ui/Card';

interface LabCardProps {
  lab: Lab;
}

const difficultyClasses: Record<LabDifficulty, string> = {
  Beginner: 'bg-green-500/10 text-green-400 border-green-500/30',
  Intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  Advanced: 'bg-red-500/10 text-red-400 border-red-500/30',
  Expert: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
};


const LabCard: React.FC<LabCardProps> = ({ lab }) => {
    const { startLab, isLoading, activeLabSession } = useLabs();

    return (
        <Card className="flex flex-col group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-primary">
            <div className="relative h-40 overflow-hidden -m-6 mb-4">
                 <img src={lab.imageUrl} alt={lab.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
            </div>
            <div className="flex justify-between items-center z-10">
                <h3 className="text-lg font-bold text-dark-text">{lab.title}</h3>
                 <span className={`px-2 py-1 text-xs font-bold rounded-md border ${difficultyClasses[lab.difficulty]}`}>
                    {lab.difficulty}
                </span>
            </div>
            <p className="text-sm text-dark-text-secondary mt-2 flex-grow">{lab.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">{lab.category}</span>
                {lab.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-dark-border/50 text-dark-text-secondary px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
            <div className="mt-6">
                <Button 
                    variant="primary" 
                    className="w-full" 
                    onClick={() => startLab(lab.id)}
                    isLoading={isLoading && activeLabSession?.lab.id !== lab.id} // Prevents loading state on other cards
                    disabled={isLoading || !!activeLabSession}
                >
                    Start Lab
                </Button>
            </div>
        </Card>
    );
};

export default LabCard;
