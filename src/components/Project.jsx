import React from "react";

const Project = () => {
  // Live Projects Data
  const liveProjects = [
    {
      title: (
        <a
          className="active-link"
          rel="noopener noreferrer"
          href="https://baimanus.in/"
          target="_blank"
        >
          https://baimanus.in/
        </a>
      ),
      description:
        "Originated by MGM University. Technologies used include Python, Django, Django REST Framework, HTML, CSS, JavaScript, REST API integrations, PostgreSQL, AWS, Celery, Redis, Gunicorn.",
    },
  ];

  // Academic Projects Data
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

  return (
    <div>
      {/* Live Projects Section */}
      <div className="container mx-auto mb-8 px-2">
        <h4 className="text-2xl font-semibold mb-4 mt-4 relative overflow-hidden text-center mx-auto rounded-lg p-2">
          {/* Gradient Background Animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-800 bg-[length:400%] animate-gradient-x rounded-lg"></span>

          {/* Text with Gradient Color */}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900">
            Live Projects
          </span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out bg-gradient-to-br from-green-200 to-green-400 text-gray-900"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Projects Section */}
      <div className="container mx-auto px-4">
        <h4 className="text-2xl font-semibold mb-4 mt-4 relative overflow-hidden text-center mx-auto rounded-lg p-2">
          {/* Gradient Background Animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 bg-[length:400%] animate-gradient-x rounded-lg"></span>

          {/* Text with Gradient Color */}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
            Academic Projects
          </span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out bg-gradient-to-br from-blue-200 to-blue-400 text-gray-900"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
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
