import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa"; // Icons for social media and "go to top" button

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Link to Bento.me */}
        <div className="mb-4 text-center">
          <p className="text-lg">
            <a
              href="http://bento.me/santosh-kakde-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-white transition-all duration-300"
            >
              Visit my social media
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Santosh Kakde. All Rights Reserved.
          </p>
        </div>

        {/* Go to top button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={scrollToTop}
            className="bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
