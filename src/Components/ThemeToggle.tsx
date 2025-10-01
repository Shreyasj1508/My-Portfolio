import React from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-transparent border-2 border-primaryColor hover:bg-primaryColor hover:text-bgColor transition-all duration-500 ease-in-out group shadow-lg hover:shadow-primaryColor/50 hover:shadow-xl"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <IconSun
          size={20}
          className={`absolute transition-all duration-500 ease-in-out group-hover:text-bgColor ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100 text-primaryColor' 
              : 'opacity-0 rotate-180 scale-75 text-primaryColor'
          }`}
        />
        
        {/* Moon Icon */}
        <IconMoon
          size={20}
          className={`absolute transition-all duration-500 ease-in-out group-hover:text-bgColor ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100 text-primaryColor' 
              : 'opacity-0 -rotate-180 scale-75 text-primaryColor'
          }`}
        />
      </div>
      
      {/* Animated background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryColor/20 to-primaryColor/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out scale-110 blur-sm"></div>
      
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primaryColor/50 transition-all duration-500 ease-in-out scale-125 opacity-0 group-hover:opacity-100 animate-pulse"></div>
    </button>
  );
};

export default ThemeToggle;
