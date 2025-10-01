import React from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-transparent border-2 border-primaryColor hover:bg-hoverBg transition-all duration-300 ease-in-out group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <IconSun
          size={20}
          className={`absolute transition-all duration-300 ease-in-out text-primaryColor ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
        
        {/* Moon Icon */}
        <IconMoon
          size={20}
          className={`absolute transition-all duration-300 ease-in-out text-primaryColor ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
      
      {/* Hover effect ring */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primaryColor/30 transition-all duration-300 ease-in-out scale-110 opacity-0 group-hover:opacity-100"></div>
    </button>
  );
};

export default ThemeToggle;
