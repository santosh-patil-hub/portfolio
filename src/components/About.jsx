import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800 py-12 px-4 sm:px-8">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-white text-center">About Us</h2>
      </div>

      <div className="text-center text-white">
        <p className="text-lg mb-6 max-w-2xl mx-auto animate__animated animate__fadeIn">
          Hi, I'm <span className="font-semibold">Santosh Kakde</span>, a
          passionate Python Developer based in Chhatrapati Sambhaji Nagar,
          Maharashtra. I'm currently pursuing my BCA at Shivchhatrapati College
          and have a strong interest in Python development.
        </p>

        <div className="mb-12 animate__animated animate__fadeIn animate__delay-1s">
          <h4 className="text-2xl font-semibold mb-4">Education</h4>
          <p className="text-lg max-w-xl mx-auto mb-6">
            - <strong>12th Grade</strong>: JBMV Junior College, Jaipur, District
            Jalana, Maharashtra, India — 76% <br />- <strong>10th Grade</strong>
            : JBMV Junior College, Jaipur, District Jalana, Maharashtra, India —
            86.20% <br />- <strong>Currently Pursuing BCA (TY)</strong>:
            Shivchhatrapati College, Chhatrapati Sambhaji Nagar
          </p>
        </div>

        <div className="mb-12 animate__animated animate__fadeIn animate__delay-2s">
          <h4 className="text-2xl font-semibold mb-4">Experience</h4>
          <p className="text-lg max-w-xl mx-auto mb-6">
            I completed my internship at <strong>Ekatta Innovators LLP</strong>,
            Chhatrapati Sambhaji Nagar, where I worked as a Python Developer.
            During my time there, I had the opportunity to work on live projects
            and develop hands-on experience in Python development.
          </p>
        </div>

        <div className="mb-12 animate__animated animate__fadeIn animate__delay-3s">
          <h4 className="text-2xl font-semibold mb-4">About Me</h4>
          <p className="text-lg max-w-xl mx-auto mb-6">
            I am passionate about Python development and continuously strive to
            improve my skills and knowledge in the field. With a strong
            foundation in programming and problem-solving, I am eager to
            contribute to meaningful projects and learn new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
