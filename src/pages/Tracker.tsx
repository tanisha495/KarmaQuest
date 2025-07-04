
import React, { useState } from 'react';
import { Car, ShoppingBag, Utensils, Recycle, Plus } from 'lucide-react';
import Header from '@/components/Header';
import GameButton from '@/components/GameButton';
import GameCard from '@/components/GameCard';
import { useToast } from '@/hooks/use-toast';

const Tracker = () => {
  const { toast } = useToast();
  const [selectedActions, setSelectedActions] = useState<string[]>([]);

  const ecoActions = [
    { id: 'walk', icon: '🚶‍♀️', label: 'Walked instead of driving', xp: 50, category: 'transport' },
    { id: 'bike', icon: '🚲', label: 'Rode my bike', xp: 60, category: 'transport' },
    { id: 'bus', icon: '🚌', label: 'Took public transport', xp: 40, category: 'transport' },
    { id: 'veggie', icon: '🥗', label: 'Ate a vegetarian meal', xp: 30, category: 'food' },
    { id: 'local', icon: '🏪', label: 'Bought local produce', xp: 35, category: 'shopping' },
    { id: 'recycle', icon: '♻️', label: 'Recycled materials', xp: 25, category: 'waste' },
    { id: 'reuse', icon: '🔄', label: 'Reused something old', xp: 40, category: 'waste' },
    { id: 'water', icon: '💧', label: 'Saved water', xp: 20, category: 'home' },
    { id: 'lights', icon: '💡', label: 'Turned off unused lights', xp: 15, category: 'home' },
    { id: 'plant', icon: '🌱', label: 'Planted something', xp: 80, category: 'nature' }
  ];

  const categories = ['all', 'transport', 'food', 'shopping', 'waste', 'home', 'nature'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredActions = activeCategory === 'all' 
    ? ecoActions 
    : ecoActions.filter(action => action.category === activeCategory);

  const toggleAction = (actionId: string) => {
    setSelectedActions(prev => 
      prev.includes(actionId) 
        ? prev.filter(id => id !== actionId)
        : [...prev, actionId]
    );
  };

  const submitActions = () => {
    if (selectedActions.length === 0) {
      toast({
        title: "No actions selected! 😅",
        description: "Choose at least one eco-friendly action to earn karma points!",
        variant: "destructive"
      });
      return;
    }

    const totalXP = selectedActions.reduce((sum, actionId) => {
      const action = ecoActions.find(a => a.id === actionId);
      return sum + (action?.xp || 0);
    }, 0);

    toast({
      title: `Awesome! +${totalXP} XP earned! 🎉`,
      description: `You completed ${selectedActions.length} eco-friendly actions today!`,
    });

    setSelectedActions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Daily Eco Tracker 📊
          </h1>
          <p className="text-lg text-gray-600">
            Track your eco-friendly actions and earn karma points! 🌟
          </p>
        </div>

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

        {/* Action Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {filteredActions.map(action => {
            const isSelected = selectedActions.includes(action.id);
            return (
              <GameCard
                key={action.id}
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'ring-4 ring-green-400 bg-green-50 transform scale-105' 
                    : 'hover:shadow-xl'
                }`}
                onClick={() => toggleAction(action.id)}
              >
                <div className="text-center">
                  <div className={`text-4xl mb-3 transition-transform duration-200 ${
                    isSelected ? 'wiggle-animation' : ''
                  }`}>
                    {action.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{action.label}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 font-bold">+{action.xp} XP</span>
                    {isSelected && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center bounce-in">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              </GameCard>
            );
          })}
        </div>

        {/* Submit Section */}
        {selectedActions.length > 0 && (
          <GameCard className="text-center bg-gradient-to-r from-green-100 to-blue-100 bounce-in">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to Submit! 🚀
            </h3>
            <p className="text-lg mb-4 text-gray-600">
              {selectedActions.length} actions selected • 
              <span className="font-bold text-green-600 ml-1">
                +{selectedActions.reduce((sum, id) => {
                  const action = ecoActions.find(a => a.id === id);
                  return sum + (action?.xp || 0);
                }, 0)} XP
              </span>
            </p>
            <GameButton size="lg" onClick={submitActions} className="pulse-glow">
              🎉 Earn My Karma Points!
            </GameButton>
          </GameCard>
        )}

        <div className="pb-20 md:pb-0"></div>
      </div>
    </div>
  );
};

export default Tracker;
