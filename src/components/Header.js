import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { WbSunny, Brightness3 } from '@mui/icons-material';
import { useState } from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`p-4 shadow-md transition-all duration-800 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'}`}
    >
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>

        {/* Links & Theme Toggle for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-200 dark:hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-200 dark:hover:text-gray-400">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-200 dark:hover:text-gray-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200 dark:hover:text-gray-400">Contact</Link></li>
          </ul>

          {/* Theme Toggle Button */}
          <IconButton onClick={toggleTheme} aria-label="theme toggle">
            {isDarkMode ? (
              <WbSunny className="text-yellow-400 transition-all duration-300" />
            ) : (
              <Brightness3 className="text-gray-800 transition-all duration-300" />
            )}
          </IconButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <IconButton onClick={toggleMobileMenu} aria-label="menu toggle">
            <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`} />
          </IconButton>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 bg-gray-800 text-white rounded-lg shadow-lg`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link to="/" className="hover:text-gray-200 dark:hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-200 dark:hover:text-gray-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-gray-200 dark:hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200 dark:hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Theme Toggle Button for Mobile */}
        <div className="flex justify-center p-4">
          <IconButton onClick={toggleTheme} aria-label="theme toggle">
            {isDarkMode ? (
              <WbSunny className="text-yellow-400 transition-all duration-300" />
            ) : (
              <Brightness3 className="text-gray-800 transition-all duration-300" />
            )}
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
