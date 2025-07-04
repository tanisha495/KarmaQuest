
import React, { useState } from 'react';
import { Gift, Star, Crown, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import GameButton from '@/components/GameButton';
import GameCard from '@/components/GameCard';
import { useToast } from '@/hooks/use-toast';

const Rewards = () => {
  const { toast } = useToast();
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<string | null>(null);

  const userKarmaPoints = 125;

  const rewards = [
    {
      id: 'eco-stickers',
      title: '🌱 Eco Sticker Pack',
      description: '10 awesome eco-themed stickers!',
      cost: 20,
      category: 'digital',
      rarity: 'common',
      icon: '🌱'
    },
    {
      id: 'planet-badge',
      title: '🌍 Planet Protector Badge',
      description: 'Show off your eco-warrior status!',
      cost: 35,
      category: 'badge',
      rarity: 'uncommon',
      icon: '🌍'
    },
    {
      id: 'tree-wallpaper',
      title: '🌳 Nature Wallpaper Pack',
      description: '5 beautiful nature wallpapers',
      cost: 25,
      category: 'digital',
      rarity: 'common',
      icon: '🌳'
    },
    {
      id: 'superhero-avatar',
      title: '🦸‍♀️ Eco-Superhero Avatar',
      description: 'Transform into an eco-superhero!',
      cost: 50,
      category: 'avatar',
      rarity: 'rare',
      icon: '🦸‍♀️'
    },
    {
      id: 'golden-leaf',
      title: '🍃 Golden Leaf Crown',
      description: 'Ultra-rare golden leaf accessory',
      cost: 80,
      category: 'cosmetic',
      rarity: 'legendary',
      icon: '🍃'
    },
    {
      id: 'eco-journal',
      title: '📖 Digital Eco Journal',
      description: 'Track your eco-adventures!',
      cost: 40,
      category: 'tool',
      rarity: 'uncommon',
      icon: '📖'
    },
    {
      id: 'rainbow-trail',
      title: '🌈 Rainbow Trail Effect',
      description: 'Leave a rainbow trail behind you!',
      cost: 60,
      category: 'effect',
      rarity: 'rare',
      icon: '🌈'
    },
    {
      id: 'diamond-karma',
      title: '💎 Diamond Karma Multiplier',
      description: '2x karma points for 1 week!',
      cost: 100,
      category: 'boost',
      rarity: 'legendary',
      icon: '💎'
    }
  ];

  const categories = ['all', 'digital', 'badge', 'avatar', 'cosmetic', 'tool', 'effect', 'boost'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRewards = activeCategory === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === activeCategory);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-500';
      case 'uncommon': return 'from-green-400 to-green-500';
      case 'rare': return 'from-blue-400 to-blue-500';
      case 'legendary': return 'from-purple-400 to-yellow-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300';
      case 'uncommon': return 'border-green-300';
      case 'rare': return 'border-blue-300';
      case 'legendary': return 'border-purple-300 glow-effect';
      default: return 'border-gray-300';
    }
  };

  const handlePurchase = (item: typeof rewards[0]) => {
    if (purchasedItems.includes(item.id)) {
      toast({
        title: "Already owned! 😊",
        description: "You already have this awesome item!"
      });
      return;
    }

    if (userKarmaPoints < item.cost) {
      toast({
        title: "Not enough karma points! 😔",
        description: `You need ${item.cost - userKarmaPoints} more karma points!`,
        variant: "destructive"
      });
      return;
    }

    setShowConfirmation(item.id);
  };

  const confirmPurchase = (item: typeof rewards[0]) => {
    setPurchasedItems(prev => [...prev, item.id]);
    setShowConfirmation(null);
    
    toast({
      title: `🎉 ${item.title} purchased!`,
      description: "Your new reward is now in your collection!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Karma Rewards Store 🛍️
          </h1>
          <p className="text-lg text-gray-600">
            Spend your karma points on awesome eco-rewards! 💎
          </p>
        </div>

        {/* Karma Balance */}
        <GameCard className="text-center mb-8 bg-gradient-to-r from-yellow-100 to-orange-100">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💎</div>
            <div>
              <div className="text-3xl font-bold text-gray-800">{userKarmaPoints}</div>
              <div className="text-gray-600">Karma Points Available</div>
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

        {/* Rewards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredRewards.map(reward => {
            const isPurchased = purchasedItems.includes(reward.id);
            const canAfford = userKarmaPoints >= reward.cost;
            
            return (
              <GameCard 
                key={reward.id}
                className={`relative overflow-hidden border-2 ${getRarityBorder(reward.rarity)} ${
                  isPurchased ? 'bg-green-50' : ''
                }`}
              >
                {/* Rarity Banner */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getRarityColor(reward.rarity)}`} />
                
                {isPurchased && (
                  <div className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center bounce-in">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
                
                <div className="text-center pt-4">
                  <div className="text-6xl mb-4 float-animation">{reward.icon}</div>
                  
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{reward.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{reward.description}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getRarityColor(reward.rarity)}`}>
                      {reward.rarity.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-800">{reward.cost}</span>
                    <span className="text-yellow-600">💎</span>
                  </div>
                  
                  <GameButton
                    variant={isPurchased ? 'success' : canAfford ? 'primary' : 'warning'}
                    className="w-full"
                    onClick={() => handlePurchase(reward)}
                    disabled={isPurchased}
                  >
                    {isPurchased ? '✅ Owned!' : canAfford ? '🛒 Buy Now!' : '💎 Need More Karma'}
                  </GameButton>
                </div>
              </GameCard>
            );
          })}
        </div>

        {/* Purchase Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <GameCard className="max-w-md w-full bounce-in">
              {(() => {
                const item = rewards.find(r => r.id === showConfirmation);
                return item ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                      <p className="font-bold text-gray-800">Confirm Purchase?</p>
                      <p className="text-sm text-gray-600">
                        This will cost {item.cost} karma points
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <GameButton
                        variant="warning"
                        className="flex-1"
                        onClick={() => setShowConfirmation(null)}
                      >
                        Cancel
                      </GameButton>
                      <GameButton
                        variant="primary"
                        className="flex-1"
                        onClick={() => confirmPurchase(item)}
                      >
                        Buy Now! 💎
                      </GameButton>
                    </div>
                  </div>
                ) : null;
              })()}
            </GameCard>
          </div>
        )}

        {/* Collection Summary */}
        {purchasedItems.length > 0 && (
          <GameCard className="text-center bg-gradient-to-r from-purple-100 to-pink-100 bounce-in">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              🎉 Your Collection
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              You own <span className="font-bold text-purple-600">{purchasedItems.length}</span> awesome rewards!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {purchasedItems.map(itemId => {
                const item = rewards.find(r => r.id === itemId);
                return item ? (
                  <div key={itemId} className="bg-white px-3 py-2 rounded-full text-sm">
                    {item.icon} {item.title}
                  </div>
                ) : null;
              })}
            </div>
          </GameCard>
        )}

        <div className="pb-20 md:pb-0"></div>
      </div>
    </div>
  );
};

export default Rewards;
