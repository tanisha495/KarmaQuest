
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameButton from '@/components/GameButton';
import GameCard from '@/components/GameCard';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Leaf, User } from 'lucide-react';

const avatars = [
  { id: 1, src: '/placeholder.svg', fallback: '🌱' },
  { id: 2, src: '/placeholder.svg', fallback: '🌍' },
  { id: 3, src: '/placeholder.svg', fallback: '🌳' },
  { id: 4, src: '/placeholder.svg', fallback: '🐝' },
  { id: 5, src: '/placeholder.svg', fallback: '🦋' },
  { id: 6, src: '/placeholder.svg', fallback: '🌺' },
];

const Login = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      // Store user data in localStorage for demo purposes
      localStorage.setItem('user', JSON.stringify({
        username,
        avatar: selectedAvatar,
        xp: 0,
        level: 1,
        karma: 100
      }));
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen game-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg float-animation">
              <Leaf className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to</h1>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            KarmicLoop
          </h2>
          <p className="text-white/80 mt-2">Choose your eco-hero and start your green adventure!</p>
        </div>

        <GameCard className="bg-white/95 backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-lg font-bold text-gray-700 mb-2 block">
                What's your name, green hero? 🌟
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your awesome name!"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-lg border-2 border-green-200 focus:border-green-400 rounded-xl"
              />
            </div>

            <div>
              <Label className="text-lg font-bold text-gray-700 mb-4 block">
                Pick your avatar! 🎭
              </Label>
              <div className="grid grid-cols-3 gap-4">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedAvatar === avatar.id 
                        ? 'scale-110 ring-4 ring-green-400 ring-offset-2' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => setSelectedAvatar(avatar.id)}
                  >
                    <Avatar className="w-16 h-16 mx-auto bounce-button">
                      <AvatarImage src={avatar.src} />
                      <AvatarFallback className="bg-gradient-to-r from-green-200 to-blue-200 text-2xl">
                        {avatar.fallback}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
            </div>

            <GameButton
              variant="primary"
              size="lg"
              className="w-full text-xl py-4"
              onClick={handleLogin}
              disabled={!username.trim()}
            >
              Start My Green Journey! 🚀
            </GameButton>
          </div>
        </GameCard>

        <div className="text-center mt-6">
          <p className="text-white/70 text-sm">
            Ready to save the planet one action at a time? 🌍✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
