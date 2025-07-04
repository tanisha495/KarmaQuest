
import React, { useState } from 'react';
import { TreePine, Droplets, Wind, Recycle } from 'lucide-react';
import Header from '@/components/Header';
import GameButton from '@/components/GameButton';
import GameCard from '@/components/GameCard';
import { useToast } from '@/hooks/use-toast';

const Impact = () => {
  const { toast } = useToast();
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  const offsetActions = [
    {
      id: 'plant-tree',
      icon: TreePine,
      emoji: '🌳',
      title: 'Plant 1 Tree',
      description: 'Offset 22kg CO₂ per year',
      cost: '50 Karma Points',
      impact: '22kg CO₂/year',
      category: 'forest'
    },
    {
      id: 'water-filter',
      icon: Droplets,
      emoji: '💧',
      title: 'Install Water Filter',
      description: 'Save 1,460 plastic bottles per year',
      cost: '30 Karma Points',
      impact: '1,460 bottles/year',
      category: 'water'
    },
    {
      id: 'solar-panel',
      icon: Wind,
      emoji: '☀️',
      title: 'Support Solar Energy',
      description: 'Fund 1 hour of clean energy',
      cost: '25 Karma Points',
      impact: '2kg CO₂ saved',
      category: 'energy'
    },
    {
      id: 'ocean-cleanup',
      icon: Recycle,
      emoji: '🌊',
      title: 'Ocean Cleanup',
      description: 'Remove 1kg of ocean plastic',
      cost: '40 Karma Points',
      impact: '1kg plastic removed',
      category: 'ocean'
    },
    {
      id: 'bee-hive',
      icon: TreePine,
      emoji: '🐝',
      title: 'Support Bee Colony',
      description: 'Help pollinate 1 acre of plants',
      cost: '35 Karma Points',
      impact: '1 acre pollinated',
      category: 'biodiversity'
    },
    {
      id: 'composting',
      icon: Recycle,
      emoji: '🌱',
      title: 'Community Composting',
      description: 'Reduce 5kg food waste',
      cost: '20 Karma Points',
      impact: '5kg waste reduced',
      category: 'waste'
    }
  ];

  const handleActionComplete = (actionId: string, actionTitle: string) => {
    if (completedActions.includes(actionId)) {
      toast({
        title: "Already completed! 🎉",
        description: "You've already done this amazing action today!"
      });
      return;
    }

    setCompletedActions(prev => [...prev, actionId]);
    
    toast({
      title: `Amazing! ${actionTitle} completed! 🌟`,
      description: "Your real-world impact is making a difference! Keep going!",
    });
  };

  const categories = ['all', 'forest', 'water', 'energy', 'ocean', 'biodiversity', 'waste'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredActions = activeCategory === 'all' 
    ? offsetActions 
    : offsetActions.filter(action => action.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Real World Impact 🌍
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turn your karma points into real environmental action! Every click makes a difference! ✨
          </p>
        </div>

        {/* Your Karma Balance */}
        <GameCard className="text-center mb-8 bg-gradient-to-r from-yellow-100 to-orange-100">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💎</div>
            <div>
              <div className="text-2xl font-bold text-gray-800">125 Karma Points</div>
              <div className="text-gray-600">Available to spend</div>
            </div>
          </div>
        </GameCard>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-green-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-green-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Impact Actions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredActions.map(action => {
            const isCompleted = completedActions.includes(action.id);
            const IconComponent = action.icon;
            
            return (
              <GameCard 
                key={action.id}
                className={`relative overflow-hidden ${
                  isCompleted ? 'bg-green-50 border-green-200' : ''
                }`}
              >
                {isCompleted && (
                  <div className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center bounce-in">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center float-animation">
                      <div className="text-2xl">{action.emoji}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-600">Impact</div>
                    <div className="font-bold text-green-600">{action.impact}</div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">{action.cost}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">Cost:</span>
                      <span className="text-yellow-600">💎</span>
                    </div>
                  </div>
                  
                  <GameButton
                    variant={isCompleted ? 'success' : 'primary'}
                    className="w-full"
                    onClick={() => handleActionComplete(action.id, action.title)}
                    disabled={isCompleted}
                  >
                    {isCompleted ? '✅ Completed!' : '🚀 Take Action!'}
                  </GameButton>
                </div>
              </GameCard>
            );
          })}
        </div>

        {/* Progress Summary */}
        {completedActions.length > 0 && (
          <GameCard className="text-center bg-gradient-to-r from-green-100 to-blue-100 bounce-in">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              🎉 Amazing Progress!
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              You've completed <span className="font-bold text-green-600">{completedActions.length}</span> real-world impact actions!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white px-4 py-2 rounded-full">
                🌳 <span className="font-bold">Trees helping Earth</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full">
                💧 <span className="font-bold">Ocean getting cleaner</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full">
                ☀️ <span className="font-bold">Clean energy flowing</span>
              </div>
            </div>
          </GameCard>
        )}

        <div className="pb-20 md:pb-0"></div>
      </div>
    </div>
  );
};

export default Impact;
