
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import GameButton from '@/components/GameButton';
import GameCard from '@/components/GameCard';
import XPCounter from '@/components/XPCounter';
import { Leaf, Target, Award, Gift, TrendingUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  const avatars = [
    { id: 1, fallback: '🌱' },
    { id: 2, fallback: '🌍' },
    { id: 3, fallback: '🌳' },
    { id: 4, fallback: '🐝' },
    { id: 5, fallback: '🦋' },
    { id: 6, fallback: '🌺' },
  ];

  const currentAvatar = avatars.find(a => a.id === user.avatar) || avatars[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg float-animation">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-r from-green-200 to-blue-200 text-4xl">
                {currentAvatar.fallback}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">Welcome back,</span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {user.username}! 🌟
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to save the planet one eco-action at a time? Let's make today count! 🌍✨
          </p>

          <div className="mb-8">
            <XPCounter 
              xp={user.xp || 0} 
              level={user.level || 1} 
              xpToNext={100 - (user.xp % 100)} 
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tracker">
              <GameButton variant="primary" size="lg" className="text-xl px-8 py-4">
                Start Tracking Today! 🚀
              </GameButton>
            </Link>
            <Link to="/karma">
              <GameButton variant="secondary" size="lg" className="text-xl px-8 py-4">
                Check My Karma ⭐
              </GameButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <GameCard className="text-center bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700">
            <Target className="w-8 h-8 text-green-600 dark:text-green-300 mx-auto mb-2 float-animation" />
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">{user.karma || 100}</div>
            <div className="text-sm text-green-600 dark:text-green-300">Karma Points</div>
          </GameCard>
          
          <GameCard className="text-center bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-800 dark:to-orange-700">
            <Award className="w-8 h-8 text-orange-600 dark:text-orange-300 mx-auto mb-2 float-animation" />
            <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">Level {user.level || 1}</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Eco Hero</div>
          </GameCard>
          
          <GameCard className="text-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-800 dark:to-purple-700">
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-300 mx-auto mb-2 float-animation" />
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">7</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">Day Streak</div>
          </GameCard>
          
          <GameCard className="text-center bg-gradient-to-br from-pink-100 to-red-200 dark:from-pink-800 dark:to-red-700">
            <Gift className="w-8 h-8 text-pink-600 dark:text-pink-300 mx-auto mb-2 float-animation" />
            <div className="text-2xl font-bold text-pink-800 dark:text-pink-200">3</div>
            <div className="text-sm text-pink-600 dark:text-pink-300">Rewards Earned</div>
          </GameCard>
        </div>
      </section>

      {/* Action Cards */}
      <section className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          What would you like to do today? 🎯
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/tracker">
            <GameCard hover className="text-center h-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border-green-200 dark:border-green-700">
              <Target className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4 float-animation" />
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Daily Tracker</h3>
              <p className="text-green-600 dark:text-green-300 text-sm">Log your eco-friendly actions and earn XP!</p>
            </GameCard>
          </Link>
          
          <Link to="/karma">
            <GameCard hover className="text-center h-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900 dark:to-orange-800 border-orange-200 dark:border-orange-700">
              <Award className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4 float-animation" />
              <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-2">Karma Dashboard</h3>
              <p className="text-orange-600 dark:text-orange-300 text-sm">See your progress and compete with friends!</p>
            </GameCard>
          </Link>
          
          <Link to="/impact">
            <GameCard hover className="text-center h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700">
              <Leaf className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 float-animation" />
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">Impact Actions</h3>
              <p className="text-blue-600 dark:text-blue-300 text-sm">Discover real-world actions to offset your footprint!</p>
            </GameCard>
          </Link>
          
          <Link to="/rewards">
            <GameCard hover className="text-center h-full bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 border-pink-200 dark:border-pink-700">
              <Gift className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto mb-4 float-animation" />
              <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-2">Rewards Store</h3>
              <p className="text-pink-600 dark:text-pink-300 text-sm">Redeem your karma points for awesome rewards!</p>
            </GameCard>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
