import React, { useState } from 'react';

const About = () => {
  const [darkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen py-10 px-5 sm:px-10 transition-all`}>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Me</h1>

        {/* Personal Information Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 transition-all">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white mb-4">Personal Information</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Hi! I'm a passionate student currently pursuing my Bachelor's in Computer Applications (BCA) at Shivchhatrapati College, Chhatrapati Sambhajinagar.
            I'm deeply interested in web development and AI technologies. I aim to continually improve my skills and build innovative projects.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 transition-all">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white mb-4">Education</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <strong>BCA (Final Year)</strong> - Shivchhatrapati College, Chhatrapati Sambhajinagar
            </li>
            <li className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <strong>Higher Secondary Education (12th Grade)</strong> - JBMV College, Jaipur District, Jalana, Maharashtra (76%)
            </li>
            <li className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <strong>Secondary Education (10th Grade)</strong> - JBMV School, Jaipur District, Jalana, Maharashtra (86%)
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 transition-all">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Skill items */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-sm sm:text-base font-semibold text-white">Python</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-sm sm:text-base font-semibold text-white">Django</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-sm sm:text-base font-semibold text-white">Django REST Framework</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-sm sm:text-base font-semibold text-white">API Integrations</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">MySQL</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">PostgreSQL</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">AWS</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">Celery</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">Redis</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">HTML</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">CSS</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">Basic JavaScript</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-white">React.js</h3>
            </div>
            {/* More skill items here */}
          </div>
        </div>

        {/* Internship Experience Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white mb-4">Internship Experience</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            I have completed my internship at <strong>Ekatta Innovators LLP</strong> in Chhatrapati Sambhajinagar, where I worked on various web development projects.
            This experience gave me hands-on exposure to real-world applications and helped me improve my skills in web development and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
