import React from 'react';
import { IconButton } from '@mui/material';  // Assuming you're using Material-UI
import { WbSunny, Brightness3 } from '@mui/icons-material'; // Importing the icons

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header
      className={`p-4 shadow-lg transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 transform transition-all duration-300 hover:scale-110">
          My Portfolio
        </h1>

        {/* Theme Toggle Button */}
        <div className="md:flex items-center space-x-6">
          <IconButton
            onClick={toggleTheme}
            className="transition-transform duration-300 hover:scale-110"
          >
            {isDarkMode ? (
              <WbSunny className="text-yellow-400 text-2xl transform transition-all duration-500 hover:scale-125" />
            ) : (
              <Brightness3 className="text-gray-800 text-2xl transform transition-all duration-500 hover:scale-125" />
            )}
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
