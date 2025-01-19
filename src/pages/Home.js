import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Project from "../components/Project";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({ isDarkMode, toggleTheme }) => {
  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      {/* Header Section */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Full-Height Background Section */}
      <div
        className={`relative min-h-screen flex flex-col justify-center items-center text-center ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
        style={{
          backgroundImage: "url('/assets/img/snake-crawls.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode
              ? "from-gray-900/90 to-gray-900/30"
              : "from-gray-200/10 to-gray-900/40"
          }`}
        ></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6">
            <img
              src="/assets/img/python.png"
              alt="Python Logo"
              className="w-24 md:w-36 animate-bounce"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 transition-all duration-1000">
            Welcome to My Portfolio
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-200 transition-opacity duration-1000">
            <span className="text-yellow-400 font-semibold">Explore</span> my
            work with dark and light theme support.
          </p>

          <div className="h-1 w-40 bg-yellow-400 mt-6 mb-6 rounded-full"></div>

          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded shadow hover:bg-yellow-500 transition-all duration-300">
              View Projects
            </button>
            <button className="px-6 py-2 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded shadow hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-8 right-8 text-yellow-400 font-extrabold text-5xl md:text-6xl animate-pulse"
          style={{ transform: "rotate(-15deg)" }}
        >
          PYTHON
        </div>
      </div>

      {/* Other Sections */}
      <Profile />

      <Skill />

      <Project />

      <Contact />
      
      <About />


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
