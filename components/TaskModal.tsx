import React, { useState, useEffect } from 'react';
import { Task, Category, Priority } from '../types';
import { useTasks } from '../hooks/useTasks';
import Button from './ui/Button';
import { CloseIcon } from './icons';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskToEdit?: Task;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, taskToEdit }) => {
  const { addTask, updateTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>('Work');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [deadline, setDeadline] = useState(new Date().toISOString().split('T')[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description || '');
      setCategory(taskToEdit.category);
      setPriority(taskToEdit.priority);
      setDeadline(new Date(taskToEdit.deadline).toISOString().split('T')[0]);
      setProgress(taskToEdit.progress);
    } else {
      // Reset form for new task
      setTitle('');
      setDescription('');
      setCategory('Work');
      setPriority('Medium');
      setDeadline(new Date().toISOString().split('T')[0]);
      setProgress(0);
    }
  }, [taskToEdit, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const taskData = { title, description, category, priority, deadline, progress };
    
    if (taskToEdit) {
      updateTask({ ...taskToEdit, ...taskData });
    } else {
      addTask(taskData);
    }
    onClose();
  };
  
  if (!isOpen) return null;
  
  const inputBaseClasses = "w-full px-3 py-2 rounded-md bg-light-bg-secondary dark:bg-dark-bg focus:ring-2 focus:ring-primary focus:outline-none border-transparent";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-light-card dark:bg-dark-card w-full max-w-lg p-6 rounded-lg shadow-xl relative animate-scale-in" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-light-text-secondary hover:text-light-text dark:hover:text-dark-text">
            <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold mb-6">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className={inputBaseClasses} required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">Description (Optional)</label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className={inputBaseClasses}></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                <select id="category" value={category} onChange={e => setCategory(e.target.value as Category)} className={inputBaseClasses}>
                    <option>Work</option>
                    <option>Study</option>
                    <option>Personal</option>
                    <option>Urgent</option>
                </select>
            </div>
             <div>
                <label htmlFor="priority" className="block text-sm font-medium mb-1">Priority</label>
                <select id="priority" value={priority} onChange={e => setPriority(e.target.value as Priority)} className={inputBaseClasses}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
          </div>
          <div>
             <label htmlFor="deadline" className="block text-sm font-medium mb-1">Deadline</label>
             <input type="date" id="deadline" value={deadline} onChange={e => setDeadline(e.target.value)} className={inputBaseClasses} />
          </div>
           <div>
             <label htmlFor="progress" className="block text-sm font-medium mb-1">Progress: {progress}%</label>
             <input type="range" id="progress" min="0" max="100" step="10" value={progress} onChange={e => setProgress(Number(e.target.value))} className="w-full h-2 bg-light-bg-secondary rounded-lg appearance-none cursor-pointer dark:bg-dark-bg" />
          </div>
          <div className="flex justify-end pt-4 space-x-2">
            <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary">{taskToEdit ? 'Save Changes' : 'Add Task'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
