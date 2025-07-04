
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface XPCounterProps {
  xp: number;
  level: number;
  xpToNext: number;
  animated?: boolean;
}

const XPCounter = ({ xp, level, xpToNext, animated = true }: XPCounterProps) => {
  const [displayXP, setDisplayXP] = useState(animated ? 0 : xp);
  
  useEffect(() => {
    if (animated) {
      const increment = xp / 50;
      const timer = setInterval(() => {
        setDisplayXP(prev => {
          if (prev >= xp) {
            clearInterval(timer);
            return xp;
          }
          return Math.min(prev + increment, xp);
        });
      }, 20);
      
      return () => clearInterval(timer);
    }
  }, [xp, animated]);

  const progress = (displayXP % 100) / 100 * 100;

  return (
    <div className="game-card bg-gradient-to-r from-yellow-100 to-orange-100 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500 float-animation" />
          <span className="font-bold text-lg">Level {level}</span>
        </div>
        <span className="text-sm font-medium text-gray-600">
          {Math.floor(displayXP)} XP
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-xs text-gray-500 mt-1 text-center">
        {xpToNext} XP to next level
      </div>
    </div>
  );
};

export default XPCounter;
