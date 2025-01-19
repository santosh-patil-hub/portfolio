import React from "react";

const Skill = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <h4 className="text-3xl sm:text-4xl font-semibold mb-6 mt-4 relative overflow-hidden text-center mx-auto rounded-lg p-4">
        {/* Gradient Background Animation */}
        <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-800 bg-[length:400%] animate-gradient-x rounded-lg"></span>

        {/* Text with Gradient Color */}
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900">
          My Skills
        </span>
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Backend Skills */}
        <div className="skill-category">
          <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4 text-center p-4">
            Backend Development
          </h4>

          {/* Skill 1 - Python */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Python
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Advanced</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full w-9/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 2 - Django */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Django
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Advanced</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full w-17/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 3 - Django Rest Framework */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Django Rest Framework
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-400 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Database Skills */}
        <div className="skill-category">
          <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4 text-center p-4">
            Database
          </h4>

          {/* Skill 4 - MySQL */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              MySQL
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">70%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full w-7/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 5 - PostgreSQL */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              PostgreSQL
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 6 - SQLite */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              SQLite
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Version Control & Deployment */}
        <div className="skill-category">
          <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4 text-center p-4">
            Version Control & Deployment
          </h4>
          
          {/* Skill 7 - Git */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Git
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Advanced</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full w-9/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 8 - GitHub */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              GitHub
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Advanced</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-black h-2.5 rounded-full w-17/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 9 - AWS Cloud Deployment */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              AWS Cloud Deployment
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Skills */}
        <div className="skill-category">
          <h4 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4 text-center p-4">
            Frontend Development
          </h4>

          {/* Skill 10 - HTML */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              HTML
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Advanced</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full w-9/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 11 - CSS */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              CSS
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">70%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full w-7/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 12 - JavaScript */}
          <div className="skill-item">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              JavaScript
            </h5>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-medium">Intermediate</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <div className="flex mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
