
import React from 'react';
import { Trophy, Star, Crown, Medal, Target } from 'lucide-react';
import Header from '@/components/Header';
import GameCard from '@/components/GameCard';
import XPCounter from '@/components/XPCounter';

const Karma = () => {
  const userStats = {
    xp: 1250,
    level: 12,
    rank: 3,
    streak: 7,
    totalActions: 89,
    carbonSaved: 47.2
  };

  const badges = [
    { id: 1, name: 'First Steps', icon: '👶', description: 'Complete your first eco action', earned: true },
    { id: 2, name: 'Green Warrior', icon: '⚔️', description: 'Complete 50 eco actions', earned: true },
    { id: 3, name: 'Tree Hugger', icon: '🌳', description: 'Plant 5 trees', earned: true },
    { id: 4, name: 'Recycling Hero', icon: '♻️', description: 'Recycle 20 items', earned: true },
    { id: 5, name: 'Bike Master', icon: '🚲', description: 'Bike instead of drive 10 times', earned: false },
    { id: 6, name: 'Eco Legend', icon: '👑', description: 'Reach level 15', earned: false }
  ];

  const leaderboard = [
    { rank: 1, name: 'EcoChampion2024', xp: 2150, avatar: '🌟' },
    { rank: 2, name: 'GreenKid123', xp: 1890, avatar: '🌱' },
    { rank: 3, name: 'You!', xp: 1250, avatar: '🦸‍♀️', isUser: true },
    { rank: 4, name: 'NatureLover', xp: 1100, avatar: '🌍' },
    { rank: 5, name: 'PlantPower', xp: 950, avatar: '🌿' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Your Karma Dashboard 🎮
          </h1>
          <p className="text-lg text-gray-600">
            Check out your eco-warrior progress! 🌟
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* XP Progress */}
          <div className="lg:col-span-2">
            <XPCounter 
              xp={userStats.xp}
              level={userStats.level}
              xpToNext={100 - (userStats.xp % 100)}
              animated={true}
            />
          </div>

          {/* Quick Stats */}
          <GameCard className="bg-gradient-to-r from-purple-100 to-pink-100">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-gray-800">#{userStats.rank}</div>
              <div className="text-gray-600">Global Rank</div>
            </div>
          </GameCard>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <GameCard className="text-center bg-gradient-to-r from-green-100 to-emerald-100">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-gray-800">{userStats.streak}</div>
            <div className="text-gray-600">Day Streak</div>
          </GameCard>

          <GameCard className="text-center bg-gradient-to-r from-blue-100 to-cyan-100">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-gray-800">{userStats.totalActions}</div>
            <div className="text-gray-600">Total Actions</div>
          </GameCard>

          <GameCard className="text-center bg-gradient-to-r from-yellow-100 to-orange-100">
            <div className="text-3xl mb-2">🌍</div>
            <div className="text-2xl font-bold text-gray-800">{userStats.carbonSaved}kg</div>
            <div className="text-gray-600">CO₂ Saved</div>
          </GameCard>

          <GameCard className="text-center bg-gradient-to-r from-purple-100 to-pink-100">
            <div className="text-3xl mb-2">💎</div>
            <div className="text-2xl font-bold text-gray-800">{Math.floor(userStats.xp / 10)}</div>
            <div className="text-gray-600">Karma Points</div>
          </GameCard>
        </div>

        {/* Badges Section */}
        <GameCard className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Medal className="w-6 h-6 text-yellow-500" />
            Achievement Badges
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  badge.earned
                    ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300 shadow-lg'
                    : 'bg-gray-100 border-gray-300 opacity-60'
                }`}
              >
                <div className="text-center">
                  <div className={`text-3xl mb-2 ${badge.earned ? 'bounce-in' : ''}`}>
                    {badge.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{badge.name}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                  {badge.earned && (
                    <div className="mt-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full inline-block">
                      ✓ Earned
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </GameCard>

        {/* Leaderboard */}
        <GameCard>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-500" />
            Global Leaderboard
          </h2>
          <div className="space-y-3">
            {leaderboard.map(player => (
              <div
                key={player.rank}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                  player.isUser
                    ? 'bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300 glow-effect'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`text-2xl font-bold ${
                  player.rank === 1 ? 'text-yellow-500' :
                  player.rank === 2 ? 'text-gray-400' :
                  player.rank === 3 ? 'text-orange-400' : 'text-gray-600'
                }`}>
                  #{player.rank}
                </div>
                <div className="text-2xl">{player.avatar}</div>
                <div className="flex-1">
                  <div className={`font-bold ${player.isUser ? 'text-green-700' : 'text-gray-800'}`}>
                    {player.name}
                  </div>
                  <div className="text-sm text-gray-600">{player.xp} XP</div>
                </div>
                {player.rank <= 3 && (
                  <div className="text-2xl">
                    {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </GameCard>

        <div className="pb-20 md:pb-0"></div>
      </div>
    </div>
  );
};

export default Karma;
