import React from 'react';

const liveProjects = [
  {
    title: <a class="active-link" rel="noopener noreferrer" href="https://baimanus.in/" target="_blank">https://baimanus.in/</a>,
    description: "Originated by MGM University. Technologies used include Python, Django, Django REST Framework, HTML, CSS, JavaScript, REST API integrations, PostgreSQL, AWS, Celery, Redis, Gunicorn.",
  }
];

const academicProjects = [
  {
    title: "Room Finders Web Application",
    description:
      "Technologies used: Python, Django, Django REST Framework, PostgreSQL, REST API, React.js, HTML, CSS, JavaScript.",
  },
  {
    title: "Blog Application",
    description:
      "Technologies used: Python, Django, HTML, CSS, JavaScript, Django REST Framework.",
  },
  {
    title: "To-Do List Application",
    description:
      "Technologies used: Python, Django, HTML, CSS, JavaScript, Django REST Framework.",
  },
  {
    title: "Text-to-Speech Application",
    description:
      "Technologies used: Python, Django, HTML, CSS, JavaScript, Django REST Framework.",
  },
];

const Project = ({ isDarkMode }) => {
  return (
    <div className="p-8">

      {/* Live Projects Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-4">Live Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${isDarkMode
                ? "bg-gradient-to-br from-green-600 to-green-800 text-white"
                : "bg-gradient-to-br from-green-200 to-green-400 text-gray-900"
                }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Projects Section */}
      <div>
        <h3 className="text-3xl font-semibold mb-4">Academic Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${isDarkMode
                ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white"
                : "bg-gradient-to-br from-blue-200 to-blue-400 text-gray-900"
                }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
