
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Star, Users, Target } from 'lucide-react';
import Header from '@/components/Header';
import GameButton from '@/components/GameButton';
import GameCard from '@/components/GameCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <div className="float-animation inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Save Earth,<br />Earn Karma!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Turn eco-friendly actions into an epic adventure! Track your carbon footprint, level up your karma, and unlock awesome rewards! 🌱✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/tracker">
              <GameButton size="lg" className="pulse-glow">
                🚀 Start Your Eco Adventure
              </GameButton>
            </Link>
            <Link to="/karma">
              <GameButton variant="secondary" size="lg">
                📊 View My Karma
              </GameButton>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float-animation" style={{ animationDelay: '0.5s' }}>
          <div className="text-4xl">🌱</div>
        </div>
        <div className="absolute top-32 right-16 float-animation" style={{ animationDelay: '1s' }}>
          <div className="text-4xl">⭐</div>
        </div>
        <div className="absolute bottom-20 left-20 float-animation" style={{ animationDelay: '1.5s' }}>
          <div className="text-4xl">🏆</div>
        </div>
        <div className="absolute bottom-32 right-10 float-animation" style={{ animationDelay: '2s' }}>
          <div className="text-4xl">🌍</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works 🎮
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GameCard className="text-center hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 bounce-in">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Track Actions</h3>
              <p className="text-gray-600">Log your daily eco-friendly activities and watch your karma grow!</p>
            </GameCard>
            
            <GameCard className="text-center hover:-rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 bounce-in" style={{ animationDelay: '0.1s' }}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Earn XP</h3>
              <p className="text-gray-600">Level up and unlock badges as you help save the planet!</p>
            </GameCard>
            
            <GameCard className="text-center hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 bounce-in" style={{ animationDelay: '0.2s' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Compete</h3>
              <p className="text-gray-600">Challenge friends and climb the eco-warrior leaderboard!</p>
            </GameCard>
            
            <GameCard className="text-center hover:-rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 bounce-in" style={{ animationDelay: '0.3s' }}>
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Redeem</h3>
              <p className="text-gray-600">Spend karma points on awesome eco-friendly rewards!</p>
            </GameCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become an Eco Hero? 🦸‍♀️
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of kids making a difference! Every small action counts towards a better planet! 🌍💚
          </p>
          <Link to="/tracker">
            <GameButton 
              variant="secondary" 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-50 border-white shadow-2xl"
            >
              🌟 Begin My Journey
            </GameButton>
          </Link>
        </div>
      </section>
      
      <div className="pb-20 md:pb-0"></div>
    </div>
  );
};

export default Index;
