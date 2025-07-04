
import React from 'react';
import { cn } from '@/lib/utils';

interface GameButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const GameButton = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: GameButtonProps) => {
  const baseClasses = "bounce-button font-bold rounded-full shadow-lg border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-400 to-green-500 text-white border-green-300 hover:from-green-500 hover:to-green-600 focus:ring-green-400",
    secondary: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-yellow-300 hover:from-yellow-500 hover:to-orange-500 focus:ring-yellow-400",
    success: "bg-gradient-to-r from-blue-400 to-blue-500 text-white border-blue-300 hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400",
    warning: "bg-gradient-to-r from-purple-400 to-pink-400 text-white border-purple-300 hover:from-purple-500 hover:to-pink-500 focus:ring-purple-400"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default GameButton;
