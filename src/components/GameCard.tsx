
import React from 'react';
import { cn } from '@/lib/utils';

interface GameCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GameCard = ({ children, className, hover = true, glow = false }: GameCardProps) => {
  return (
    <div
      className={cn(
        "game-card p-6",
        hover && "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        glow && "glow-effect",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GameCard;
