import React, { useState, useMemo } from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskItem from './TaskItem';
import { Task, Category, Priority } from '../types';
import Card from './ui/Card';

const Tasks: React.FC = () => {
    const { tasks } = useTasks();
    const [categoryFilter, setCategoryFilter] = useState<Category | 'All'>('All');
    const [priorityFilter, setPriorityFilter] = useState<Priority | 'All'>('All');
    const [sortBy, setSortBy] = useState<'deadline' | 'priority' | 'createdAt'>('createdAt');
    const [showCompleted, setShowCompleted] = useState(true);

    const filteredAndSortedTasks = useMemo(() => {
        let result = tasks;

        if (!showCompleted) {
            result = result.filter(task => !task.completed);
        }

        if (categoryFilter !== 'All') {
            result = result.filter(task => task.category === categoryFilter);
        }
        if (priorityFilter !== 'All') {
            result = result.filter(task => task.priority === priorityFilter);
        }

        result.sort((a, b) => {
            if (sortBy === 'deadline') {
                return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
            }
            if (sortBy === 'priority') {
                const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            // createdAt
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        return result;
    }, [tasks, categoryFilter, priorityFilter, sortBy, showCompleted]);

    const filterBaseClasses = "px-4 py-2 rounded-md bg-light-card dark:bg-dark-bg-secondary focus:ring-2 focus:ring-primary focus:outline-none";

    return (
        <div className="animate-fade-in-up">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">All Tasks</h1>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">Manage and organize all your tasks in one place.</p>
            </header>
            
            <Card className="mb-6">
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="category" className="text-sm font-medium mr-2">Category:</label>
                        <select id="category" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value as any)} className={filterBaseClasses}>
                            <option>All</option>
                            <option>Work</option>
                            <option>Study</option>
                            <option>Personal</option>
                            <option>Urgent</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="priority" className="text-sm font-medium mr-2">Priority:</label>
                        <select id="priority" value={priorityFilter} onChange={e => setPriorityFilter(e.target.value as any)} className={filterBaseClasses}>
                            <option>All</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sort" className="text-sm font-medium mr-2">Sort By:</label>
                        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value as any)} className={filterBaseClasses}>
                            <option value="createdAt">Newest</option>
                            <option value="deadline">Deadline</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                     <div className="flex items-center">
                        <input type="checkbox" id="show-completed" checked={showCompleted} onChange={e => setShowCompleted(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/>
                        <label htmlFor="show-completed" className="ml-2 block text-sm">Show Completed</label>
                    </div>
                </div>
            </Card>

            <div className="space-y-4">
                {filteredAndSortedTasks.length > 0 ? (
                    filteredAndSortedTasks.map(task => <TaskItem key={task.id} task={task} />)
                ) : (
                    <Card><p className="text-center text-light-text-secondary dark:text-dark-text-secondary py-8">No tasks match your filters. Try creating one!</p></Card>
                )}
            </div>
        </div>
    );
};

export default Tasks;
