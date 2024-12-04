import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { WbSunny, Brightness3 } from "@mui/icons-material";
import { useState } from "react";

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`p-4 shadow-md transition-all duration-300 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
        }`}
    >
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-200">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
          <IconButton onClick={toggleTheme}>
            {isDarkMode ? <WbSunny className="text-yellow-400" /> : <Brightness3 className="text-gray-800" />}
          </IconButton>
        </div>

        <div className="md:hidden">
          <IconButton onClick={toggleMobileMenu}>
            <span className={`block w-6 h-1 bg-white mb-1 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-1 bg-white ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-1 bg-white mt-1 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </IconButton>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white rounded-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-200">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
