import React from "react";

const Home = ({ isDarkMode }) => {
  return (
    <div>
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
        {/* Overlay Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode
              ? "from-gray-900/90 to-gray-900/30"
              : "from-gray-200/10 to-gray-900/40"
          }`}
        ></div>

        {/* Animated Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Python Logo Animation */}
          <div className="mb-6">
            <img
              src="/assets/img/python.png"
              alt="Python Logo"
              className="w-24 md:w-36 animate-bounce"
            />
          </div>

          {/* Main Heading */}
          <h2
            className={`text-5xl md:text-6xl font-extrabold transition-all duration-1000 text-yellow-400`}
          >
            Welcome to My Portfolio
          </h2>

          {/* Subheading */}
          <p
            className={`mt-4 text-lg md:text-xl transition-opacity duration-1000 text-gray-200`}
          >
            <span className="text-yellow-400 font-semibold">Explore</span> my
<<<<<<< HEAD
            
=======
            work with dark and light theme support.
>>>>>>> f29eeac62639fb434cac3d74c3d72c83446f5173
          </p>

          {/* Decorative Line */}
          <div className="h-1 w-40 bg-yellow-400 mt-6 mb-6 rounded-full"></div>

          {/* Call-to-Action Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded shadow hover:bg-yellow-500 transition-all duration-300">
              View Projects
            </button>
            <button className="px-6 py-2 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded shadow hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Floating Animated Python Text */}
        <div
          className="absolute bottom-8 right-8 text-yellow-400 font-extrabold text-5xl md:text-6xl animate-pulse"
          style={{ transform: "rotate(-15deg)" }}
        >
          PYTHON
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-container mt-10 mx-auto max-w-6xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Profile Image */}
        <div className="profile-image relative w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <img
              src="/assets/img/portfolio.jpg" // Replace with your image URL
              alt="Profile"
              className="rounded-lg object-cover w-full h-auto max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 w-full h-full bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors duration-300"></div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="profile-info w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Santosh Kakde</h1>
          <h2 className="text-xl text-orange-500 font-semibold mt-2">
            Python Developer
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I’m passionate about crafting clean, scalable, and efficient code.
            With experience in web development and Python programming, I love
            solving complex problems.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="font-semibold text-orange-500">From:</span>{" "}
              Maharashtra, India
            </li>
            <li>
              <span className="font-semibold text-orange-500">Lives In:</span>{" "}
              Pune, Maharashtra
            </li>
            <li>
              <span className="font-semibold text-orange-500">Age:</span> 21
            </li>
            <li>
              <span className="font-semibold text-orange-500">Gender:</span>{" "}
              Male
            </li>
          </ul>
          <a
            href="/assets/resume/Resume (1).pdf"
            download="Santosh_Kakde_CV.pdf"
            className="mt-6 inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded shadow hover:bg-orange-600 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
