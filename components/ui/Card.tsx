import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
