import React, { useState, useMemo } from 'react';
import { useLabs } from '../hooks/useLabs';
import { Lab, LabCategory, LabDifficulty } from '../types';
import Card from './ui/Card';
import LabCard from './LabCard';

const LabsCatalog: React.FC = () => {
    const { labs } = useLabs();
    const [difficultyFilter, setDifficultyFilter] = useState<LabDifficulty | 'All'>('All');
    const [categoryFilter, setCategoryFilter] = useState<LabCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLabs = useMemo(() => {
        return labs
            .filter(lab => difficultyFilter === 'All' || lab.difficulty === difficultyFilter)
            .filter(lab => categoryFilter === 'All' || lab.category === categoryFilter)
            .filter(lab => lab.title.toLowerCase().includes(searchQuery.toLowerCase()) || lab.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [labs, difficultyFilter, categoryFilter, searchQuery]);

    const filterBaseClasses = "w-full sm:w-auto px-4 py-2 rounded-md bg-light-card dark:bg-dark-card border border-gray-300 dark:border-dark-border focus:ring-2 focus:ring-primary focus:outline-none";

    return (
        <div className="animate-fade-in-up">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-light-text dark:text-dark-text">Labs Catalog</h1>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mt-2">Find your next challenge. Hone your skills.</p>
            </header>
            
            <Card className="mb-8">
                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
                    <div className="w-full sm:flex-1">
                        <input 
                            type="text" 
                            placeholder="Search labs..." 
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className={`${filterBaseClasses} w-full`}
                        />
                    </div>
                    <div>
                        <select value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value as any)} className={filterBaseClasses}>
                            <option value="All">All Difficulties</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Expert</option>
                        </select>
                    </div>
                    <div>
                        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value as any)} className={filterBaseClasses}>
                            <option value="All">All Categories</option>
                            <option>Web</option>
                            <option>Network</option>
                            <option>Reverse Engineering</option>
                            <option>Forensics</option>
                        </select>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLabs.length > 0 ? (
                    filteredLabs.map(lab => <LabCard key={lab.id} lab={lab} />)
                ) : (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-16">
                        <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">No labs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LabsCatalog;
