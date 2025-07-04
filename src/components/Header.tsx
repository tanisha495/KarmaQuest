
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, BarChart3, Award, Leaf, Gift } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BarChart3, label: 'Track', path: '/tracker' },
    { icon: Award, label: 'Karma', path: '/karma' },
    { icon: Leaf, label: 'Impact', path: '/impact' },
    { icon: Gift, label: 'Rewards', path: '/rewards' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b-2 border-green-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              KarmicLoop
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-1">
            {navItems.map(({ icon: Icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-green-100 text-green-700 shadow-md'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      <nav className="md:hidden bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-around py-2">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === path
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
