import React from 'react';
import Card from './ui/Card';
import { MOCK_LEADERBOARD } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const Leaderboard: React.FC = () => {
    const { user } = useAuth();
    
    return (
        <div className="animate-fade-in-up">
             <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-light-text dark:text-dark-text">Leaderboard</h1>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mt-2">See who's at the top of their game.</p>
            </header>

            <Card className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                    <thead>
                        <tr className="border-b border-dark-border">
                            <th className="p-4 font-semibold text-sm">Rank</th>
                            <th className="p-4 font-semibold text-sm">User</th>
                            <th className="p-4 font-semibold text-sm text-right">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_LEADERBOARD.map((entry) => (
                            <tr key={entry.user.id} className={`border-b border-dark-border last:border-b-0 ${entry.user.id === user?.id ? 'bg-primary/10' : 'hover:bg-dark-border/30'}`}>
                                <td className="p-4">
                                    <span className="text-lg font-bold w-8 h-8 flex items-center justify-center">
                                        {entry.rank <= 3 ? (
                                            <span className={entry.rank === 1 ? 'text-yellow-400' : entry.rank === 2 ? 'text-slate-300' : 'text-yellow-600'}>
                                                {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                                            </span>
                                        ) : entry.rank}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <img src={entry.user.avatarUrl} alt={entry.user.name} className="w-10 h-10 rounded-full" />
                                        <span className="font-medium">{entry.user.name}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-right font-semibold text-primary">{entry.points.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default Leaderboard;
