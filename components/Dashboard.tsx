import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskItem from './TaskItem';
import Card from './ui/Card';

const isToday = (someDate: Date) => {
    const today = new Date();
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear();
};

const Dashboard: React.FC = () => {
    const { tasks } = useTasks();
    const incompleteTasks = tasks.filter(task => !task.completed);

    const todayTasks = incompleteTasks
        .filter(task => isToday(new Date(task.deadline)))
        .sort((a, b) => b.priority.localeCompare(a.priority));

    const upcomingTasks = incompleteTasks
        .filter(task => !isToday(new Date(task.deadline)))
        .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
        .slice(0, 5);

    const completedCount = tasks.filter(t => t.completed).length;
    const productivityScore = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div className="animate-fade-in-up space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">Dashboard</h1>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">Welcome back! Here's your productivity snapshot.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
            <h3 className="font-bold text-lg">Productivity Score</h3>
            <p className="text-5xl font-extrabold text-primary">{productivityScore}%</p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{completedCount} of {tasks.length} tasks completed.</p>
        </Card>
        <Card>
            <h3 className="font-bold text-lg">Today's Tasks</h3>
            <p className="text-5xl font-extrabold text-secondary">{todayTasks.length}</p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">due today</p>
        </Card>
         <Card>
            <h3 className="font-bold text-lg">Upcoming Tasks</h3>
            <p className="text-5xl font-extrabold text-accent">{upcomingTasks.length}</p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">in the next 7 days</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Today's Focus</h2>
          <div className="space-y-4">
            {todayTasks.length > 0 ? (
              todayTasks.map(task => <TaskItem key={task.id} task={task} />)
            ) : (
              <Card><p className="text-center text-light-text-secondary dark:text-dark-text-secondary">No tasks due today. Enjoy your day!</p></Card>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
          <div className="space-y-4">
            {upcomingTasks.length > 0 ? (
              upcomingTasks.map(task => <TaskItem key={task.id} task={task} />)
            ) : (
                <Card><p className="text-center text-light-text-secondary dark:text-dark-text-secondary">No upcoming tasks. Plan ahead!</p></Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
