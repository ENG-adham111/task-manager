import React, { useState } from 'react';
import { Task, Priority } from '../types';
import { useTasks } from '../hooks/useTasks';
import ProgressBar from './ui/ProgressBar';
import { EditIcon, DeleteIcon, CheckIcon } from './icons';
import TaskModal from './TaskModal';

interface TaskItemProps {
  task: Task;
}

const priorityClasses: Record<Priority, string> = {
  Low: 'bg-green-500',
  Medium: 'bg-yellow-500',
  High: 'bg-red-500',
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const { deleteTask, toggleTask } = useTasks();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const { id, title, category, priority, progress, completed, deadline } = task;
    
    const formattedDeadline = new Date(deadline).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric'
    });
    
    return (
        <>
            <div className={`bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md border-l-4 transition-all duration-300 ${completed ? 'border-green-500 opacity-60' : `border-${priority.toLowerCase()}-500`} border-transparent`}>
                <div className="flex items-start gap-4">
                    <button
                        onClick={() => toggleTask(id)}
                        className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-colors ${
                            completed ? 'bg-primary border-primary' : 'border-gray-400 dark:border-gray-500'
                        }`}
                        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                        {completed && <CheckIcon className="w-4 h-4 text-white" />}
                    </button>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <p className={`font-semibold ${completed ? 'line-through text-light-text-secondary dark:text-dark-text-secondary' : ''}`}>{title}</p>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => setIsEditModalOpen(true)} className="text-light-text-secondary hover:text-primary transition-colors"><EditIcon /></button>
                                <button onClick={() => deleteTask(id)} className="text-light-text-secondary hover:text-red-500 transition-colors"><DeleteIcon /></button>
                            </div>
                        </div>
                        <div className="flex items-center text-sm space-x-4 mt-2 text-light-text-secondary dark:text-dark-text-secondary">
                             <div className="flex items-center">
                                <div className={`w-2.5 h-2.5 rounded-full mr-1.5 ${priorityClasses[priority]}`}></div>
                                <span>{priority}</span>
                            </div>
                            <span className="text-xs font-medium bg-light-bg-secondary dark:bg-dark-bg px-2 py-0.5 rounded-full">{category}</span>
                            <span>Due: {formattedDeadline}</span>
                        </div>
                        {!completed && (
                             <div className="mt-3">
                                <ProgressBar progress={progress} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <TaskModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} taskToEdit={task} />
        </>
    );
};

export default TaskItem;
