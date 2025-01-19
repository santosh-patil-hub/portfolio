import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container mx-auto mt-10 p-4 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Profile Image Section */}
      <div className="profile-image relative w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <div className="relative w-full">
          <img
            src="/assets/img/portfolio.jpg"
            alt="Profile"
            className="rounded-lg object-cover w-full h-full md:max-w-none transform transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="profile-info w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Santosh Kakde
        </h1>
        <h2 className="text-lg md:text-xl text-orange-500 font-semibold mt-2">
          Python Developer
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          Hi, I'm Santosh Kakde, a passionate Python Developer from Maharashtra, India. I specialize in creating clean, scalable, and efficient web applications. With a strong foundation in Python and Django, I've had the opportunity to work on diverse projects that challenge me to think critically and solve complex problems. I'm driven by my love for coding and my desire to continuously improve my skills. In addition to web development, I enjoy exploring new technologies and collaborating with like-minded professionals. I'm always eager to learn and grow both personally and professionally. My goal is to use my expertise to build impactful software that can make a difference.
        </p>

        <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
          <li>
            <span className="font-semibold text-orange-500">From:</span> Maharashtra, India
          </li>
          <li>
            <span className="font-semibold text-orange-500">Lives In:</span> Pune, Maharashtra
          </li>
          <li>
            <span className="font-semibold text-orange-500">Age:</span> 21
          </li>
          <li>
            <span className="font-semibold text-orange-500">Gender:</span> Male
          </li>
        </ul>
        <a
          href="/assets/resume/Resume (1).pdf"
          download="Santosh_Kakde_CV.pdf"
          className="mt-6 inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded shadow hover:bg-orange-600 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Profile;
