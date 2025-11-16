import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-bg transition-all duration-200 transform hover:scale-105';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-focus focus:ring-primary',
    secondary: 'bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
