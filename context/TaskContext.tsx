import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import { Task, ID } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Action =
  | { type: 'LOAD_TASKS'; payload: Task[] }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: ID }
  | { type: 'TOGGLE_TASK'; payload: ID };

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
  addTask: (task: Omit<Task, 'id' | 'completed' | 'createdAt'>) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: ID) => void;
  toggleTask: (id: ID) => void;
}

const initialState: Task[] = [];

const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [action.payload, ...state];
    case 'UPDATE_TASK':
      return state.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_TASK':
        return state.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed, progress: !task.completed ? 100 : task.progress > 0 ? task.progress : 0 } : task
        );
    default:
      return state;
  }
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', []);
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_TASKS', payload: storedTasks });
  }, []);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);
  
  const addTask = (task: Omit<Task, 'id' | 'completed' | 'createdAt'>) => {
    const newTask: Task = {
        ...task,
        id: crypto.randomUUID(),
        completed: false,
        createdAt: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };
  
  const updateTask = (task: Task) => {
      dispatch({ type: 'UPDATE_TASK', payload: task });
  };

  const deleteTask = (id: ID) => {
      dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTask = (id: ID) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };


  return (
    <TaskContext.Provider value={{ tasks, dispatch, addTask, updateTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};
